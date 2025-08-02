'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { tripData } from '@/lib/tripData';

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
              <h1 className="text-3xl font-bold text-gray-900">Complete Itinerary</h1>
              <p className="text-gray-600">{tripData.dates}</p>
            </div>

            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Trip Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Journey Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              {tripData.summary}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{tripData.itinerary.length}</div>
                <div className="text-gray-600">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{tripData.destinations.length}</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Arctic</div>
                <div className="text-gray-600">Circle</div>
              </div>
            </div>
          </div>

          {/* Itinerary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tripData.itinerary.map((day, index) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold">Day {day.dayNumber}</div>
                    <div className="text-sm opacity-90">
                      {new Date(day.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <h3 className="text-xl font-semibold">{day.location}</h3>
                  </div>
                </div>

                {/* Day Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {day.description}
                  </p>

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
                        <Calendar size={16} />
                        <span className="truncate">{day.accommodation}</span>
                      </div>
                    )}
                    {day.transport && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin size={16} />
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
                    href={`/day/${day.date}`}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Destinations Visited</h3>
                <div className="space-y-3">
                  {tripData.destinations.map((destination, index) => (
                    <div key={destination.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
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
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Arctic Circle crossing in Rovaniemi</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Northern Lights hunting in Tromsø</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Medieval exploration in Tallinn</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Fjord cruising in Norway</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Finnish sauna experiences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 