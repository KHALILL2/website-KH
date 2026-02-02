# Khalil Muhammad | Portfolio

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

🔗 **Live Site:** [khalill2.github.io/Personal-website](https://khalill2.github.io/Personal-website/)

---

## Overview

Welcome to my digital portfolio—a showcase of my work as a **Communications Engineer** specializing in **Cybersecurity** and **Full-Stack Development**. This site demonstrates my commitment to building secure, elegant systems that prioritize both functionality and user experience.

Based in Alexandria, Egypt, I work at the intersection of security engineering and web development, focusing on system hardening, malware analysis, IoT automation, and building resilient web applications.

---

## Design Philosophy

### Liquid Metal Aesthetic

The site features a sophisticated **liquid glass** design inspired by modern Apple UI patterns, combined with a **metallic silver** color scheme that evokes the chrome surfaces from contemporary digital art. This creates a premium, futuristic feel while maintaining professional accessibility.

**Key Visual Elements:**
- **Liquid Chrome Typography:** Flowing metallic gradients on headings with subtle animation
- **Advanced Glassmorphism:** Multi-layered backdrop blur effects (30-45px) with saturation enhancement
- **Silver Palette:** Muted metallic tones (#c8c8c8, #d0d0d0, #e0e0e0) replacing harsh whites
- **Liquid Interactions:** Smooth hover transitions with light sweep and ripple effects
- **Dimensional Depth:** Inset highlights and layered shadows for tactile realism

### Technical Approach

**Zero-Framework Philosophy:** Built with vanilla HTML5, CSS3, and semantic markup—no frameworks, no build tools, no unnecessary dependencies. This architectural decision prioritizes:

- **Performance:** Sub-second load times with no framework overhead
- **Security:** Minimal attack surface; no vulnerable dependencies
- **SEO:** Clean semantic HTML with comprehensive meta tags
- **Accessibility:** ARIA landmarks and proper heading hierarchy
- **Responsive:** Mobile-first design from 320px to 4K displays

---

## Architecture

### Directory Structure

```
Personal Website/
├── index.html                 # Main landing page
├── README.md                  # Project documentation
├── assets/
│   ├── css/
│   │   └── main.css          # Unified stylesheet (1500+ lines)
│   └── images/               # All project images & logos
└── pages/
    ├── nexus.html            # NEXUS team showcase
    ├── batu-timetable.html   # BATU Timetable project
    ├── gdg-campus.html       # GDG on Campus project
    └── crafted.html          # CRAFTED branding project
```

### CSS Architecture

The `main.css` file is organized into logical sections:

1. **Reset & Base Configuration** - Browser normalization
2. **Typography System** - Metallic gradients, chrome effects
3. **Navigation Components** - Liquid glass navbar
4. **Layout & Containers** - Responsive grid systems
5. **Project Cards** - Interactive glassmorphism cards
6. **Leadership Showcase** - Enhanced feature cards
7. **Animations** - Chrome flow, liquid ripple, light sweep
8. **Responsive Breakpoints** - 10+ media queries (320px → 1920px+)

---

## Featured Projects

### BATU Timetable
**University Scheduling Platform**

A comprehensive course management system built for Borg Al Arab Technological University. Features automated conflict detection, multi-year academic planning, and real-time schedule updates.

- **Tech Stack:** JavaScript ES6+, HTML5, CSS Grid, Bootstrap
- **Features:** Interactive schedule builder, conflict resolution, mobile-responsive
- **Live Demo:** [khalill2.github.io/BATU-Timetable](https://khalill2.github.io/BATU-Timetable/)
- **Repository:** [github.com/KHALILL2/BATU-Timetable](https://github.com/KHALILL2/BATU-Timetable)

### NEXUS Technical Team
**IoT & Hardware Innovation**

Founded and lead a specialized engineering team pioneering smart campus solutions. We integrate hardware and software to create intelligent automation systems—from IoT-enabled turnstiles to LMS-synchronized attendance tracking.

- **Role:** Founder & Team Lead
- **Team Size:** 5-8 Engineers
- **Focus Areas:** IoT integration, hardware automation, embedded systems

### GDG on Campus BATU
**Community Leadership**

Organized and grew the Google Developer Group chapter at BATU, creating a thriving tech community focused on knowledge sharing, skill development, and collaborative learning.

- **Role:** Founder & Organizer
- **Activities:** Workshops, hackathons, tech talks
- **Platform:** Google Developer Groups

### CRAFTED
**Furniture Branding & Design**

Modern furniture branding project demonstrating expertise in visual identity, UI/UX design, and brand strategy. Features a distinctive circular logo design with responsive implementation.

- **Focus:** Brand identity, visual design, UI/UX
- **Skills:** Adobe Creative Suite, branding strategy

---

## Technologies

### Core Technologies
- **HTML5** - Semantic markup with ARIA accessibility
- **CSS3** - Advanced features (backdrop-filter, gradients, animations)
- **JavaScript** - Vanilla ES6+ (no frameworks)

### Design Tools
- **Fonts:** Google Fonts (Rajdhani, Pirata One)
- **Icons:** Font Awesome 6.5.1
- **Graphics:** Custom logo design

### Hosting & Deployment
- **GitHub Pages** - Static site hosting
- **Git** - Version control

---

## Key Features

### Visual Design
- **Liquid Chrome Headings** - Animated metallic gradients
- **Advanced Glassmorphism** - 40-45px blur with saturation boost
- **Metallic Silver Palette** - Sophisticated muted tones
- **Liquid Interactions** - Ripple effects, light sweeps, smooth transitions
- **Responsive Design** - Seamless across all devices

### Technical Excellence
- **Optimized Performance** - Preconnect hints, font display swap
- **SEO Ready** - Open Graph, Twitter Cards, semantic HTML
- **Accessible** - ARIA labels, semantic landmarks, keyboard navigation
- **Mobile-First** - Progressive enhancement from 320px
- **Secure** - No third-party trackers, minimal dependencies

### Interactive Elements
- **Hover Effects** - Smooth scale transforms with enhanced blur
- **Button Animations** - Liquid shine sweeps across buttons
- **Card Transitions** - Ripple effects on project cards
- **Chrome Flow Animation** - 4-second gradient flow on headings
- **Leadership Card Sweep** - Horizontal light transition

---

## Local Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/KHALILL2/Personal-website.git
cd Personal-website

# Option 1: Open directly in browser
start index.html

# Option 2: Python HTTP Server
python -m http.server 8000
# Visit: http://localhost:8000

# Option 3: Node.js HTTP Server
npx http-server -p 8000
# Visit: http://localhost:8000
```

### File Editing

1. **HTML Changes:** Edit `index.html` or files in `/pages/`
2. **Style Changes:** Modify `assets/css/main.css`
3. **Images:** Add to `assets/images/`
4. **Cache Busting:** Update CSS version parameter (e.g., `?v=3.4`)

### Testing Checklist

- [ ] Test all pages load correctly
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Check all external links
- [ ] Validate HTML (W3C Validator)
- [ ] Test accessibility (Lighthouse, WAVE)
- [ ] Check social media preview cards

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |

**Note:** Requires backdrop-filter support for glassmorphism effects.

---

## Performance Metrics

- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Total Page Size:** < 500KB
- **Lighthouse Score:** 95+
- **Mobile-Friendly:** Yes
- **SEO Score:** 100

---

## Security Features

- ✅ No third-party analytics or tracking
- ✅ No client-side data storage
- ✅ External links use `rel="noopener noreferrer"`
- ✅ Content Security Policy friendly
- ✅ HTTPS only (GitHub Pages)
- ✅ No vulnerable dependencies

---

## Design System

### Color Palette

```css
/* Backgrounds */
--background-primary: #000000;
--background-glass: rgba(10, 10, 10, 0.6);
--background-glass-hover: rgba(25, 25, 25, 0.7);

/* Text - Silver Tones */
--text-primary: #c8c8c8;
--text-secondary: #a0a0a0;
--text-heading: #d0d0d0;
--text-bright: #e0e0e0;

/* Borders & Accents */
--border-glass: rgba(255, 255, 255, 0.15);
--accent-green: #00ff41;
```

### Typography Scale

```css
h1: 3.5rem (Rajdhani 700) - Chrome gradient
h2: 2.5rem - Silver gradient
h3: 1.5rem - Muted silver gradient
body: 1.125rem (System fonts)
small: 0.95rem
```

### Glassmorphism Layers

```css
Navbar:  blur(40px) saturate(200%) brightness(1.1)
Cards:   blur(30px) saturate(180%) brightness(1.1)
Hover:   blur(40-45px) saturate(200%) brightness(1.2-1.25)
Buttons: blur(40px) saturate(200%)
```

---

## Recent Updates (v2.0)

### Visual Enhancements
- Added liquid metallic chrome aesthetic throughout
- Implemented Apple-inspired liquid glass effects
- Replaced bright whites with sophisticated silver tones
- Added fluid animations (chrome flow, liquid shine, ripple effects)
- Enhanced glassmorphism with 40-45px blur and saturation boost

### Content Updates
- Added GitHub repository link to BATU Timetable page
- Updated all page favicons with project-specific logos
- Enhanced meta descriptions and Open Graph tags

---

## Contact

Currently available for new opportunities and collaborations.

- Email: [khalill21652006@gmail.com](mailto:khalill21652006@gmail.com)
- LinkedIn: [linkedin.com/in/khalil-muhammad-ti](https://www.linkedin.com/in/khalil-muhammad-ti)
- GitHub: [github.com/KHALILL2](https://github.com/KHALILL2)
- Linktree: [linktr.ee/khalill2](https://linktr.ee/khalill2)

---

## License

Copyright © 2026 Khalil Muhammad. All rights reserved.

This project is open source and available under the [MIT License](LICENSE).

---

*Last Updated: February 2026*
