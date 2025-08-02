'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe, ArrowRight, Play } from 'lucide-react';
import { tripData } from '@/lib/tripData';
import MapWrapper from '@/components/MapWrapper';
import Timeline from '@/components/Timeline';
import NorthernLightsIcon from '@/components/NorthernLightsIcon';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('summary');
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = (section: string) => {
    setActiveSection(section);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Finland & Norway Adventure
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            September 28 - October 14, 2025
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sunday - Tuesday • 17 Days of Adventure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToContent('summary')}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mr-4"
            >
              Explore Journey
            </button>
            <button 
              onClick={() => scrollToContent('map')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Map
            </button>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { id: 'summary', label: 'Summary', icon: Globe },
              { id: 'map', label: 'Interactive Map', icon: MapPin },
              { id: 'timeline', label: 'Timeline', icon: Calendar }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Section */}
        {activeSection === 'summary' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Journey Summary */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Journey Summary</h2>
              
              {/* Trip Overview */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {tripData.summary}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
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
            </section>

            {/* Destinations Preview */}
            <section>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Destinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tripData.destinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                  >
                    <div className="relative h-48">
                      <img
                        src={destination.imageUrl}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-bold">{destination.name}</h4>
                        <p className="text-sm opacity-90">{destination.country}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Daily Itinerary Preview */}
            <section>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Daily Itinerary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tripData.itinerary.slice(0, 6).map((day, index) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Day {day.dayNumber}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                        <span className="ml-2 text-blue-600 font-medium">
                          {day.date.split(' ')[1]?.replace(/[()]/g, '')}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{day.location}</h4>
                      {day.hasNorthernLights && (
                        <div className="flex items-center space-x-1">
                          <NorthernLightsIcon size={20} />
                          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Aurora
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {day.description}
                    </p>
                    <Link
                      href={`/day/${day.date.split(' ')[0]}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/itinerary"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  View Full Itinerary
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </section>
          </motion.div>
        )}

        {/* Interactive Map Section */}
        {activeSection === 'map' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Travel Map</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the route of your Nordic adventure across Finland and Norway
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[600px] w-full">
                <MapWrapper destinations={tripData.destinations} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline Section */}
        {activeSection === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Journey Timeline</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow your adventure day by day through the Nordic countries
              </p>
            </div>
            <Timeline itinerary={tripData.itinerary} />
          </motion.div>
        )}
      </div>
    </div>
  );
} 