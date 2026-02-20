# Sk Salone - Beauty Salon Website

**Version: 1.0.0**

## Project Overview
A modern, responsive beauty salon website built with **React 19**, **Vite**, and **Tailwind CSS v4**. The design focuses on a premium, elegant aesthetic with gold accents and script typography, tailored for a high-end beauty fashion experience.

This repository contains the **frontend client** for the Sk Salone project.

## Project Structure

```text
client/
├── public/              # Static assets (images, icons)
├── src/
│   ├── assets/          # Project-specific assets (e.g., videos)
│   ├── components/      # Reusable UI components organized by section
│   │   ├── About/       # About Us section components
│   │   ├── Blog/        # Blog/News section
│   │   ├── Footer/      # Main Footer
│   │   ├── Gallery/     # Image Gallery
│   │   ├── Hero/        # Landing Hero/Carousel
│   │   ├── Layout/      # Global Layout (Navbar, etc.)
│   │   ├── Pricing/     # Service Pricing lists
│   │   ├── Services/    # Service category cards
│   │   ├── Team/        # Professional Team section
│   │   └── Testimonials/# Client feedback/Reviews
│   ├── App.jsx          # Main application component & Routing
│   ├── index.css        # Global styles & Tailwind CSS v4 variables
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Features Implemented

### 🌟 Core Design
- **Premium Aesthetic**: Vibrant highlights with gold accents (`#c79a5b`) and charcoal backgrounds (`#191919`).
- **Elegant Typography**: Use of "Great Vibes" for script elements and "Playfair Display" for sophisticated headings.
- **Glassmorphism**: Subtle translucent effects on overlays for a modern feel.

### 🧭 Navigation & Routing
- **Fixed Navbar**: Sticky positioning with a subtle shadow for constant accessibility.
- **Smooth Anchor Scrolling**: Custom `ScrollToAnchor` component in `App.jsx` handles seamless transitions between sections using URL hashes (`/#about`).
- **Responsive Layout**: Dynamic mobile menu with overlay.

### 🎭 Animations & Interactions
- **Hero Infinite Scroll**: A perfectly seamless right-to-left automatic looping image slider with square bottom-right navigation buttons.
- **Testimonial Slider**: Click-driven smooth physical card sliding, with dynamic center-card highlighting (gold background + scaling).
- **Responsive Layout Adjustments**: Fully centralized alignment on mobile for complex sections (e.g., Footer), elegantly expanding left-aligned on desktop monitors.
- **Refined Interactive States**: Custom "READ MORE" buttons feature a unified `#322c2c` light black background hover effect, complementing the gold outline.
- **Pixel-Perfect Styling**: Section spacings, like the `80px` vertical and `24px` horizontal paddings on the Services block, have been fine-tuned to match original mockups.

### 🛠️ Key Sections
- **Hero Carousel**: Auto-sliding visual gallery with left-aligned branding.
- **Service Pricing**: High-contrast split-screen design (Gold & Dark) for elegant price delivery.
- **Interactive Team Cards**: Member profiles with zoom-hover effects and integrated social links.
- **Blog Checkerboard**: A unique layout alternating images and text blocks with gold styling.

## Technologies Used
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Navigation**: [React Router v7](https://reactrouter.com/)
- **Icons**: `react-icons`, `lucide-react`
- **Fonts**: Google Fonts (Great Vibes, Playfair Display)

## Setup & Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Lint core files**:
   ```bash
   npm run lint
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Design Tokens

### Color Palette
| Variable | Hex Code | Usage |
| :--- | :--- | :--- |
| `--primary` | `#c79a5b` | Main accent, buttons, icons (Gold) |
| `--secondary` | `#191919` | Footer background, dark elements (Charcoal) |
| `Background` | `#f5f1ed` | Section backgrounds (Light Beige) |

### Typography
- **Script Font**: `'Great Vibes', cursive`
- **Serif Font**: `'Playfair Display', serif`
- **Body Font**: UI Standard (Segoe UI, Verdana)

## Technical Implementation Details
- **Responsive Navbar Positioning**: The navbar uses `relative` positioning on mobile/tablet (up to 1024px) to scroll with content, and `fixed` positioning on desktop (`xl:fixed`, 1280px+) for constant accessibility. This specifically ensures the iPad Pro natively displays the mobile hamburger menu.
- **Dynamic Header Offset**: `App.jsx` includes a spacer `<div className="hidden xl:block h-24"></div>` that precisely matches the desktop navbar's height (`24`), offsetting content perfectly to prevent visual gaps. This ensures a clean layout on iPad Pros without lingering empty gaps.

---
*Created as part of the AngappanMERN/Salone_sample_Project.*
