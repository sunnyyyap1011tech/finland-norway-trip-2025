'use client';

import { useState, useEffect } from 'react';
import StaticMap from './StaticMap';
import { Destination } from '@/lib/tripData';

interface MapWrapperProps {
  destinations: Destination[];
}

export default function MapWrapper({ destinations }: MapWrapperProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper mounting
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      setShouldRender(false);
    };
  }, []);

  if (!shouldRender) {
    return (
      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Preparing map...</div>
      </div>
    );
  }

  return <StaticMap destinations={destinations} />;
} 