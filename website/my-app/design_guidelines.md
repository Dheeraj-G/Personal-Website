# Design Guidelines for Dheeraj Gosula Portfolio

## Design Approach
**Reference-Based**: Inspired by Squarespace, Vercel, Linear, and Cursor's modern minimalistic aesthetic with glassmorphism as the defining visual pattern.

## Color Palette
- **Primary**: Dark green (various shades)
- **Neutrals**: Black, white, and their gradients
- **Glass Effects**: Translucent overlays with frosted glass appearance
- **Accents**: Subtle neon glow on hover states

## Typography
- **Font Family**: Inter or SF Pro (clean, modern sans-serif)
- **Hierarchy**:
  - Hero Name: Extra large, bold weight
  - Section Headings: Large, medium-bold weight
  - Body Text: Regular size, normal weight
  - Supporting Text: Slightly smaller, light weight

## Layout System
- **Spacing Units**: Tailwind units 4, 6, 8, 12, 16, 24
- **Container**: Max-width constrained for desktop, full-width on mobile
- **Grid**: Projects use 3-column grid (desktop) → 1-column (mobile)
- **Sections**: Generous vertical padding (py-16 to py-24)

## Core Components

### Navigation
- Sticky navbar with glassmorphism effect (becomes frosted on scroll)
- Links: About, Projects, Experience, Contact, GitHub
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with glass panel dropdown

### Hero Section
- Full viewport height with animated background (subtle parallax/fade)
- Centered name "Dheeraj Gosula" with tagline beneath
- Gentle cursor-based motion effect or soft gradient animation
- **No hero image** - focus on typography and motion

### Glass Panels
- Frosted glass effect: `backdrop-filter: blur()`
- Translucent backgrounds with border glow
- Slight shadow for depth
- Rounded corners (medium radius)

### Project Cards
- Grid layout with hover effects
- Each card: glass panel with project name, description, tech stack, link
- Hover state: lift (translate-y), glow border, enhanced blur
- Smooth transitions (300-400ms)

### Experience Timeline
- Vertical timeline or clean list layout
- Each entry in glass panel: company, role, dates, description
- Minimal, text-focused design

### Contact Section
- Form inputs (name, email, message) with glass styling
- OR social icon links (email, LinkedIn, GitHub)
- Icons have subtle glow/blur on hover
- Submit button with glass treatment

### Footer
- Links: GitHub, LinkedIn, Resume
- Minimal copyright line
- Dark background, subtle glass divider above

## Animations & Interactions
- **Scroll-triggered**: Sections fade-in and slide-in as they enter viewport
- **Hover Effects**: Smooth transitions on all interactive elements
- **Navbar**: Transforms to frosted glass on scroll
- **Easter Eggs**: Hidden menu, secret hover interactions, custom cursor effect
- **Timing**: 300-400ms transitions, ease-in-out curves

## Special Features
- Dark mode toggle (or default dark theme)
- Custom cursor interaction effects
- Hidden UI surprises for user discovery
- Responsive breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)

## Accessibility
- Semantic HTML5 (header, nav, section, footer)
- Alt attributes for images
- High contrast between text and backgrounds
- ARIA labels for interactive elements
- Keyboard navigation support

## Images
- **About Section**: Personal photo in frosted glass panel with rounded corners
- **No large hero image** - design is typography and motion-focused
- Project cards may include small thumbnails/icons if applicable