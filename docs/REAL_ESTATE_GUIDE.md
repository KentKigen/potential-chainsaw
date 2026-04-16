# HomeBase KE - Real Estate Website

A professional real estate website for a Kenyan brokerage based in Ongata Rongai / Nairobi.

## Design System

### Color Palette
- **Deep Navy** `#0B2545` - Primary brand color, headers, text
- **Warm Sand** `#F6E9D7` - Secondary background, soft accents
- **Terracotta** `#C75A3A` - Accent color for CTAs and highlights
- **Neutral Gray** `#6B7280` - Body text, secondary elements

### Typography
- **Font Family**: Inter (sans-serif)
- **Base Size**: 16px
- **Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight with generous line-height

### Spacing & Layout
- Clean, minimal layout with generous white space
- Max content width: 7xl (1280px)
- Consistent padding: 6 units (1.5rem / 24px)
- Border radius: 0.5rem (8px) for cards and components

## Component Library

### Buttons
**Location**: `/src/app/components/Button.tsx`

Variants:
- `primary` - Terracotta background (main CTAs)
- `secondary` - Sand background (secondary actions)
- `outline` - Navy border (tertiary actions)

Features:
- Smooth hover transitions (200ms)
- Focus ring for accessibility
- Disabled state support

### Badges
**Location**: `/src/app/components/Badge.tsx`

Variants:
- `default` - Sand background
- `accent` - Terracotta background
- `outline` - White background with navy border

Use cases: Property status, categories, tags

### Form Fields
**Location**: `/src/app/components/FormField.tsx`

Features:
- Consistent sand background
- Terracotta focus ring
- Support for text inputs and textareas
- Built-in label handling
- Keyboard accessible

### Property Card
**Location**: `/src/app/components/PropertyCard.tsx`

Features:
- Image with hover scale animation
- Property details (beds, baths, area)
- Price display in KES
- Location with map pin icon
- Status badge
- Card elevation on hover
- Click handler for navigation

### Agent Card
**Location**: `/src/app/components/AgentCard.tsx`

Modes:
- `compact` - Sidebar/smaller spaces (sand background)
- `full` - Full profile display (white background)

Features:
- Professional headshot
- Contact information (phone, email)
- Bio text (full mode)
- Contact CTA button
- Hover transitions

### Lead Form Modal
**Location**: `/src/app/components/LeadFormModal.tsx`

Features:
- Backdrop overlay with blur
- Smooth entrance/exit animations
- Property title display (optional)
- Full contact form
- Submission handling
- Close on backdrop click
- Keyboard accessible (Escape to close)

### Header
**Location**: `/src/app/components/Header.tsx`

Features:
- Sticky positioning
- Background blur on scroll
- Desktop navigation menu
- Mobile hamburger menu
- Phone number display
- Book Viewing CTA
- Smooth animations on mount
- Responsive design

### Footer
**Location**: `/src/app/components/Footer.tsx`

Sections:
- Brand and social links
- Quick links navigation
- Services list
- Contact information
- Trust signals in copyright

## Pages

### 1. Home Page
**Location**: `/src/app/components/pages/HomePage.tsx`

Sections:
- **Hero**: Full-screen with Nairobi skyline, headline, search bar
- **Featured Listings**: 3-column grid of property cards
- **Neighborhoods**: Image cards with overlay text
- **Trust Bar**: 3 trust signals with icons
- **Testimonials**: Carousel with navigation
- **CTA**: Book viewing call-to-action

Sample Copy:
```
Hero Headline: "Find Your Home in Nairobi"
Hero Subheading: "Verified listings. Local expertise. No hidden fees."
```

### 2. Listings Page
**Location**: `/src/app/components/pages/ListingsPage.tsx`

Features:
- Filter panel (collapsible)
  - Property type checkboxes
  - Price range inputs
  - Bedroom/bathroom selectors
  - Location dropdown
- Grid/Map view toggle
- Property grid (6 properties shown)
- Filter controls sticky on desktop
- Responsive layout

### 3. Listing Detail Page
**Location**: `/src/app/components/pages/ListingDetailPage.tsx`

Features:
- **Image Gallery**: 
  - Large main image with navigation
  - Thumbnail strip (4 images)
  - Keyboard navigation
  - Image counter
- **Property Details**:
  - Title, location, price
  - Key facts (beds, baths, area)
  - Full description
  - Feature list with bullets
  - Property details grid
- **Sidebar**:
  - Schedule viewing CTA
  - Download brochure button
  - Compact agent card
  - Mortgage calculator placeholder

### 4. Agent Profile Page
**Location**: `/src/app/components/pages/AgentProfilePage.tsx`

Sections:
- Hero with agent photo and stats
- About section with bio
- Specializations grid
- Recent listings (2-column grid)
- Sidebar with contact CTA and performance highlights

Sample Copy:
```
Agent Bio: "Grace Wanjiku is a seasoned real estate professional with over 8 years of experience specializing in residential properties across Ongata Rongai, Karen, and greater Nairobi. Her deep understanding of the local market, combined with a client-first approach, has helped hundreds of families find their dream homes."
```

### 5. About Page
**Location**: `/src/app/components/pages/AboutPage.tsx`

Sections:
- Hero with Nairobi image
- Our Story (company background)
- Stats (500+ properties, 98% satisfaction, etc.)
- Values grid (4 values with icons)
- Team section (3 agent cards)
- CTA section

### 6. Blog Page
**Location**: `/src/app/components/pages/BlogPage.tsx`

Features:
- Featured post (large format)
- Category filter buttons
- Post grid (3 columns)
- Article cards with:
  - Category badge
  - Title and excerpt
  - Author and date
  - Featured image
- Newsletter signup CTA

### 7. Contact Page
**Location**: `/src/app/components/pages/ContactPage.tsx`

Features:
- Contact form (2-column layout)
- Office information cards (2 offices)
- Quick contact emergency number
- Map placeholder
- Business hours for each office

## Interactions & Animations

### 1. Hero Entrance Sequence
**Implementation**: Framer Motion staggered animations
- Heading fades up (0.2s delay)
- Subheading fades up (0.4s delay)
- Search bar fades up (0.6s delay)

### 2. Property Card Hover
**Implementation**: CSS transforms + Motion
- Card translates up 8px
- Shadow elevation increases
- Image scales to 105%
- Duration: 200ms smooth

### 3. Header Scroll Effect
**Implementation**: React state + scroll listener
- Transparent → White background
- Shadow appears on scroll
- Smooth 300ms transition

### 4. Testimonial Carousel
**Implementation**: State-based with navigation
- Left/right arrow buttons
- Dot indicators
- Smooth fade transitions
- Auto-slide ready (optional)

### 5. Modal Animations
**Implementation**: Framer Motion AnimatePresence
- Backdrop fade in
- Modal scale + fade entrance
- Smooth exit animations
- Supports click-outside to close

## Prototype Flow: Booking a Viewing

### User Journey
1. **Entry Point**: User clicks "Book Viewing" button
   - Available on: Header, Hero CTA, Listing Detail sidebar, any property card
   
2. **Modal Opens**: LeadFormModal displays
   - Smooth scale + fade animation
   - Property title shown (if from specific listing)
   - Form fields pre-focused

3. **User Fills Form**:
   - Full name (required)
   - Phone number (required)
   - Email address (required)
   - Preferred viewing date (required)
   - Additional notes (optional)

4. **Validation**:
   - Required fields enforced by HTML5
   - Phone format: +254 XXX XXX XXX
   - Email validation

5. **Submission**:
   - Click "Submit Request"
   - Alert confirmation displayed
   - Modal closes automatically
   - In production: Would send to CRM/email

6. **Follow-up Message**:
   - "We'll contact you within 24 hours to confirm your viewing appointment"

### Accessibility
- Modal can be closed with Escape key
- Focus trap within modal
- Click backdrop to close
- All form fields have labels
- Submit button has clear action text

## Accessibility Features

### Keyboard Navigation
- All interactive elements accessible via Tab
- Focus visible states on all controls
- Skip to content (implicit via layout)
- Modal focus trap

### Visual
- High contrast text (navy on white, white on navy)
- 16px base font size (readable)
- Clear focus indicators (rings on form fields, buttons)
- Sufficient spacing between clickable elements

### Screen Readers
- Semantic HTML (header, nav, main, footer, section)
- Alt text on all images
- Form labels properly associated
- ARIA labels where needed (mobile menu)

### Color Contrast
- Navy (#0B2545) on white: AAA compliant
- White on Navy: AAA compliant
- Terracotta (#C75A3A) on white: AA compliant
- Gray (#6B7280) on white: AA compliant for large text

## Mobile Responsive Variants

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations
1. **Header**:
   - Hamburger menu replaces desktop nav
   - Phone number hidden on smallest screens
   - CTA moves to mobile menu

2. **Hero**:
   - Single column layout
   - Search bar stacks vertically
   - Reduced font sizes (5xl → 4xl)

3. **Property Grid**:
   - 1 column on mobile
   - 2 columns on tablet
   - 3 columns on desktop

4. **Listing Filters**:
   - Full-width on mobile
   - Collapsible by default
   - Sticky positioning disabled

5. **Forms**:
   - Single column layout
   - Full-width inputs
   - Larger touch targets (min 44px)

6. **Image Gallery**:
   - Swipe gestures ready
   - Simplified thumbnail strip
   - Vertical scrolling

## Content Guidelines

### Tone & Voice
- Premium, trustworthy, human-first
- Concise and scannable
- Local context (Nairobi, Ongata Rongai)
- Trust-building phrases:
  - "Verified listings"
  - "No hidden fees"
  - "Local market expertise"

### Sample Copy

#### Property Card
```
Title: Modern 3BR Villa
Location: Ongata Rongai, Nairobi
Price: KES 12,500,000
Features: 3 Beds • 2 Baths • 180 sqm
```

#### Agent Bio
```
Grace Wanjiku is a seasoned real estate professional with over 8 years of experience specializing in residential properties across Ongata Rongai, Karen, and greater Nairobi. Her deep understanding of the local market, combined with a client-first approach, has helped hundreds of families find their dream homes.
```

#### Trust Signals
- "Every property thoroughly verified for authenticity"
- "Recognized for excellence in Kenyan real estate"
- "Deep knowledge of Nairobi and Ongata Rongai markets"

## Technical Implementation

### Stack
- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Framer Motion (motion package)
- Lucide React (icons)

### File Structure
```
/src
  /app
    /components
      - Button.tsx
      - Badge.tsx
      - FormField.tsx
      - Header.tsx
      - Footer.tsx
      - PropertyCard.tsx
      - AgentCard.tsx
      - LeadFormModal.tsx
      /pages
        - HomePage.tsx
        - ListingsPage.tsx
        - ListingDetailPage.tsx
        - AgentProfilePage.tsx
        - AboutPage.tsx
        - BlogPage.tsx
        - ContactPage.tsx
    - App.tsx
  /styles
    - fonts.css
    - theme.css
```

### Navigation
- State-based routing (useState)
- No page reloads
- Smooth transitions between pages
- Scroll to top on page change (can be added)

### Performance Optimizations
- Optimized images from Unsplash
- Lazy loading ready (can be added)
- Minimal bundle size
- CSS purging via Tailwind
- Motion animations use GPU acceleration

## Future Enhancements

### Phase 2 Features
1. **Search Functionality**:
   - Live search as you type
   - Filter by location, price, features
   - Search suggestions

2. **Map Integration**:
   - Google Maps API
   - Property markers
   - Neighborhood boundaries
   - Interactive filters

3. **User Accounts**:
   - Saved searches
   - Favorite properties
   - Viewing history
   - Email alerts

4. **Advanced Gallery**:
   - 360° virtual tours
   - Video walkthroughs
   - Floor plans
   - Full-screen lightbox

5. **Mortgage Calculator**:
   - Real-time calculations
   - Interest rate inputs
   - Down payment scenarios
   - Amortization schedule

6. **Live Chat**:
   - WhatsApp integration
   - Chatbot for FAQs
   - Agent availability status

7. **CRM Integration**:
   - Lead capture to Salesforce/HubSpot
   - Email automation
   - SMS notifications
   - Viewing calendar sync

## Deployment Notes

### Environment Variables
- `REACT_APP_API_URL` - Backend API endpoint
- `REACT_APP_MAPS_KEY` - Google Maps API key
- `REACT_APP_ANALYTICS_ID` - Google Analytics ID

### Build
```bash
pnpm install
pnpm build
```

### SEO Considerations
- Meta tags for each page
- Open Graph images
- Structured data (schema.org)
- Sitemap.xml
- Robots.txt

---

**Brand**: HomeBase KE  
**Tagline**: Find Your Home in Nairobi  
**Trust Signals**: Verified listings • No hidden fees • Local market expertise
