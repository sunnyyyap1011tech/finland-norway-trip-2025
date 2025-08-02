'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Destination } from '@/lib/tripData';

interface StaticMapProps {
  destinations: Destination[];
}

export default function StaticMap({ destinations }: StaticMapProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Calculate center point for the map
  const centerLat = destinations.reduce((sum, dest) => sum + dest.coordinates[0], 0) / destinations.length;
  const centerLng = destinations.reduce((sum, dest) => sum + dest.coordinates[1], 0) / destinations.length;

  // Create route coordinates for the polyline
  const routeCoordinates = destinations.map(dest => dest.coordinates);

  return (
    <div className="h-full w-full relative">
      {/* Static Map using OpenStreetMap */}
      <div className="h-full w-full bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${Math.min(...routeCoordinates.map(c => c[1])) - 2},${Math.min(...routeCoordinates.map(c => c[0])) - 2},${Math.max(...routeCoordinates.map(c => c[1])) + 2},${Math.max(...routeCoordinates.map(c => c[0])) + 2}&layer=mapnik&marker=${centerLat},${centerLng}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          title="Finland Norway Travel Route"
        />
      </div>

      {/* Custom Overlay with Destination Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
            style={{
              left: `${((destination.coordinates[1] - Math.min(...routeCoordinates.map(c => c[1]))) / (Math.max(...routeCoordinates.map(c => c[1])) - Math.min(...routeCoordinates.map(c => c[1])))) * 100}%`,
              top: `${((destination.coordinates[0] - Math.min(...routeCoordinates.map(c => c[0]))) / (Math.max(...routeCoordinates.map(c => c[0])) - Math.min(...routeCoordinates.map(c => c[0])))) * 100}%`,
            }}
            onClick={() => setSelectedDestination(destination)}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-3 border-white shadow-lg hover:scale-110 transition-transform">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Route Lines */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <pattern id="dash" patternUnits="userSpaceOnUse" width="10" height="4">
            <path d="M 0 2 L 10 2" stroke="#3b82f6" strokeWidth="3" fill="none" />
          </pattern>
        </defs>
        {routeCoordinates.slice(0, -1).map((coord, index) => {
          const nextCoord = routeCoordinates[index + 1];
          const x1 = ((coord[1] - Math.min(...routeCoordinates.map(c => c[1]))) / (Math.max(...routeCoordinates.map(c => c[1])) - Math.min(...routeCoordinates.map(c => c[1])))) * 100;
          const y1 = ((coord[0] - Math.min(...routeCoordinates.map(c => c[0]))) / (Math.max(...routeCoordinates.map(c => c[0])) - Math.min(...routeCoordinates.map(c => c[0])))) * 100;
          const x2 = ((nextCoord[1] - Math.min(...routeCoordinates.map(c => c[1]))) / (Math.max(...routeCoordinates.map(c => c[1])) - Math.min(...routeCoordinates.map(c => c[1])))) * 100;
          const y2 = ((nextCoord[0] - Math.min(...routeCoordinates.map(c => c[0]))) / (Math.max(...routeCoordinates.map(c => c[0])) - Math.min(...routeCoordinates.map(c => c[0])))) * 100;
          
          return (
            <line
              key={index}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray="10,5"
              opacity="0.8"
            />
          );
        })}
      </svg>

      {/* Destination Info Popup */}
      {selectedDestination && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm pointer-events-auto">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {selectedDestination.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {selectedDestination.country}
              </p>
              <p className="text-sm text-gray-700">
                {selectedDestination.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedDestination(null)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              ×
            </button>
          </div>
          {selectedDestination.imageUrl && (
            <img
              src={selectedDestination.imageUrl}
              alt={selectedDestination.name}
              className="w-full h-24 object-cover rounded mt-2"
            />
          )}
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 pointer-events-auto">
        <h4 className="font-semibold text-sm text-gray-900 mb-2">Destinations</h4>
        <div className="space-y-1">
          {destinations.map((destination, index) => (
            <div key={destination.id} className="flex items-center space-x-2 text-xs">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <span className="text-gray-700">{destination.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 