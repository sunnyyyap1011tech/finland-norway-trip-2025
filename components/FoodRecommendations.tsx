"use client";

import { Destination } from '@/lib/tripData';
import { foodRecommendations, buildMapsUrl, FoodPlaceRecommendation } from '@/lib/foodRecommendations';
import { MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

interface FoodRecommendationsProps {
  destinations: Destination[];
}

const formatPrice = (price?: '$' | '$$' | '$$$' | '$$$$') => price ? price : undefined;

export default function FoodRecommendations({ destinations }: FoodRecommendationsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Foods Recommendation</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hand-picked restaurants and food spots for each destination on your trip
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {destinations.map((destination) => {
          const places: FoodPlaceRecommendation[] = foodRecommendations[destination.id] || [];
          return (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-40">
                <img src={destination.imageUrl} alt={destination.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-blue-300" />
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-xs opacity-90">{destination.country}</p>
                </div>
              </div>

              <div className="p-4">
                {places.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    Recommendations coming soon for this destination.
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {places.map((place) => {
                      const mapsQuery = place.mapsQuery || `${place.name} ${destination.name}`;
                      return (
                        <li key={place.name} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-900">{place.name}</span>
                                {place.reservationRecommended && (
                                  <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-1.5 py-0.5 rounded-md">
                                    <CheckCircle2 size={12} /> Reserve
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-gray-600 mt-0.5">
                                {place.cuisine}
                                {formatPrice(place.priceRange) && (
                                  <span className="ml-2 text-gray-500">{place.priceRange}</span>
                                )}
                              </div>
                              {place.mustTry && (
                                <div className="text-sm text-gray-700 mt-1">
                                  <span className="font-medium">Must-try:</span> {place.mustTry}
                                </div>
                              )}
                              {place.notes && (
                                <div className="text-xs text-gray-500 mt-1">{place.notes}</div>
                              )}
                            </div>
                            <a
                              href={buildMapsUrl(mapsQuery)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                              title="Open in Google Maps"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 