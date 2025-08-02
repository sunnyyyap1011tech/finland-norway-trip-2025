'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, Hotel, Car, Play, Image } from 'lucide-react';
import { tripData } from '@/lib/tripData';
import NorthernLightsIcon from '@/components/NorthernLightsIcon';

export default function DayDetailPage() {
  const params = useParams();
  const date = params.date as string;
  
  const dayData = tripData.itinerary.find(day => day.date.split(' ')[0] === date);
  
  if (!dayData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Day Not Found</h1>
          <p className="text-gray-600 mb-8">The requested day could not be found.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const prevDay = tripData.itinerary.find(day => day.dayNumber === dayData.dayNumber - 1);
  const nextDay = tripData.itinerary.find(day => day.dayNumber === dayData.dayNumber + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
              <span>Back to Journey</span>
            </Link>
            
            <div className="text-center order-first sm:order-none">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Day {dayData.dayNumber}</h1>
              <p className="text-sm sm:text-base text-gray-600">
                {new Date(dayData.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4">
              {prevDay && (
                <Link
                  href={`/day/${prevDay.date.split(' ')[0]}`}
                  className="bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  Previous
                </Link>
              )}
              {nextDay && (
                <Link
                  href={`/day/${nextDay.date.split(' ')[0]}`}
                  className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-48 md:h-80">
              {dayData.images && dayData.images.length > 0 ? (
                <img
                  src={dayData.images[0]}
                  alt={`${dayData.location} - Day ${dayData.dayNumber}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Image size={64} className="text-white opacity-50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin size={24} />
                  <h2 className="text-3xl md:text-4xl font-bold">{dayData.location}</h2>
                  {dayData.hasNorthernLights && (
                    <div className="flex items-center space-x-2 ml-4">
                      <NorthernLightsIcon size={28} />
                      <span className="text-green-300 font-semibold text-lg">Aurora</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <div className="flex items-center space-x-1">
                    <Calendar size={20} />
                    <span>Day {dayData.dayNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">About This Day</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {dayData.description}
            </p>
          </div>

          {/* Main Highlight */}
          {dayData.mainHighlight && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                Main Highlight of the Day
              </h3>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  {dayData.mainHighlight}
                </p>
              </div>
            </div>
          )}

          {/* Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dayData.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                                      <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Travel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayData.accommodation && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Hotel size={24} className="text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Accommodation</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 font-medium">{dayData.accommodation}</p>
                  {dayData.roomBedType && (
                    <p className="text-gray-500 text-sm">Room Type: {dayData.roomBedType}</p>
                  )}
                </div>
              </div>
            )}

            {dayData.transport && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Car size={24} className="text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Transport</h3>
                </div>
                <p className="text-gray-600">{dayData.transport}</p>
              </div>
            )}
          </div>

          {/* Media Gallery */}
          {dayData.images && dayData.images.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dayData.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-video bg-gray-200 rounded-lg overflow-hidden card-hover"
                  >
                    <img
                      src={image}
                      alt={`${dayData.location} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {dayData.videos && dayData.videos.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dayData.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <iframe
                      src={video}
                      title={`${dayData.location} - Video ${index + 1}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-6">
            {prevDay ? (
              <Link
                href={`/day/${prevDay.date.split(' ')[0]}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} />
                <div>
                  <div className="text-sm text-gray-500">Previous Day</div>
                  <div className="font-semibold">Day {prevDay.dayNumber} - {prevDay.location}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextDay ? (
              <Link
                href={`/day/${nextDay.date.split(' ')[0]}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next Day</div>
                  <div className="font-semibold">Day {nextDay.dayNumber} - {nextDay.location}</div>
                </div>
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 