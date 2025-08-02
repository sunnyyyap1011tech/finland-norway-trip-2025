# Finland & Norway Adventure 2025

A beautiful, interactive travel website showcasing a 17-day journey through Finland and Norway, from September 28 to October 14, 2025.

## 🌟 Features

- **Interactive Homepage** with trip summary and navigation
- **Interactive Map** using Leaflet.js showing all destinations with connecting routes
- **Daily Itinerary Pages** with detailed information for each day
- **Timeline View** showing the complete journey progression
- **Responsive Design** that works on all devices
- **Beautiful Animations** using Framer Motion
- **Image and Video Galleries** for each destination
- **Modern UI** with Tailwind CSS

## 🗺️ Destinations

1. **Helsinki, Finland** - The vibrant capital
2. **Tallinn, Estonia** - Medieval charm (day trip)
3. **Rovaniemi, Finland** - Santa's hometown and Arctic Circle
4. **Levi, Finland** - Premier ski resort and adventure destination
5. **Kilpisjärvi, Finland** - Three-country border point
6. **Tromsø, Norway** - Gateway to the Arctic

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finland-norway-trip-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js with OpenStreetMap
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📁 Project Structure

```
finland-norway-trip-2025/
├── app/
│   ├── day/[date]/          # Dynamic day detail pages
│   ├── itinerary/           # Full itinerary page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── InteractiveMap.tsx   # Leaflet map component
│   └── Timeline.tsx         # Timeline component
├── lib/
│   └── tripData.ts          # Trip data and types
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Adding New Destinations

Edit `lib/tripData.ts` to add new destinations:

```typescript
{
  id: "new-destination",
  name: "New Destination",
  country: "Country",
  coordinates: [latitude, longitude],
  description: "Description",
  imageUrl: "https://example.com/image.jpg",
  videoUrl: "https://youtube.com/embed/..."
}
```

### Modifying Itinerary

Update the `itinerary` array in `lib/tripData.ts` to modify daily activities, descriptions, and media.

### Styling

The project uses Tailwind CSS. Custom styles can be added in:
- `app/globals.css` for global styles
- `tailwind.config.js` for theme customization

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🗺️ Map Features

- Interactive markers for each destination
- Connecting lines showing the travel route
- Popup information with images and descriptions
- Automatic bounds fitting to show all destinations
- Custom styled markers with day numbers

## 🎬 Media Integration

The website supports:
- **Images**: High-quality destination photos from Unsplash
- **Videos**: YouTube embeds for destination videos
- **Galleries**: Responsive image grids for each day

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Traveling! 🌍✈️** 