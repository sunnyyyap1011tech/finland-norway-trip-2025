'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { DayItinerary } from '@/lib/tripData';
import NorthernLightsIcon from './NorthernLightsIcon';

interface TimelineProps {
  itinerary: DayItinerary[];
}

export default function Timeline({ itinerary }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
            
            {/* Content card */}
            <div className="ml-16 flex-1">
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold">
                      Day {day.dayNumber}
                    </div>
                    <div className="text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span className="font-medium">
                          {new Date(day.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/day/${day.date.split(' ')[0]}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <MapPin size={20} className="text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{day.location}</h3>
                  {day.hasNorthernLights && (
                    <div className="flex items-center space-x-1 ml-2">
                      <NorthernLightsIcon size={24} />
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        Northern Lights
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {day.description}
                </p>

                {/* Main Highlight of the Day */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Main Highlight of the Day
                  </h4>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-gray-800 font-medium">
                      {day.mainHighlight || (day.activities.length > 0 ? day.activities[0] : 'Explore the beautiful surroundings and immerse yourself in the local culture.')}
                    </p>
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Activities:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {day.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {day.accommodation && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-700">Accommodation:</span>
                      <p className="text-gray-600 mt-1">
                        <a 
                          href={`https://www.google.com/maps/search/${encodeURIComponent(day.accommodation)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                        >
                          {day.accommodation}
                        </a>
                        {day.roomBedType && (
                          <span className="text-gray-500"> ({day.roomBedType})</span>
                        )}
                      </p>
                    </div>
                  )}
                  {day.transport && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-700">Transport:</span>
                      <p className="text-gray-600 mt-1">{day.transport}</p>
                    </div>
                  )}
                </div>

                {/* Images preview */}
                {day.images && day.images.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Photos:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {day.images.slice(0, 3).map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`Day ${day.dayNumber} - ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {day.images.length > 3 && (
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
                          +{day.images.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 