'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ArrowRight, Bed, Car } from 'lucide-react';
import { tripData } from '@/lib/tripData';
import NorthernLightsIcon from '@/components/NorthernLightsIcon';

export default function ItineraryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Journey</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Complete Itinerary</h1>
              <p className="text-sm sm:text-base text-gray-600">{tripData.dates}</p>
            </div>

            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Itinerary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tripData.itinerary.map((day, index) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold">Day {day.dayNumber}</div>
                    <div className="text-sm opacity-90">
                      {new Date(day.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                      <span className="ml-2 font-medium">
                        {day.date.split(' ')[1]?.replace(/[()]/g, '')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin size={20} />
                      <h3 className="text-xl font-semibold">{day.location}</h3>
                    </div>
                    {day.hasNorthernLights && (
                      <div className="flex items-center space-x-1">
                        <NorthernLightsIcon size={20} />
                        <span className="text-xs font-medium text-green-200 bg-green-900/30 px-2 py-1 rounded-full">
                          Aurora
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Day Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {day.description}
                  </p>

                  {/* Main Highlight */}
                  {day.mainHighlight && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Main Highlight
                      </h4>
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                        <p className="text-gray-800 font-medium text-sm">
                          {day.mainHighlight}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Activities Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                    <div className="space-y-1">
                      {day.activities.slice(0, 3).map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="truncate">{activity}</span>
                        </div>
                      ))}
                      {day.activities.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{day.activities.length - 3} more activities
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Travel Info */}
                  <div className="space-y-2 mb-6">
                    {day.accommodation && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Bed size={16} />
                        <span className="truncate">{day.accommodation}</span>
                      </div>
                    )}
                    {day.transport && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Car size={16} />
                        <span className="truncate">{day.transport}</span>
                      </div>
                    )}
                  </div>

                  {/* Images Preview */}
                  {day.images && day.images.length > 0 && (
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {day.images.slice(0, 2).map((image, imageIndex) => (
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
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link
                    href={`/day/${day.date.split(' ')[0]}`}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Journey Summary</h2>
            
            {/* Trip Overview */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {tripData.summary}
              </p>
            </div>

                          {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{tripData.itinerary.length}</div>
                <div className="text-sm text-gray-600">Days of Adventure</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{tripData.destinations.length}</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">Arctic</div>
                <div className="text-sm text-gray-600">Circle Crossing</div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Northern Lights Days</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Destinations Visited */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin size={20} className="text-blue-600 mr-2" />
                  Destinations Visited
                </h3>
                <div className="space-y-3">
                  {tripData.destinations.map((destination, index) => (
                    <div key={destination.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{destination.name}</div>
                        <div className="text-sm text-gray-600">{destination.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Key Experiences */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Key Experiences
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Meet Santa Claus in Rovaniemi</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Northern Lights hunting (5 days)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">UNESCO Old Town in Tallinn</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Arctic Fjord sightseeing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Traditional Finnish sauna</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Sami culture experience</span>
                  </div>
                </div>
              </div>

              {/* Unique Activities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar size={20} className="text-blue-600 mr-2" />
                  Unique Activities
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Aurora Ice Floating</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Mushroom hunting tour</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">E-Fatbike adventure</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Reindeer sledding</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Santa Claus Express train</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Arctic Circle crossing</span>
                  </div>
                </div>
              </div>
            </div>

                          {/* Journey Map */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Journey Route</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold">Helsinki</span>
                    <span>→</span>
                    <span className="font-semibold">Tallinn</span>
                    <span>→</span>
                    <span className="font-semibold">Helsinki</span>
                    <span>→</span>
                    <span className="font-semibold">Rovaniemi</span>
                    <span>→</span>
                    <span className="font-semibold">Levi</span>
                    <span>→</span>
                    <span className="font-semibold">Kilpisjärvi</span>
                    <span>→</span>
                    <span className="font-semibold">Tromsø</span>
                  </div>
                </div>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 