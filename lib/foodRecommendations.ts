export interface FoodPlaceRecommendation {
  name: string;
  cuisine: string;
  mustTry?: string;
  notes?: string;
  mapsQuery?: string; // Optional override for Google Maps search query
  priceRange?: '$' | '$$' | '$$$' | '$$$$';
  reservationRecommended?: boolean;
}

export type FoodRecommendationsByDestination = Record<string, FoodPlaceRecommendation[]>;

// Minimal Google Maps search link builder
export const buildMapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// Destination IDs match those in tripData.destinations
export const foodRecommendations: FoodRecommendationsByDestination = {
  helsinki: [
    { name: 'Restaurant Olo', cuisine: 'Modern Nordic, Michelin', mustTry: 'Seasonal tasting menu', priceRange: '$$$$', reservationRecommended: true },
    { name: 'Savotta', cuisine: 'Traditional Finnish', mustTry: 'Reindeer, Karelian pies', priceRange: '$$$', reservationRecommended: true },
    { name: 'Juuri', cuisine: 'Finnish “Sapas” (small plates)', mustTry: 'Sapas tasting', priceRange: '$$$', reservationRecommended: true },
    { name: 'Löyly', cuisine: 'Scandinavian, Sea-view', mustTry: 'Salmon, cinnamon buns', priceRange: '$$' },
    { name: 'Vanha Kauppahalli (Old Market Hall)', cuisine: 'Market Hall', mustTry: 'Salmon soup, smoked fish, pastries', priceRange: '$$' },
    { name: 'Karl Fazer Café', cuisine: 'Café, Bakery', mustTry: 'Fazer chocolates, pastries', priceRange: '$' },
  ],
  tallinn: [
    { name: 'Rataskaevu 16', cuisine: 'Estonian, European', mustTry: 'Braised beef, black bread', priceRange: '$$','reservationRecommended': true },
    { name: 'Väike Rataskaevu 16', cuisine: 'Estonian, European', mustTry: 'Daily specials', priceRange: '$$','reservationRecommended': true },
    { name: 'Farm', cuisine: 'Modern Estonian', mustTry: 'Game dishes', priceRange: '$$$', reservationRecommended: true },
    { name: 'III Draakon', cuisine: 'Medieval tavern', mustTry: 'Elk soup, pies', priceRange: '$' },
    { name: 'F-Hoone', cuisine: 'Hip bistro (Telliskivi)', mustTry: 'Pelmeni, cakes', priceRange: '$$' },
  ],
  rovaniemi: [
    { name: 'Ravintola Nili', cuisine: 'Lappish, Finnish', mustTry: 'Reindeer, Arctic char', priceRange: '$$$', reservationRecommended: true },
    { name: 'Roka Kitchen & Wine Bar', cuisine: 'Bistro', mustTry: 'Pulled pork “Roka” sandwich', priceRange: '$$' },
    { name: "Santa's Salmon Place", cuisine: 'Grill (Santa Claus Village)', mustTry: 'Open-fire salmon', priceRange: '$$' },
    { name: 'Arctic Boulevard', cuisine: 'Fine dining, Local produce', mustTry: 'Tasting menu', priceRange: '$$$$', reservationRecommended: true },
    { name: 'Cafe & Bar 21', cuisine: 'Café, Brunch', mustTry: 'Waffles, cocktails', priceRange: '$' },
  ],
  levi: [
    { name: 'Ravintola Ämmilä', cuisine: 'Traditional Lappish', mustTry: 'Reindeer stew, salmon soup', priceRange: '$$' },
    { name: 'Pihvipirtti', cuisine: 'Steakhouse', mustTry: 'Local steaks', priceRange: '$$$', reservationRecommended: true },
    { name: 'King Crab House Levi', cuisine: 'Seafood', mustTry: 'King crab platter', priceRange: '$$$$' },
    { name: 'Levi Hotel Spa – Northern Kitchen', cuisine: 'Scandinavian', mustTry: 'Seasonal mains, buffet breakfast', priceRange: '$$' },
    { name: 'Classic Pizza Restaurant Levi', cuisine: 'Pizza', mustTry: 'Truffle pizza', priceRange: '$$' },
  ],
  kilpisjarvi: [
    { name: "Ravintola Rakka (Santa's Hotel Rakka)", cuisine: 'Nordic, Scenic views', mustTry: 'Local fish, game', priceRange: '$$$', reservationRecommended: true },
    { name: 'Tundrea Restaurant', cuisine: 'Finnish, Lappish', mustTry: 'Salmon, sautéed reindeer', priceRange: '$$' },
    { name: 'Kilpisjärven Retkeilykeskus Restaurant', cuisine: 'Homestyle Finnish', mustTry: 'Hearty daily specials', priceRange: '$$' },
    { name: 'Kilpishalli Café', cuisine: 'Café, Quick bites', mustTry: 'Pastries, coffee', priceRange: '$' },
  ],
  tromso: [
    { name: "Emma's Drommekjokken (Emma's Dream Kitchen)", cuisine: 'Norwegian, Bistro', mustTry: 'Fish soup, stockfish', priceRange: '$$$', reservationRecommended: true },
    { name: 'Fiskekompaniet', cuisine: 'Seafood', mustTry: 'Arctic char, king crab', priceRange: '$$$$', reservationRecommended: true },
    { name: 'Mathallen Tromsø', cuisine: 'Gourmet deli & bistro', mustTry: 'Daily fish dishes', priceRange: '$$$' },
    { name: 'Bardus Bistro', cuisine: 'Nordic bistro', mustTry: 'Reindeer, cocktails', priceRange: '$$$' },
    { name: 'Full Steam Tromsø', cuisine: 'Seafood, Museum-like', mustTry: 'Stockfish tasting', priceRange: '$$' },
    { name: 'Huken PUB', cuisine: 'Casual burgers', mustTry: 'Huken burgers', priceRange: '$$' },
  ],
}; 