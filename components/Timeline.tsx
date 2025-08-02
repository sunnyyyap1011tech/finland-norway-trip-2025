'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import { DayItinerary } from '@/lib/tripData';
import NorthernLightsIcon from './NorthernLightsIcon';
import { useState, useRef, useEffect } from 'react';

interface TimelineProps {
  itinerary: DayItinerary[];
}

export default function Timeline({ itinerary }: TimelineProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'day' | 'date' | 'text'>('all');
  const [filterValue, setFilterValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const timelineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToDay = (dayNumber: number) => {
    console.log('Scrolling to day:', dayNumber);
    const element = timelineRefs.current[`day-${dayNumber}`];
    console.log('Found element:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add highlight effect
      element.classList.add('ring-2', 'ring-blue-500', 'ring-opacity-50');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-blue-500', 'ring-opacity-50');
      }, 2000);
    } else {
      console.log('Element not found for day:', dayNumber);
      console.log('Available refs:', Object.keys(timelineRefs.current));
    }
  };

  const handleSearch = () => {
    if (!filterValue.trim()) return;

    // Try to match day number first
    const dayNumber = parseInt(filterValue);
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= itinerary.length) {
      scrollToDay(dayNumber);
      setIsFilterOpen(false);
      return;
    }

    // Try to match date
    const matchingDateDay = itinerary.find(day => day.date === filterValue);
    if (matchingDateDay) {
      scrollToDay(matchingDateDay.dayNumber);
      setIsFilterOpen(false);
      return;
    }

    // Try text search
    const searchLower = filterValue.toLowerCase();
    const matchingDays = itinerary.filter(day =>
      day.location.toLowerCase().includes(searchLower) ||
      day.description.toLowerCase().includes(searchLower) ||
      day.activities.some(activity => activity.toLowerCase().includes(searchLower)) ||
      (day.mainHighlight && day.mainHighlight.toLowerCase().includes(searchLower))
    );
    
    if (matchingDays.length > 0) {
      setSearchResults(matchingDays.map(day => day.dayNumber));
      setCurrentSearchIndex(0);
      scrollToDay(matchingDays[0].dayNumber);
      // Add highlight effect for searched text
      setTimeout(() => {
        highlightSearchedText(filterValue, matchingDays[0].dayNumber);
      }, 500);
    } else {
      setSearchResults([]);
      setCurrentSearchIndex(0);
    }
  };

  const highlightSearchedText = (searchTerm: string, dayNumber: number) => {
    const searchLower = searchTerm.toLowerCase();
    const element = timelineRefs.current[`day-${dayNumber}`];
    if (element) {
      // Remove any existing highlights
      element.querySelectorAll('.search-highlight').forEach(el => {
        const parent = el.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(el.textContent || ''), el);
          parent.normalize();
        }
      });

      // Add new highlights
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Text[] = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node as Text);
      }

      textNodes.forEach(textNode => {
        const text = textNode.textContent || '';
        const lowerText = text.toLowerCase();
        if (lowerText.includes(searchLower)) {
          const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
          const highlightedText = text.replace(regex, '<span class="search-highlight bg-yellow-200 px-1 rounded">$1</span>');
          if (highlightedText !== text) {
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            textNode.parentNode?.replaceChild(span, textNode);
          }
        }
      });

      // Keep highlights permanent - no auto-removal
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const navigateToNext = () => {
    if (searchResults.length > 0 && currentSearchIndex < searchResults.length - 1) {
      const nextIndex = currentSearchIndex + 1;
      setCurrentSearchIndex(nextIndex);
      const nextDayNumber = searchResults[nextIndex];
      scrollToDay(nextDayNumber);
      setTimeout(() => {
        highlightSearchedText(filterValue, nextDayNumber);
      }, 500);
    }
  };

  const navigateToPrevious = () => {
    if (searchResults.length > 0 && currentSearchIndex > 0) {
      const prevIndex = currentSearchIndex - 1;
      setCurrentSearchIndex(prevIndex);
      const prevDayNumber = searchResults[prevIndex];
      scrollToDay(prevDayNumber);
      setTimeout(() => {
        highlightSearchedText(filterValue, prevDayNumber);
      }, 500);
    }
  };

  // Debug: Log available refs when component mounts
  useEffect(() => {
    console.log('Timeline component mounted');
    console.log('Available refs:', Object.keys(timelineRefs.current));
  }, []);
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      <div className="space-y-4 sm:space-y-6">
        {itinerary.map((day, index) => (
          <motion.div
            key={day.date}
            ref={(el) => {
              timelineRefs.current[`day-${day.dayNumber}`] = el;
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
            
            {/* Content card */}
            <div className="ml-8 sm:ml-16 flex-1">
              <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-full font-bold text-sm sm:text-base">
                      Day {day.dayNumber}
                    </div>
                    <div className="text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        <span className="font-medium text-sm sm:text-base">
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
                    className="hidden sm:inline-flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors items-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{day.location}</h3>
                  </div>
                  {day.hasNorthernLights && (
                    <div className="flex items-center space-x-1">
                      <NorthernLightsIcon size={20} className="sm:w-6 sm:h-6" />
                      <span className="text-xs sm:text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        Northern Lights
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {day.description}
                </p>

                {/* Main Highlight of the Day */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Main Highlight of the Day
                  </h4>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                    <p className="text-gray-800 font-medium text-sm">
                      {day.mainHighlight || (day.activities.length > 0 ? day.activities[0] : 'Explore the beautiful surroundings and immerse yourself in the local culture.')}
                    </p>
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Activities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {day.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center space-x-2 text-xs text-gray-600"
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

                {/* Mobile Details Button */}
                <div className="mt-6 sm:hidden">
                  <Link
                    href={`/day/${day.date.split(' ')[0]}`}
                    className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm w-full"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Filter Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Filter Timeline"
      >
        <Filter size={24} />
      </button>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="fixed bottom-20 right-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 p-4 w-80 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filter Timeline</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Combined Day/Date Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quick Jump</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  if (e.target.value) {
                    if (e.target.value.startsWith('day-')) {
                      const dayNumber = parseInt(e.target.value.replace('day-', ''));
                      if (!isNaN(dayNumber)) {
                        setTimeout(() => {
                          scrollToDay(dayNumber);
                          setIsFilterOpen(false);
                        }, 100);
                      }
                    } else {
                      const matchingDateDay = itinerary.find(day => day.date === e.target.value);
                      if (matchingDateDay) {
                        setTimeout(() => {
                          scrollToDay(matchingDateDay.dayNumber);
                          setIsFilterOpen(false);
                        }, 100);
                      }
                    }
                  }
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Jump to day or date...</option>
                {itinerary.map((day) => (
                  <option key={day.dayNumber} value={`day-${day.dayNumber}`}>
                    Day {day.dayNumber} - {new Date(day.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })} - {day.location}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Box */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search locations, activities, descriptions..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Filter
                </button>
              </div>
              
              {/* Search Results Navigation */}
              {searchResults.length > 0 && (
                <div className="mt-3 bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-blue-700 font-medium">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} • {currentSearchIndex + 1} of {searchResults.length}
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={navigateToPrevious}
                        disabled={currentSearchIndex === 0}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        title="Previous result"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={navigateToNext}
                        disabled={currentSearchIndex === searchResults.length - 1}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        title="Next result"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clear Filter Button */}
            {(filterValue || searchResults.length > 0) && (
              <button
                onClick={() => {
                  setFilterValue('');
                  setFilterType('all');
                  setSearchResults([]);
                  setCurrentSearchIndex(0);
                  // Remove all search highlights
                  Object.keys(timelineRefs.current).forEach(key => {
                    const element = timelineRefs.current[key];
                    if (element) {
                      element.querySelectorAll('.search-highlight').forEach(el => {
                        const parent = el.parentNode;
                        if (parent) {
                          parent.replaceChild(document.createTextNode(el.textContent || ''), el);
                          parent.normalize();
                        }
                      });
                    }
                  });
                }}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 