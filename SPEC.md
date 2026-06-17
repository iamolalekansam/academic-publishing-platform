# PRAGAMASAN GLOBAL Publishing Platform

## Concept & Vision

PRAGMASAM GLOBAL is a distinguished academic publishing platform that embodies the gravitas of traditional scholarly institutions while embracing modern digital accessibility. The platform exudes intellectual authority and trust through its refined typography, generous whitespace, and meticulous attention to typographic hierarchy. It feels like stepping into a well-curated university library—organized, authoritative, yet welcoming to seekers of knowledge.

The experience prioritizes discoverability and accessibility, ensuring researchers, students, and academics can navigate vast scholarly content with confidence and ease.

## Design Language

### Aesthetic Direction
Oxford Academic meets Taylor & Francis—formal, scholarly, professional. Clean lines, restrained elegance, no frivolity. The design communicates academic rigor and institutional credibility.

### Color Palette
- **Primary:** Deep Navy Blue `#1A3A5C` — authority, trust, academia
- **Accent:** Gold `#C8922A` — distinction, achievement, prestige
- **Background:** Off-white `#F9F8F6` — warmth, paper-like quality
- **Surface:** White `#FFFFFF` — cards, modals, elevated elements
- **Text Primary:** Dark Charcoal `#2E2E2E` — readable, professional
- **Text Secondary:** `#5A5A5A` — supporting content
- **Border:** `#E5E3E0` — subtle separation
- **Success:** `#2E7D4A` — confirmations
- **Error:** `#C44536` — alerts

### Typography
- **Headings:** Playfair Display (serif) — elegant, scholarly authority
- **Body:** Inter (sans-serif) — clean, highly readable
- **Scale:** 14px base, 1.5 line height for body, 1.2 for headings
- **Weights:** 400 regular, 500 medium, 600 semibold, 700 bold

### Spatial System
- Base unit: 4px
- Content max-width: 1280px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Grid gaps: 24px (cards), 16px (tight), 48px (sections)

### Motion Philosophy
Minimal, purposeful animations only:
- Page transitions: fade 200ms ease-out
- Hover states: 150ms ease transitions
- Dropdowns: 200ms ease-out for open/close
- No decorative animations—academic gravitas over playful motion

### Visual Assets
- Icons: Lucide React (consistent, professional)
- Images: Placeholder covers with elegant gradient backgrounds
- Decorative: Subtle gold accent lines, minimal dividers

## Layout & Structure

### Page Architecture
1. **Sticky Header** — Logo, main navigation with dropdowns, user actions
2. **Hero Sections** — Full-width with overlay text, gradient overlays
3. **Content Sections** — Alternating backgrounds (white/off-white) for rhythm
4. **Card Grids** — Responsive 1-2-3-4 column grids based on content type
5. **Footer** — Multi-column with newsletter signup, social links, legal

### Responsive Strategy
- Desktop: 1280px max-width, multi-column layouts
- Tablet: 768px, 2-column grids, collapsible navigation
- Mobile: Single column, hamburger menu, touch-optimized

### Navigation Structure
```
Home | Journals ▼ | Books | Training Corner | About | Submissions | News | Contact
```
- Journals dropdown: All Journals, By Discipline ▶, By Publication Type ▶, By Access Type ▶

## Features & Interactions

### 1. Home Page
- **Hero:** Institution name, tagline, two CTA buttons
- **Featured Journals:** 3 latest journal cards with cover, title, discipline badge
- **Featured Books:** 3 book cards with cover, title, author, price, buy button
- **About Teaser:** Brief paragraph with link
- **Training Corner:** Teaser section linking to training resources
- **News:** 3 latest announcements in horizontal scroll

### 2. Journals System
- **Main Page:** 
  - Three filter rows (Discipline, Publication Type, Access Type)
  - Real-time keyword search
  - Responsive card grid
  - Cards show: cover, title, ISSN, badges, "View Issues" button
- **Discipline Pages:** 8 default disciplines with filtering
- **Publication Type Pages:** 5 types with explanations
- **Access Type Pages:** Open Access / Subscription Access

### 3. Journal Detail & Issues
- Journal overview with description, discipline/type badges
- List of volumes and issues
- Issue detail shows articles list
- Article view: title, authors, abstract, keywords, PDF download
- Download behavior: requires login, free for logged-in users

### 4. Books/Bookshop
- Grid of books with cover, title, author, price, buy button
- Product detail: full description, author bio, TOC, sample preview, purchase
- Simulated checkout with Paystack/Stripe options
- Post-purchase download access
- Author role gets free download of own books

### 5. Educational Training Corner
- Training announcements section
- Resource library with downloadable materials
- Video gallery with embedded players
- Program registration form

### 6. User System
- Registration: Name, Email, Password, Institution, Role selection
- Login with email verification simulation
- Dashboard: downloads, orders, manuscripts, saved items
- Role-based access: Reader, Author, Administrator

### 7. Additional Pages
- About: Mission, Vision, Editorial Board (ACF-style data)
- Submissions: Guidelines and submission form
- News: Blog-style announcements with categories
- Contact: Form and office information

## Component Inventory

### Navigation Components
- **Header:** Logo, nav links, auth buttons, mobile menu toggle
- **Dropdown Menu:** Animated reveal, keyboard accessible
- **Mobile Menu:** Slide-in panel, nested menu support

### Card Components
- **Journal Card:** Cover, badges, title, ISSN, CTA button
- **Book Card:** Cover, title, author, price, buy button
- **Article Card:** Compact: title, authors, journal, date
- **News Card:** Featured image, date, category, title, excerpt
- **Team Member Card:** Photo, name, title, bio

### Form Components
- **Input Field:** Label, input, helper text, error state
- **Select:** Dropdown with search for long lists
- **Checkbox/Radio:** Styled consistently
- **Button:** Primary (gold), Secondary (navy), Ghost variants

### Layout Components
- **Section:** Title, subtitle, content slot, background variant
- **Grid:** Responsive column system
- **Container:** Max-width wrapper with padding

### Feedback Components
- **Badge:** Discipline/Type/Access colored indicators
- **Alert:** Info, success, warning, error variants
- **Modal:** Centered overlay with close button
- **Toast:** Non-blocking notifications

## Technical Approach

### Framework & Architecture
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Context API for auth/state management

### Data Management
- Mock data stored in TypeScript files
- LocalStorage for user session simulation
- Simulated API responses for realism

### State Management
- AuthContext: user authentication state
- CartContext: WooCommerce-style cart (simulated)
- FilterContext: journal filtering state

### Routing Structure
```
/                     → Home
/journals             → All Journals
/journals/:id         → Journal Detail
/journals/discipline/:slug → Discipline Page
/journals/type/:slug  → Publication Type Page
/journals/access/:slug → Access Type Page
/books                → Bookshop
/books/:id            → Book Detail
/training             → Training Corner
/about                → About Page
/submissions          → Submission Guidelines & Form
/news                 → Announcements
/contact              → Contact Page
/dashboard            → User Dashboard (protected)
/login                → Login Page
/register             → Registration Page
```

### Key Implementation Notes
- All interactions are functional with state management
- Forms validate and show appropriate feedback
- Protected routes redirect to login
- Responsive design works on all breakpoints
- Accessibility: ARIA labels, keyboard navigation, focus management
