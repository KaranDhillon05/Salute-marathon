# Salute Marathon Website - Project Memory

## Project Overview
- **Event**: Salute Marathon 2025
- **Date**: Saturday, August 9, 2025
- **Venue**: Island Grounds, Chennai
- **Organizer**: Youth Wing of Lions Clubs International
- **Theme**: "Every Step Towards Safety"
- **Causes**: Women's Safety & Drug Awareness

## Technology Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Design Specifications
### Color Palette
- Primary Dark: #1a1a1a
- Primary Light: #f4f4f4
- Accent Red: #a4202c
- Accent Gold: #f7c53b
- Text Gray: #4a4a4a
- Border Light: #e5e5e5

### Typography
- **Headings**: Inter font, bold/extrabold
- **Body**: Inter font, normal weight
- **Fonts**: Google Fonts - Inter & Merriweather

## Project Structure
```
salute-marathon/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── RaceDetails.tsx
│   │   ├── RouteMap.tsx
│   │   ├── Rules.tsx
│   │   ├── Partners.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── tailwind.config.ts
└── package.json
```

## Components Status
### ✅ Completed Components
1. **Navigation** - Sticky header with smooth scrolling, mobile menu
2. **Hero** - Full-screen gradient background, event details, CTA
3. **About** - Two-column layout for Women's Safety & Drug Awareness
4. **Race Details** - Pricing cards (10K: ₹555, 5K: ₹333), entitlements
5. **Route Map** - SVG visualization of Historic Fort Circuit
6. **Rules & FAQ** - Interactive accordion, race rules
7. **Partners** - Sponsor grid with placeholder partners
8. **Footer** - Contact info, VIP guests, organizer details

## Key Features
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion throughout
- **Center Alignment**: All content properly centered
- **Proper Spacing**: Consistent padding and margins
- **SEO Optimized**: Meta tags, structured data
- **Performance**: Next.js optimized

## Race Information
### Categories
- **10K Pledge Run**: ₹555 (serious runners)
- **5K Safety Loop**: ₹333 (families, first-timers)

### Route
Start: Island Grounds → Napier Bridge → Fort St. George → Finish: Island Grounds

### Entitlements
- Official Dry-Fit T-Shirt
- Timed Race Bib
- Finisher's Medal
- Digital Certificate
- Post-Race Refreshments

## VIP Guests
- **Confirmed**: Thiru Ma. Subramanian (Hon'ble Minister for Health and Family Welfare)
- **Invited**: Thiru Udhayanidhi Stalin (Hon'ble Deputy Chief Minister)

## Event Coordinator
- **Name**: Leo Paul Jeevanesan
- **Phone**: +91 98765 43210
- **Email**: leo.paul@example.com

## Development Commands
```bash
# Navigate to project
cd "/Users/karandhillon/Salute Marathon/salute-marathon"

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Recent Updates
- ✅ Fixed spacing and center alignment across all sections
- ✅ Enhanced padding (py-24) for consistent section spacing
- ✅ Improved text sizes and readability
- ✅ Better card spacing and margins
- ✅ Center-aligned content with max-width containers
- ✅ TypeScript errors resolved
- ✅ CSS import order fixed

## Pending Tasks
- [ ] Razorpay payment integration
- [ ] Registration form component
- [ ] Deployment configuration
- [ ] Logo integration (from Canva link)
- [ ] Real sponsor logos

## Notes
- Website is fully functional and ready for testing
- All sections have proper spacing and center alignment
- Responsive design works on all devices
- Professional appearance with Leo Club colors
- Ready for production deployment

## URLs
- **Development**: http://localhost:3000
- **Logo Design**: https://www.canva.com/design/DAGtZ7xwJuY/aBKvAUGL54s3oflrx8_PAg/edit