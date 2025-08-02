'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import { Destination } from '@/lib/tripData';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);

interface InteractiveMapProps {
  destinations: Destination[];
}

export default function InteractiveMap({ destinations }: InteractiveMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create route coordinates for the polyline
  const routeCoordinates = destinations.map(dest => dest.coordinates);

  // Calculate center point for the map
  const centerLat = destinations.reduce((sum, dest) => sum + dest.coordinates[0], 0) / destinations.length;
  const centerLng = destinations.reduce((sum, dest) => sum + dest.coordinates[1], 0) / destinations.length;

  // Don't render anything on the server
  if (!isClient) {
    return (
      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-red-500">Error loading map: {error}</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full w-full">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        className="leaflet-container"
        whenReady={() => {
          // Map is ready
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Route line connecting destinations */}
        <Polyline
          positions={routeCoordinates}
          color="#3b82f6"
          weight={4}
          opacity={0.8}
          dashArray="10, 10"
        />

        {/* Destination markers */}
        {destinations.map((destination, index) => (
          <Marker
            key={destination.id}
            position={destination.coordinates}
            icon={new (require('leaflet')).divIcon({
              className: 'custom-marker',
              html: `
                <div style="
                  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                  color: white;
                  border-radius: 50%;
                  width: 40px;
                  height: 40px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 16px;
                  border: 3px solid white;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                ">
                  ${index + 1}
                </div>
              `,
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            })}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {destination.country}
                </p>
                <p className="text-sm text-gray-700">
                  {destination.description}
                </p>
                {destination.imageUrl && (
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-24 object-cover rounded mt-2"
                  />
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 