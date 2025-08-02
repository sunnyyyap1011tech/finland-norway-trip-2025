export interface Destination {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface DayItinerary {
  date: string;
  dayNumber: number;
  location: string;
  activities: string[];
  description: string;
  images: string[];
  videos?: string[];
  accommodation?: string;
  transport?: string;
}

export interface TripData {
  title: string;
  dates: string;
  summary: string;
  destinations: Destination[];
  itinerary: DayItinerary[];
}

export const tripData: TripData = {
  title: "Finland & Norway Adventure",
  dates: "September 28 - October 14, 2025",
  summary: "Embark on an unforgettable journey through the stunning Nordic countries, exploring the vibrant cities of Finland and the breathtaking landscapes of Norway. From the modern capital of Helsinki to the Arctic wonders of Tromsø, experience the perfect blend of urban culture and natural beauty.",
  
  destinations: [
    {
      id: "helsinki",
      name: "Helsinki",
      country: "Finland",
      coordinates: [60.1699, 24.9384],
      description: "The vibrant capital of Finland, known for its modern architecture, beautiful islands, and rich cultural heritage.",
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "tallinn",
      name: "Tallinn",
      country: "Estonia",
      coordinates: [59.4370, 24.7536],
      description: "A charming medieval city with well-preserved old town, just a short ferry ride from Helsinki.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi",
      country: "Finland",
      coordinates: [66.5039, 25.7294],
      description: "The official hometown of Santa Claus and the capital of Finnish Lapland, perfect for Arctic adventures.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "levi",
      name: "Levi",
      country: "Finland",
      coordinates: [67.8051, 24.8000],
      description: "Finland's premier ski resort and a year-round adventure destination in the heart of Lapland.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "kilpisjarvi",
      name: "Kilpisjärvi",
      country: "Finland",
      coordinates: [69.0475, 20.7947],
      description: "A remote village near the Three-Country Cairn, where Finland, Norway, and Sweden meet.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "tromso",
      name: "Tromsø",
      country: "Norway",
      coordinates: [69.6492, 18.9553],
      description: "The gateway to the Arctic, known for the Northern Lights, midnight sun, and stunning fjords.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ],

  itinerary: [
    {
      date: "2025-09-28",
      dayNumber: 1,
      location: "Helsinki",
      activities: [
        "Arrive in Helsinki",
        "Check into hotel",
        "Evening walk around Senate Square",
        "Dinner at local restaurant"
      ],
      description: "Welcome to Helsinki! Start your Nordic adventure in Finland's beautiful capital. After settling into your hotel, take an evening stroll around the historic Senate Square and enjoy your first taste of Finnish cuisine.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Helsinki city center",
      transport: "Airport transfer to hotel"
    },
    {
      date: "2025-09-29",
      dayNumber: 2,
      location: "Helsinki",
      activities: [
        "Helsinki Cathedral visit",
        "Market Square exploration",
        "Suomenlinna Fortress",
        "Design District shopping"
      ],
      description: "Explore Helsinki's most iconic landmarks including the stunning white cathedral and the historic Suomenlinna sea fortress. Discover Finnish design in the trendy Design District.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Helsinki city center"
    },
    {
      date: "2025-09-30",
      dayNumber: 3,
      location: "Tallinn (Day Trip)",
      activities: [
        "Ferry to Tallinn",
        "Old Town exploration",
        "Alexander Nevsky Cathedral",
        "Toompea Castle",
        "Evening return to Helsinki"
      ],
      description: "Take a day trip to Estonia's charming capital Tallinn. Wander through the medieval old town, visit the impressive Alexander Nevsky Cathedral, and enjoy the panoramic views from Toompea Castle.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      transport: "Ferry Helsinki-Tallinn-Helsinki"
    },
    {
      date: "2025-10-01",
      dayNumber: 4,
      location: "Helsinki → Rovaniemi",
      activities: [
        "Morning in Helsinki",
        "Flight to Rovaniemi",
        "Santa Claus Village",
        "Arctic Circle crossing"
      ],
      description: "Bid farewell to Helsinki and fly north to Rovaniemi, the official hometown of Santa Claus. Visit the magical Santa Claus Village and cross the Arctic Circle.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Rovaniemi",
      transport: "Flight Helsinki-Rovaniemi"
    },
    {
      date: "2025-10-02",
      dayNumber: 5,
      location: "Rovaniemi",
      activities: [
        "Arktikum Science Museum",
        "Local Lapland experiences",
        "Northern Lights hunting (if visible)",
        "Traditional Finnish sauna"
      ],
      description: "Immerse yourself in Lapland culture at the Arktikum museum and experience traditional Finnish activities. Keep your eyes on the sky for the magical Northern Lights.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Rovaniemi"
    },
    {
      date: "2025-10-03",
      dayNumber: 6,
      location: "Rovaniemi → Levi",
      activities: [
        "Morning in Rovaniemi",
        "Transfer to Levi",
        "Levi ski resort exploration",
        "Evening relaxation"
      ],
      description: "Travel to Levi, Finland's premier ski resort. Even in autumn, the area offers stunning landscapes and outdoor activities. Explore the resort area and prepare for more Arctic adventures.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Levi",
      transport: "Bus transfer Rovaniemi-Levi"
    },
    {
      date: "2025-10-04",
      dayNumber: 7,
      location: "Levi",
      activities: [
        "Hiking in Levi area",
        "Local culture experiences",
        "Sami culture learning",
        "Evening Northern Lights viewing"
      ],
      description: "Spend a full day exploring the natural beauty around Levi. Learn about Sami culture, go hiking in the pristine wilderness, and enjoy the peaceful Arctic atmosphere.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Levi"
    },
    {
      date: "2025-10-05",
      dayNumber: 8,
      location: "Levi → Kilpisjärvi",
      activities: [
        "Transfer to Kilpisjärvi",
        "Three-Country Cairn visit",
        "Arctic wilderness exploration",
        "Stargazing (if clear skies)"
      ],
      description: "Journey to the remote village of Kilpisjärvi, located near the point where Finland, Norway, and Sweden meet. Visit the Three-Country Cairn and experience the true wilderness of the Arctic.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Kilpisjärvi",
      transport: "Bus transfer Levi-Kilpisjärvi"
    },
    {
      date: "2025-10-06",
      dayNumber: 9,
      location: "Kilpisjärvi → Tromsø",
      activities: [
        "Morning in Kilpisjärvi",
        "Cross border to Norway",
        "Arrive in Tromsø",
        "Evening city exploration"
      ],
      description: "Cross the border into Norway and arrive in Tromsø, the gateway to the Arctic. This vibrant city offers a perfect blend of urban culture and Arctic wilderness.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Tromsø",
      transport: "Bus transfer Kilpisjärvi-Tromsø"
    },
    {
      date: "2025-10-07",
      dayNumber: 10,
      location: "Tromsø",
      activities: [
        "Arctic Cathedral visit",
        "Polaria Aquarium",
        "Cable car to Storsteinen",
        "Northern Lights tour"
      ],
      description: "Explore Tromsø's most famous landmarks including the stunning Arctic Cathedral and take the cable car for panoramic views. Join a Northern Lights tour for the best chance to see this natural wonder.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Tromsø"
    },
    {
      date: "2025-10-08",
      dayNumber: 11,
      location: "Tromsø",
      activities: [
        "Fjord cruise",
        "Whale watching (seasonal)",
        "Local museum visits",
        "Traditional Norwegian dinner"
      ],
      description: "Experience the stunning Norwegian fjords on a cruise and, if in season, spot majestic whales. Learn about local history and culture at the museums.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Tromsø"
    },
    {
      date: "2025-10-09",
      dayNumber: 12,
      location: "Tromsø",
      activities: [
        "Hiking in Tromsø area",
        "Local market exploration",
        "Arctic research center visit",
        "Evening relaxation"
      ],
      description: "Spend a day exploring the natural surroundings of Tromsø with hiking opportunities and visit local attractions. Experience the daily life of this Arctic city.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Tromsø"
    },
    {
      date: "2025-10-10",
      dayNumber: 13,
      location: "Tromsø",
      activities: [
        "Free day for exploration",
        "Optional activities",
        "Shopping for souvenirs",
        "Farewell dinner"
      ],
      description: "Enjoy a free day in Tromsø to explore at your own pace. Visit any missed attractions, shop for souvenirs, or simply relax and soak in the Arctic atmosphere.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Tromsø"
    },
    {
      date: "2025-10-11",
      dayNumber: 14,
      location: "Tromsø → Helsinki",
      activities: [
        "Morning in Tromsø",
        "Flight to Helsinki",
        "Evening in Helsinki",
        "Final night in Finland"
      ],
      description: "Return to Helsinki for your final night in Finland. Reflect on your incredible Arctic adventure and enjoy one last evening in the Nordic capital.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Helsinki",
      transport: "Flight Tromsø-Helsinki"
    },
    {
      date: "2025-10-12",
      dayNumber: 15,
      location: "Helsinki",
      activities: [
        "Final day in Helsinki",
        "Last-minute shopping",
        "Farewell dinner",
        "Packing for departure"
      ],
      description: "Spend your final day in Helsinki doing any last-minute activities, shopping for souvenirs, and preparing for your journey home.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      accommodation: "Hotel in Helsinki"
    },
    {
      date: "2025-10-13",
      dayNumber: 16,
      location: "Helsinki",
      activities: [
        "Departure day",
        "Airport transfer",
        "Flight home"
      ],
      description: "Bid farewell to the beautiful Nordic countries as you transfer to the airport and begin your journey home, carrying memories of an unforgettable Arctic adventure.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
      ],
      transport: "Airport transfer and flight home"
    }
  ]
}; 