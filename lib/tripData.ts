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
  roomBedType?: string;
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
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    },
    {
      id: "tallinn",
      name: "Tallinn",
      country: "Estonia",
      coordinates: [59.4370, 24.7536],
      description: "A charming medieval city with well-preserved old town, just a short ferry ride from Helsinki.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi",
      country: "Finland",
      coordinates: [66.5039, 25.7294],
      description: "The official hometown of Santa Claus and the capital of Finnish Lapland, perfect for Arctic adventures.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    },
    {
      id: "levi",
      name: "Levi",
      country: "Finland",
      coordinates: [67.8051, 24.8000],
      description: "Finland's premier ski resort and a year-round adventure destination in the heart of Lapland.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    },
    {
      id: "kilpisjarvi",
      name: "Kilpisjärvi",
      country: "Finland",
      coordinates: [69.0475, 20.7947],
      description: "A remote village near the Three-Country Cairn, where Finland, Norway, and Sweden meet.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    },
    {
      id: "tromso",
      name: "Tromsø",
      country: "Norway",
      coordinates: [69.6492, 18.9553],
      description: "The gateway to the Arctic, known for the Northern Lights, midnight sun, and stunning fjords.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8XQYVjSqX7E"
    }
  ],

  itinerary: [
    {
      date: "2025-09-28 (Sun)",
      dayNumber: 1,
      location: "Helsinki",
      activities: [
        "Arrive in Helsinki",
        "Helsinki Airport Transfer",
        "Check into Hotel Arthur",
        "Evening walk around Central Railway Station area",
        "Dinner at local restaurant"
      ],
      description: "Welcome to Helsinki! Start your Nordic adventure in Finland's beautiful capital. Your driver will pick you up from the airport and take you to your accommodation in the city centre. The private and cosy Hotel Arthur is located in Helsinki city center right next to the Central Railway Station. Helsinki's most prominent sights, large department stores, theaters and Casino Helsinki are all within walking distance of the hotel.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Hotel Arthur",
      roomBedType: "Standard Twin Room",
      transport: "Helsinki Airport Transfer"
    },
    {
      date: "2025-09-29 (Mon)",
      dayNumber: 2,
      location: "Helsinki",
      activities: [
        "Helsinki Private Walking Tour (3h) - Helsinki All Star Walk",
        "Visit Senate Square and Helsinki Cathedral",
        "Explore House of Nobility and Uspenski Cathedral",
        "See President's Castle and Market Square",
        "Walk through Esplanade Park and Alexander's Street",
        "Visit Central Train Station and Parliament House",
        "Explore Citizens' Square and Oodi Library",
        "Visit Amos Rex Art Museum and Chapel of Silence",
        "Afternoon: Explore Suomenlinna independently (UNESCO World Heritage site)"
      ],
      description: "Experience the best of Helsinki with a comprehensive 3-hour 'Helsinki All Star Walk' that covers both historical and modern centers. Visit iconic landmarks including Senate Square, Helsinki Cathedral, House of Nobility, Uspenski Cathedral, President's Castle, Market Square, Helsinki City Hall, Esplanade Park, Alexander's Street, Central Train Station, Parliament House, Citizens' Square, Oodi Library, Amos Rex Art Museum, and the Chapel of Silence. In the afternoon, explore Suomenlinna independently - a UNESCO World Heritage site featuring military architecture, museums, parks, churches, libraries, cafés, and restaurants accessible by ferry from Market Square.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Hotel Arthur",
      roomBedType: "Standard Twin Room"
    },
    {
      date: "2025-09-30 (Tue)",
      dayNumber: 3,
      location: "Tallinn (Day Trip)",
      activities: [
        "2-hour cruise from Helsinki to Tallinn",
        "Short city tour of Tallinn's Old Town",
        "Explore UNESCO listed Old Town - best preserved Hanseatic town centre",
        "Walk through cobble stoned streets, narrow alleyways and charming courtyards",
        "Free time to explore Tallinn independently",
        "Visit nearby attractions: business centre with modern towers, trendy bohemian neighbourhoods, 18th-century park and promenades",
        "Return cruise to Helsinki"
      ],
      description: "Visit Tallinn, Estonia via a 2-hour cruise from Helsinki. Upon arrival, enjoy a short city tour of Tallinn's Old Town. Tallinn is a lively yet peaceful, photogenic and charming city full of wonderful sights and rich culture. It combines the modern world with ancient churches, medieval streetscapes and noble merchants' houses. The UNESCO listed Old Town is one of the best preserved Hanseatic town centres in the world. The 2-hour city tour includes cobble stoned streets, narrow alleyways and charming courtyards. After the tour, enjoy free time to explore Tallinn independently before returning to the port. Nearby attractions include the city's business centre with modern towers, trendy bohemian neighbourhoods, manicured 18th-century park and promenades. Return to Helsinki by cruise where another driver will be waiting.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Hotel Arthur",
      roomBedType: "Standard Twin Room",
      transport: "2-hour cruise Helsinki-Tallinn-Helsinki"
    },
    {
      date: "2025-10-01 (Wed)",
      dayNumber: 4,
      location: "Helsinki",
      activities: [
        "Mushroom Hunting Tour (7-hour guided foraging tour)",
        "Search for Finland's edible chanterelle mushrooms",
        "Learn to identify edible fungi in forests around Helsinki",
        "Immerse in the world of fungi - bright oranges, golden yellows, and deep reds",
        "Campfire lunch with collected mushrooms (if enough found)",
        "Forest exploration and mushroom discussion"
      ],
      description: "Embark on a 7-hour guided foraging tour in the forests around Helsinki. Immerse yourself in the world of fungi, specifically searching for Finland's edible chanterelle mushrooms which come in bright oranges, golden yellows, and deep reds. While most mushrooms are harmless, there are poisonous ones, and your guide will help identify edible fungi. If enough mushrooms are collected, they will be fried over a campfire for lunch. If not, there will still be plenty to scavenge and discuss. This unique experience combines nature exploration with traditional Finnish foraging culture.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Hotel Arthur",
      roomBedType: "Standard Twin Room",
      transport: "Guided tour transport"
    },
    {
      date: "2025-10-02 (Thu)",
      dayNumber: 5,
      location: "Helsinki → Rovaniemi",
      activities: [
        "Evening in Helsinki",
        "Driver pickup from accommodation to train station",
        "Board Santa Claus Express Train at 11 PM",
        "Overnight journey to Rovaniemi (12 hours)",
        "Arrive in Rovaniemi early next morning",
        "Driver transfer from train station to accommodation",
        "Early morning exploration of Lapland"
      ],
      description: "Travel to Lapland aboard the Santa Claus Express Train, a sustainable way of traveling that allows for daytime touring and saves on accommodation costs. A driver will pick you up from your accommodation in Helsinki and take you to the train station. The train departs Helsinki at 11 PM and the journey takes approximately 12 hours. Upon arrival in Rovaniemi early the next morning, another driver will meet you at the train station and transfer you to your accommodation. Early morning check-in might not be possible, but bags can be left at the hotel to allow for immediate exploration of Lapland.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Overnight on Santa Claus Express Train",
      transport: "Santa Claus Express Train Helsinki-Rovaniemi (11 PM departure, 12-hour journey)"
    },
    {
      date: "2025-10-03 (Fri)",
      dayNumber: 6,
      location: "Rovaniemi",
      activities: [
        "Check into Arctic City Hotel",
        "Visit Santa Claus Village independently",
        "Meet Santa Claus in his village office",
        "Visit Official Santa's Post Office",
        "Receive certificate for crossing the Arctic Circle",
        "Souvenir shopping in Santa's village",
        "Flexible Northern Lights Hunting tour",
        "Northern Lights Photography Hunting experience",
        "Professional photography of aurora borealis"
      ],
      description: "Arrive in Rovaniemi and check into the Arctic City Hotel, a family-owned hotel in the middle of Rovaniemi that's an essential part of the city for locals and attracts travelers worldwide. Founded in the heart of the northern capital, it's easy to reach and allows guests to feel the 'beat of the city.' It's also good for nature lovers, suggesting activities like skiing or 'hugging the trees on foot.' The hotel aims to make Rovaniemi a better place for everyone. Visit Santa Claus Village independently - meeting Santa Claus in his village office is a highlight of Rovaniemi. Activities include visiting the Official Santa's Post Office where letters can be sent, and receiving a certificate for crossing the Arctic Circle. There are many options for souvenir shopping. Visiting Santa's village is free but can be very crowded in winter, so it's suggested as a self-guided visit rather than a tour. In the evening, experience the enchanting atmosphere of Lapland's evening and night with a Flexible Northern Lights Hunting tour. Join a Northern Lights Photography Hunting experience where a team of professional hunters takes you to promising locations, guided by weather forecasts and solar wind data. High-quality photos taken with professional cameras will be provided via email.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Arctic City Hotel",
      roomBedType: "Classic Twin Room",
      transport: "Driver transfer from train station"
    },
    {
      date: "2025-10-04 (Sat)",
      dayNumber: 7,
      location: "Rovaniemi",
      activities: [
        "Wilderness Sauna Experience",
        "Visit deep forest wilderness cabin with log sauna",
        "Traditional Finnish sauna experience in peaceful setting",
        "Wood-burner sauna with Finnish instructions",
        "Lake access via pontoon - optional ice hole (avanto)",
        "Hot sauna alternating with cold water/air",
        "Evening Aurora Ice Floating experience",
        "Float in Arctic lake with high-quality rescue suit",
        "Admire sky while floating on icy lake",
        "Potential Northern Lights viewing (weather dependent)"
      ],
      description: "Enjoy a very local experience! Your guide will take you into deep forests to a wilderness cabin with a log sauna. The traditional cabin has no electricity or running water; the small lake and nature around is providing everything it needs! The place is beautiful and extremely peaceful - perfect for a relaxing moment! Your guide will light the wood-burner in the sauna and give you instructions on how to use it in the very Finnish way. There is also a pontoon that leads directly to the lake: if you are brave enough to go in the water, we may open a hole in the ice (avanto)! It is very healthy to alternate hot sauna with cold water (or at least cold air). In the evening you will take part in this once-in-a-lifetime experience and feel the lightness of your body while floating on an Arctic lake. During this Aurora tour you will be in a high-quality rescue suit that covers your whole body and keeps you dry, so no need to worry about the cold. After you arrive at the lake, you are given safety instructions and once suited up, you can take a dip in the icy lake and admire the sky above you. Please do remember that northern lights are a natural phenomenon and we can't guarantee that you will see them.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Arctic City Hotel",
      roomBedType: "Classic Twin Room"
    },
    {
      date: "2025-10-05 (Sun)",
      dayNumber: 8,
      location: "Rovaniemi",
      activities: [
        "Korouoma Canyon & Auttiköngäs Waterfalls Hike (6 hours)",
        "Guided pick-up from Rovaniemi and 1h30 drive to Korouoma Nature Reserve",
        "Hike 5 km down into Korouoma Canyon through pine forests",
        "Walk along river and cliffs admiring picturesque rock landscapes",
        "Learn about arctic nature from outdoor guide",
        "Finnish barbecue lunch around open fire",
        "Stop at Auttiköngäs Waterfalls on return journey",
        "Short walk to see Auttiköngäs falls",
        "Optional: Longer 5km hike to observation tower at Auttiköngäs"
      ],
      description: "Embark on a 6-hour guided hike to Korouoma Canyon and Auttiköngäs Waterfalls. Your guide will pick you up from Rovaniemi for a 1h30 drive to Korouoma Nature Reserve. Hike 5 km down into the canyon, through pine forests, along the river and cliffs, admiring the picturesque cliffs and rock landscapes that replace the frozen waterfalls of winter. Learn about arctic nature from your outdoor guide while enjoying a delicious Finnish barbecue lunch by an open fire. On the return journey, stop at Auttiköngäs to witness its impressive waterfalls and gorge. A short walk to the falls is included, with an option for a longer 5km hike through the forest to an observation tower at Auttiköngäs.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Arctic City Hotel",
      roomBedType: "Classic Twin Room",
      transport: "Guided tour transport to Korouoma Nature Reserve"
    },
    {
      date: "2025-10-06 (Mon)",
      dayNumber: 9,
      location: "Rovaniemi → Levi",
      activities: [
        "Driver pickup from Rovaniemi accommodation to bus station",
        "2.5-hour bus journey from Rovaniemi to Levi",
        "Arrive in Levi and make own way to hotel",
        "Check into Levi Hotel Spa Resort",
        "Relax in open-air pools under the stars",
        "Evening Northern Lights Hunting by Van",
        "Professional guide determines best locations for Aurora sightings",
        "Visit multiple spots for optimal Northern Lights viewing",
        "Sit back and enjoy the Aurora Borealis show"
      ],
      description: "Transfer from Rovaniemi to Levi by bus. A driver will pick you up from your accommodation in Rovaniemi and take you to the bus station. Tickets and seat reservation for the 2.5-hour journey on a modern bus will be provided. Upon arrival in Levi, you will make your own way to your hotel, which is located near the bus stop. Check into the Levi Hotel Spa Resort, an oasis at the foot of the mountain. Experience relaxation in open-air pools under the stars during winter snowy safaris, and white nightless nights in summer. The resort offers magical Lapland experiences for both adults and families. There are two hotels side by side sharing the same resort facilities - reception, four restaurants, Water World Levi and other facilities at spa building as well as conference facilities. In the evening, join a Northern Lights Hunting by Van tour. Northern Lights are wily and unpredictable, but the tour aims to provide the best possible chance to see them. A professional guide will determine the best locations for sightings, potentially visiting multiple spots. Sit back and enjoy the show as you hunt for the Aurora Borealis.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Levi Hotel Spa Resort",
      roomBedType: "Standard Twin Room",
      transport: "Bus transfer Rovaniemi-Levi (2.5 hours)"
    },
    {
      date: "2025-10-07 (Tue)",
      dayNumber: 10,
      location: "Levi",
      activities: [
        "E-Fatbike Tour in Lapland",
        "Explore Levi's prettiest spots on e-fatbikes",
        "Learn about local nature and life in Lapland",
        "Berry juice break during the tour",
        "Ride on extra-wide tires for easy, ecological, fun and agile experience",
        "Navigate various terrains including rugged landscapes"
      ],
      description: "Experience an E-Fatbike Tour in Lapland, exploring Levi's prettiest spots while learning about local nature and life. E-fatbikes feature extra-wide tires, making them easy, ecological, fun, and agile on various terrains, including rugged ones. Enjoy a berry juice break during your adventure as you navigate through the beautiful Lapland landscapes on these innovative electric bikes.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Levi Hotel Spa Resort",
      roomBedType: "Standard Twin Room"
    },
    {
      date: "2025-10-08 (Wed)",
      dayNumber: 11,
      location: "Levi → Kilpisjärvi",
      activities: [
        "Make own way to bus stop in Levi",
        "4-hour bus journey from Levi to Kilpisjärvi",
        "Arrive in Kilpisjärvi and make own way to accommodation",
        "Check into Tundrea Holiday Resort",
        "Stay in Mountain View Cabin",
        "Experience connection to nature and northern lights",
        "Enjoy location at foot of St. Saana mountain",
        "Explore shore of clear-water Kilpisjärvi",
        "Surround yourself with beautiful fell landscapes"
      ],
      description: "Travel from Levi to Kilpisjärvi by bus. Make your own way to the bus stop, with tickets and seat reservations provided for the 4-hour journey on a modern bus. Upon arrival, make your own way to accommodation near the bus stop. Check into Tundrea Holiday Resort, located in Kilpisjärvi, Finland, at the foot of St. Saana, offering a connection to nature and the northern lights. The resort is on the shore of clear-water Kilpisjärvi, surrounded by beautiful fell landscapes. It offers various accommodation types including experience accommodation, cottages, and apartments for different group sizes, emphasizing privacy. Your Mountain View Cabin provides the perfect base for exploring this pristine Arctic wilderness.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Tundrea Holiday Resort",
      roomBedType: "Mountain View Cabin",
      transport: "Bus transfer Levi-Kilpisjärvi (4 hours)"
    },
    {
      date: "2025-10-09 (Thu)",
      dayNumber: 12,
      location: "Kilpisjärvi",
      activities: [
        "Chasing the Northern Lights in Kilpisjärvi",
        "Experience Finland's best location for Aurora viewing (70% daily chance)",
        "Chase northern lights by automobile heading to best direction based on weather forecast",
        "Location next to Skandies mountain range for optimal Aurora chasing",
        "Breaks for photographing the Northern Lights",
        "Enjoy snacks during the tour",
        "Receive good tips for night time photography from guide",
        "Professional Aurora hunting experience"
      ],
      description: "Experience Chasing the Northern Lights in Kilpisjärvi, the best location in Finland for observing the northern lights with a daily 70% chance of them appearing. Kilpisjärvi's location next to the Skandies mountain range makes it ideal for chasing Auroras. The tour involves chasing the northern lights by automobile heading to the best direction depending on weather forecast. During the tour, there will be breaks for photographing and to enjoy some snacks. A guide will provide good tips for night time photography, ensuring you capture the perfect shots of this magical natural phenomenon.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Tundrea Holiday Resort",
      roomBedType: "Mountain View Cabin"
    },
    {
      date: "2025-10-10 (Fri)",
      dayNumber: 13,
      location: "Kilpisjärvi → Tromsø",
      activities: [
        "Kilpisjärvi - Tromsø Private Transfer (2.5 hours)",
        "Driver pickup from accommodation in Kilpisjärvi",
        "Direct transfer to Tromsø",
        "Overnight Sami Experience",
        "Reindeer sledding adventure (weather dependent) - 30 minutes",
        "Guided by authentic Sami guides from Tromsø Lapland",
        "Overnight stay in traditional Saami tent (lavvo)",
        "Sleep on cozy reindeer hides inside winter-insulated sleeping bags",
        "Hot meal served in the lavvo",
        "Captivating stories about Sami culture and history",
        "Optimal Northern Lights viewing due to minimal artificial light",
        "Uninterrupted view of the splendid night sky",
        "Reconnect with nature and rejuvenate mind and soul"
      ],
      description: "Begin your day with a Kilpisjärvi - Tromsø Private Transfer. A driver will pick you up from your accommodation in Kilpisjärvi and take you directly to Tromsø. Duration of the drive is about 2.5 hours. Upon arrival, experience an Overnight Sami Experience featuring the oldest form of transportation in the north with a reindeer sledding adventure (weather dependent) guided by authentic Sami guides from Tromsø Lapland. Spend the night in a traditional Saami tent (lavvo) in north Norwegian nature, chosen for optimal conditions for Northern Lights viewing due to minimal artificial light. Sleep on cozy reindeer hides inside winter-insulated sleeping bags. The remote location ensures an uninterrupted view of the splendid night sky. The adventure includes approximately 30 minutes of reindeer sledding, followed by a hot meal served in the lavvo, accompanied by captivating stories about Sami culture and history. The overall aim is to reconnect with nature and rejuvenate your mind and soul. Please note: Solo travellers may share the tent with a second traveller.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Traditional Saami Lavvo Tent",
      roomBedType: "Reindeer Hides with Winter-Insulated Sleeping Bags",
      transport: "Private Transfer Kilpisjärvi-Tromsø (2.5 hours)"
    },
    {
      date: "2025-10-11 (Sat)",
      dayNumber: 14,
      location: "Tromsø",
      activities: [
        "Check into Quality Hotel Saga",
        "Enjoy fantastic view of Arctic Cathedral, Tromsdal mountains and Tromsø center",
        "Visit Tromsø Cathedral within walking distance",
        "Explore Northern Norwegian Art Museum",
        "Visit the Polar Museum",
        "Evening Northern Lights Chasing in Tromsø (7-hour tour)",
        "Small group Northern Lights Tour with dedicated guides",
        "Guides go the extra mile, even driving to Finland if needed",
        "Receive complimentary Aurora portrait photos via email within 24 hours",
        "Experience dream story under the dancing Northern Lights"
      ],
      description: "Check into the Quality Hotel Saga, where the hotel's modern rooms offer a fantastic view of the Arctic Cathedral, the Tromsdal mountains and the center of Tromsø. With walking distance to Tromsø Cathedral, the Northern Norwegian Art Museum and the Polar Museum, you are guaranteed an exciting stay in Tromsø. The hotel is located in the center of the city, and has the city's shopping and cultural offerings right outside the hotel door. In the evening, experience Northern Lights Chasing in Tromsø. Seeing the Northern Lights is a magical experience and must do when travelling to Tromsø. During this small group Northern Lights Tour your guides will go the extra mile, even driving to Finland if needed, to ensure you witness this elusive phenomenon. The tour lasts around 7 hours and includes gear rental, comfortable transportation, and complimentary Aurora portrait photos delivered to your email within 24 hours. Join us and let us capture your dream story under the dancing Northern Lights!",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Quality Hotel Saga",
      roomBedType: "Standard Twin Room",
      transport: "Private transfer from previous location"
    },
    {
      date: "2025-10-12 (Sun)",
      dayNumber: 15,
      location: "Tromsø",
      activities: [
        "Arctic Fjord Sightseeing tour",
        "Explore Norway's beautiful fjords where mountains meet the sea",
        "Ethical road trip experience through arctic wilderness",
        "Discover amazing scenery and memorable photo opportunities",
        "Visit various locations on islands including fjords, mountains, beaches, lakes, forests, and small villages",
        "Take photos, relax, and enjoy nature's views and sounds",
        "Potential wildlife spotting in Norwegian countryside",
        "Guide assistance with photography",
        "Receive web-sized resolution photos from the tour",
        "Enjoy homemade lunch and hot drinks",
        "Return to Tromsø after the tour"
      ],
      description: "Experience Arctic Fjord Sightseeing, exploring Norway's beautiful fjords where mountains meet the sea. This ethical road trip experience promises discovery of amazing scenery, arctic wilderness, and opportunities for memorable photos. The trip involves exploring various locations on islands, including fjords, mountains, beaches, lakes, forests, and small villages in the Norwegian countryside. Participants can take photos, relax, enjoy nature's views and sounds, and potentially spot wildlife. A guide will assist with photography, and photos taken during the tour will be shared in web-sized resolution. The tour includes a homemade lunch and hot drinks, concluding with a return to Tromsø.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Quality Hotel Saga",
      roomBedType: "Standard Twin Room"
    },
    {
      date: "2025-10-13 (Mon)",
      dayNumber: 16,
      location: "Tromsø",
      activities: [
        "Explore Tromsø on Your Own",
        "Enjoy free time to explore Tromsø at your own pace",
        "Visit large university and animated restaurants and nightlife",
        "Explore art galleries and museums",
        "Discover nearby ski resorts",
        "Experience more pubs per capita than any other Norwegian town",
        "Optional: Walking tour of Tromsø with knowledgeable guide",
        "Explore largest city in the north street by street",
        "Absorb rich culture and beautiful architecture",
        "View colorful 18th-century wooden houses",
        "See relics and buildings from medieval era",
        "Learn about extensive fishing culture",
        "Tour the stunning Arctic Cathedral"
      ],
      description: "Enjoy free time to explore Tromsø at your own pace. With a large university, animated restaurants and nightlife, art galleries and museums, and nearby ski resorts, Tromsø is well-known as a lively and entertaining city. It also prides itself on having more pubs per capita than any other Norwegian town! If you'd prefer an excursion with a knowledgeable guide, we can arrange a walking tour of Tromsø. As you explore the largest city in the north street by street, absorb its rich culture and beautiful architecture, including the colorful 18th-century wooden houses. View relics and buildings from the medieval era, and learn about the city's extensive fishing culture, established when trade in Norway was at its peak. End your day with a tour of the stunning Arctic Cathedral.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      videos: ["https://www.youtube.com/embed/8XQYVjSqX7E"],
      accommodation: "Quality Hotel Saga",
      roomBedType: "Standard Twin Room"
    },
    {
      date: "2025-10-14 (Tue)",
      dayNumber: 17,
      location: "Tromsø",
      activities: [
        "Airport Transfer",
        "Driver pickup from the city",
        "Transfer to Tromsø airport",
        "Departing flight"
      ],
      description: "A driver will pick you up from the city and take you to Tromsø airport for your departing flight.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
      ],
      transport: "Airport transfer to Tromsø airport"
    }
  ]
}; 