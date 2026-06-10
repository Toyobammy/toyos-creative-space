# Toyo's Creative Space- Agent Project Brief

**Project Owner:** Omotoyosi Bamigboye (Toyo)
**Project Type:** Portfolio Website
**AI Agent:** Antigravity Code Generation
**Status:** In Development

---

## 1. PROJECT CONTEXT

### 1.1 Project Overview

**Name:** Toyo's Creative Space Portfolio Website
**Purpose:** This website is built to showcase Toyo's design work, skills, and experience as a Product Designer, Design Engineer, and Illustrato.

**Key Features:**
- Character-driven design with Teeny mascot (white duck)
- Scroll-based storytelling
- 5+ project case studies
- Underwater-themed footer with animated fishes and coral reefs
- Playful yet professional aesthetic
- Fully responsive (mobile, tablet, desktop)
- Accessibility-compliant (WCAG AA)
- High-performance (Lighthouse 90+)

**Target Users:**
- Recruiters and hiring managers
- Potential clients
- Design community members
- Fellow designers

**Tech Stack:**

- Frontend:HTML/CSS/JS
- Language: Typescript (Strict mode)
- No specific backend required for MVP
- Hosting: Netlify, Vercel, or GitHub Pages
- Version Control: Git

---

## 2. DESIGN SYSTEM REFERENCE

### 2.1 Brand Colors

**Primary Purple:**
```
Main: #7D52F4
Light: #AB87FF
Dark: #5D4580
```

**Accent Pink:**
```
Main: #FB4BA3
Light: #FFB3C6
Dark: #D8397B
```

**Neutral Grays:**
```
White: #FFFFFF
50: #F9FAFB
100: #F3F4F6
200: #E6E6E6
300: #D1D5DB
400: #9CA3AF
500: #7B7B7B
600: #6B6B6B
700: #4B5563
800: #2D2D2D
900: #1A1A1A
Black: #000000
```

**Semantic Colors:**
```
Success: #10B981
Error: #EF4444
Warning: #F59E0B
Info: #3B82F6
```

**Underwater Footer:**
```
Water Light: #A3D5FF
Water Medium: #35ADE9
Water Deep: #4A90E2
Sand: #FBDCA6
```

---

### 2.2 Typography

**Primary Font:** Urbanist
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

**Accent Font:** Emily's Candy
- Regular (400) - only weight

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Emilys+Candy&display=swap');
```

**Type Scale:**

| Level | Font | Size | Desktop | Mobile | Weight | Usage |
|-------|------|------|---------|--------|--------|-------|
| Display | Emily's Candy | 60px | 60px | 36px | 400 | Hero headline |
| Headline Large | Emily's Candy | 48px | 48px | 32px | 400 | Page titles |
| Headline Medium | Emily's Candy | 32px | 32px | 28px | 400 | Section headings |
| Headline Small | Urbanist | 28px | 28px | 24px | 700 | Project titles |
| Title Large | Urbanist | 24px | 24px | 18px | 600 | Card titles |
| Body Large | Urbanist | 18px | 18px | 16px | 400 | Descriptions |
| Body Medium | Urbanist | 16px | 16px | 14px | 400 | Body text |
| Body Small | Urbanist | 14px | 14px | 12px | 400 | Captions |
| Label | Urbanist | 14px | 14px | 12px | 500 | Buttons, labels |

---

### 2.3 Spacing System

**Base Unit:** 8px

**Scale:**
```
4px   = XS
8px   = S
12px  = 1.5x
16px  = M
24px  = L
32px  = XL
48px  = 2XL
64px  = 3XL
96px  = 4XL
```

**Common Usage:**
- Paragraph spacing: 16px
- Section spacing: 64-96px
- Card padding: 24-32px
- Button padding: 12px 24px
- Page margin: 48px (desktop), 24px (mobile)

---

### 2.4 Border Radius

```
8px   = buttons, small elements
16px   = form inputs, small cards
24px  = medium cards
32px  = project cards, large containers
16px  = pill shapes (buttons)
```

---

### 2.5 Shadows

```
Shadow SM: 0 2px 4px rgba(0,0,0,0.06)
Shadow MD: 0 4px 8px rgba(0,0,0,0.08)
Shadow LG: 0 8px 24px rgba(0,0,0,0.12)
```

---

## 3. CODE STYLE GUIDE

### 3.1 HTML Standards

**Semantic HTML:**
```html
<header>    <!-- Navigation, top of page -->
<nav>       <!-- Navigation links -->
<main>      <!-- Main content -->
<section>   <!-- Content sections -->
<article>   <!-- Case study articles -->
<footer>    <!-- Footer content -->
```

**Always use semantic elements.** Do NOT use `<div>` for structure when semantic elements exist.

**Attributes:**
- Always use lowercase
- Always quote attribute values
- Use single quotes for HTML attributes

**Example:**
```html
<img src='image.jpg' alt='Description of image' loading='lazy'>
```

---

### 3.2 CSS Standards

**File Organization:**
```
/styles
  ├── global.css         (base styles, reset)
  ├── variables.css      (CSS custom properties)
  ├── layout.css         (grid, flexbox, layout)
  ├── components.css     (component styles)
  ├── utilities.css      (utility classes)
  └── animations.css     (keyframes, transitions)
```

**CSS Variables (Must Use):**
```css
:root {
  /* Colors */
  --color-primary: #7D52F4;
  --color-primary-light: #AB87FF;
  --color-primary-dark: #5D4580;
  --color-accent: #FB4BA3;
  --color-success: #10B981;
  --color-error: #EF4444;
  
  /* Typography */
  --font-primary: 'Urbanist', sans-serif;
  --font-accent: 'Emilys Candy', cursive;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-s: 16px;
  --spacing-m: 24px;
  --spacing-l: 32px;
  --spacing-xl: 48px;
  
  /* Borders */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
}
```

**Class Naming (BEM):**
```css
/* Block */
.project-card { }

/* Element */
.project-card__title { }
.project-card__description { }

/* Modifier */
.project-card--featured { }
.project-card--loading { }
```

**Properties Order:**
1. Position & Layout (position, display, flex, grid)
2. Box Model (width, height, padding, margin, border)
3. Visual (background, color, font)
4. Transforms & Transitions (transform, transition)

```css
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 200px;
  padding: 12px 24px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-sm);
  
  background: var(--color-primary);
  color: white;
  font-weight: 500;
  
  transition: all 0.3s ease;
}
```

**Media Queries:**
```css
/* Mobile First */
.component {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

**Breakpoints:**
```
Mobile:  393px - 852px
Tablet:  768px - 1023px
Desktop: 1024px - 1440px
Large:   1441px+
```

---

### 3.3 JavaScript Standards

**File Organization:**
```
/js
  ├── index.js          (entry point)
  ├── components/       (component logic)
  ├── utils/            (utilities)
  ├── api/              (API calls)
  └── constants.js      (constants)
```

**Naming Conventions:**
- Variables: camelCase (`projectCard`, `isLoading`)
- Constants: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- Classes: PascalCase (`ProjectCard`, `SubmitHandler`)
- Functions: camelCase (`handleClick`, `fetchProjects`)
- Files: kebab-case (`project-card.js`, `submit-handler.js`)

**Code Style:**
```javascript
// Use const by default
const projectName = 'Hustle';

// Use let for variables that change
let count = 0;

// Avoid var
var outdated = 'bad'; // ❌ DON'T USE

// Use arrow functions
const handleClick = () => {
  console.log('clicked');
};

// Template literals
const message = `Hello, ${name}!`;

// Destructuring
const { title, description } = project;
const [first, ...rest] = items;

// Clear comments
// This function validates email format
const validateEmail = (email) => {
  return email.includes('@');
};
```

**Error Handling:**
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Failed to fetch:', error);
  throw error;
}
```

---

### 3.4 React Standards (if using React)

**Component Structure:**
```jsx
// Functional components with hooks
import { useState, useEffect } from 'react';

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Side effects here
  }, []);
  
  return (
    <div className='project-card'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button>View Case Study</button>
    </div>
  );
};

export default ProjectCard;
```

**File Naming:**
```
components/
  ├── ProjectCard.jsx
  ├── Button.jsx
  ├── Navigation.jsx
  └── Footer.jsx

pages/
  ├── Home.jsx
  ├── About.jsx
  └── CaseStudy.jsx
```

**Props Handling:**
```jsx
// Use PropTypes for type checking
import PropTypes from 'prop-types';

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

ProjectCard.defaultProps = {
  description: '',
};
```

---

## 4. ARCHITECTURE GUIDELINES

### 4.1 Project Structure

```
toyo-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Button.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── CaseStudy.jsx
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── animations.css
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── AGENTS.md
```

### 4.2 Component Architecture

**Smart vs Dumb Components:**

**Dumb/Presentational Components:**
- No state
- Props-based
- Reusable
- Example: `Button`, `Card`, `Badge`

```jsx
export const Button = ({ text, onClick, variant = 'primary' }) => (
  <button className={`button button--${variant}`} onClick={onClick}>
    {text}
  </button>
);
```

**Smart/Container Components:**
- Handle state
- Logic
- API calls
- Example: `ProjectsSection`, `ContactForm`

```jsx
export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);
  
  return (
    <section className='projects'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};
```

---

### 4.3 Routing Structure

**Pages:**
- `/` → Home (projects showcase)
- `/about` → About page
- `/case-study/:id` → Individual case study
- `/contact` → Contact page (if separate)

**Navigation:**
- Use semantic `<nav>` element
- Header fixed, visible on all pages
- Footer on all pages

---

## 5. DESIGN IMPLEMENTATION RULES

### 5.1 Must Implement Features

**Desktop:**
- ✅ Fixed header navigation
- ✅ Hover states on all interactive elements
- ✅ Smooth scroll behavior
- ✅ Button color transitions into hover color and back to original color
- ✅ Animations smooth (60fps)

**Mobile:**
- ✅ Mobile-optimized navigation (hamburger menu)
- ✅ Touch-friendly buttons (48px minimum)
- ✅ Single column project cards
- ✅ No hover effects (use tap/click instead)
- ✅ Sticky contact CTA button
- ✅ Reduced animations (lighter for performance)

**Underwater Footer:**
- ✅ Gradient water background
- ✅ Animated fish (swimming left/right)
- ✅ Floating bubbles
- ✅ Reef/seaweed elements
- ✅ Sandy bottom
- ✅ Fish with text messages
- ✅ "Back to land" CTA button
- ✅ Social icons
- ✅ Copyright text

---

### 5.2 Design Files Reference

**Reference Images Provided:**
- About section screenshot.PNG - About page design
- Portfolio full landing pagescreenshot.PNG - Homepage design
- Works screenshot.png - Works page design

**Match these designs exactly:**
- Layout spacing
- Typography sizes
- Color usage
- Component structure
- Image placement
- Footer layout
- Illustration Designs (assets would be provided)

---

## 6. PERFORMANCE REQUIREMENTS

### 6.1 Lighthouse Targets

```
Performance:  90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

### 6.2 Core Web Vitals

**Mobile (4G):**
- FCP: < 1.8s
- LCP: < 2.5s
- TTI: < 3.8s
- TBT: < 300ms
- CLS: < 0.1

**Desktop:**
- FCP: < 1.0s
- LCP: < 1.5s
- TTI: < 2.5s
- TBT: < 150ms
- CLS: < 0.1

### 6.3 Bundle Size Limits

```
Total JS:    < 200KB (gzipped)
Total CSS:   < 50KB (gzipped)
Total Fonts: < 100KB
Total Images (initial): < 200KB
```

### 6.4 Optimization Strategies

**Images:**
- Format: WebP with JPG/PNG fallback
- Lazy loading: `loading='lazy'` for below-fold
- Responsive: `srcset` for multiple sizes
- Compression: 80-85% quality
- Eager load: Hero images only

**Fonts:**
- Self-host (don't use CDN)
- Font-display: swap
- Preload: Woff2 critical fonts
- Subset: Latin only

**CSS:**
- Minify in production
- Remove unused CSS
- Inline critical CSS
- Variables for theming

**JavaScript:**
- Minify and bundle
- Code split by route
- Tree shake dead code
- Defer non-critical scripts

---

## 7. ACCESSIBILITY REQUIREMENTS

### 7.1 WCAG 2.1 AA Compliance

**Color Contrast:**
```
Normal text:    4.5:1 minimum
Large text:     3:1 minimum
UI components:  3:1 minimum
```

**Verified Colors:**
- Purple #7D52F4 on white: 4.73:1 ✅
- Black #1A1A1A on white: 16:1 ✅
- Gray #6B6B6B on white: 5.74:1 ✅

### 7.2 Keyboard Navigation

**Must have:**
- Tab navigation (all interactive elements)
- Enter/Space activation (buttons)
- Esc closes modals/menus
- Focus indicators (2px purple outline)
- Skip to main content link

### 7.3 Screen Reader Support

**Semantic HTML:**
```html
<header>
<nav aria-label="Main navigation">
<main>
<section>
<article>
<footer>
```

**ARIA Labels:**
```html
<button aria-label="Open navigation menu">☰</button>
<img src="image.jpg" alt="Descriptive text">
<form>
  <label for="name">Name</label>
  <input id="name" type="text" aria-required="true">
</form>
```

**Error Messages:**
```html
<div role="alert" aria-live="polite">
  Error message here
</div>
```
```

---

## 8. SECURITY GUIDELINES

### 8.1 General Security

**NO sensitive data in code:**
- No API keys in client code
- No passwords in variables
- No private credentials

**Use environment variables:**
```javascript
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
```

**No inline JavaScript:**
```html
<!-- ❌ BAD -->
<button onclick="alert('clicked')">Click</button>

<!-- ✅ GOOD -->
<button id="myButton">Click</button>
<script>
  document.getElementById('myButton').addEventListener('click', () => {
    alert('clicked');
  });
</script>
```

### 8.2 Form Security

**Validate all inputs:**
```javascript
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateForm = (data) => {
  const errors = {};
  if (!data.name) errors.name = 'Name required';
  if (!validateEmail(data.email)) errors.email = 'Valid email required';
  return errors;
};
```

**Sanitize output:**
```javascript
// Prevent XSS
const sanitize = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};
```

**Never trust user input.**

### 8.3 HTTPS Only

- All traffic must be HTTPS
- No mixed content
- Secure cookies (if used)
- CSP headers (content security policy)

---

## 9. TESTING REQUIREMENTS

### 9.1 Must Test

**Functional Testing:**
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Navigation works on all pages
- [ ] Images load properly
- [ ] Animations perform smoothly
- [ ] Responsive layout (mobile, tablet, desktop)

**Accessibility Testing:**
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast checks
- [ ] Focus indicators visible
- [ ] Alt text present

**Performance Testing:**
- [ ] Lighthouse 90+ score
- [ ] Core Web Vitals green
- [ ] Images optimized
- [ ] No layout shift

**Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

**Device Testing:**
- [ ] iPhone (latest)
- [ ] Android phone
- [ ] iPad/tablet
- [ ] Desktop monitors

---

## 10. GIT CONVENTIONS

### 10.1 Commit Messages

**Format:**
```
[type]: [description]

type: feat, fix, docs, style, refactor, test, chore
```

**Examples:**
```
feat: add project card component
fix: correct hero section spacing
docs: update README
style: format CSS
refactor: optimize image loading
test: add unit tests for button
chore: update dependencies
```

### 10.2 Branch Naming

```
main/develop          (default branches)
feature/project-card  (new features)
fix/header-spacing    (bug fixes)
docs/readme           (documentation)
```

### 10.3 Pull Requests

**Must include:**
- Clear description
- What changed and why
- Screenshots/demo (if UI changes)
- Testing performed
- Performance impact
- Accessibility impact

---

## 11. DEPLOYMENT CHECKLIST

### 11.1 Pre-Launch

- [ ] All pages load correctly
- [ ] All links functional
- [ ] Forms working
- [ ] Images optimized and loading
- [ ] Fonts loading correctly
- [ ] Responsive on all devices
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Lighthouse 90+ score
- [ ] No console errors
- [ ] No console warnings
- [ ] Analytics configured
- [ ] Meta tags set
- [ ] OG tags for social sharing
- [ ] Favicon set
- [ ] Robots.txt configured
- [ ] Sitemap.xml created
- [ ] Contact form working
- [ ] Resume download working
- [ ] Social links correct

### 11.2 Hosting Setup

**Recommended Platforms:**
- Netlify (easiest)
- Vercel (great for Next.js)
- GitHub Pages (free)
- Cloudflare Pages

**Requirements:**
- HTTPS enabled
- Custom domain configured
- Build hooks working
- Auto-deploy on git push
- Environment variables set

---


---

## 13. IMPORTANT NOTES FOR AI AGENT

### 13.1 Design Accuracy

**Critical:** Match the provided design images EXACTLY:
- Layout spacing and alignment
- Typography sizes and weights
- Color usage (use hex codes provided)
- Component structure
- Interactive states

If designs show something, implement it. Don't skip or simplify.

### 13.2 Responsive Design

**Mobile-first approach:**
1. Design for mobile (393px) first
2. Add tablet styles (768px)
3. Add desktop styles (1024px)

**Test extensively on:**
- iPhone (393px)
- Android (360px)
- iPad (768px)
- Desktop (1440px)

### 13.3 Performance Priority

**Every decision must consider:**
- Image optimization
- Code splitting
- Lazy loading
- Caching strategy
- Bundle size

**Target:** Lighthouse 90+

### 13.4 Accessibility is Non-Negotiable

**Every feature must:**
- Be keyboard accessible
- Work with screen readers
- Have proper color contrast
- Include descriptive alt text
- Provide clear focus indicators

**Target:** WCAG 2.1 AA

### 13.5 Animation Guidelines

**Safe animations (GPU-accelerated):**
- ✅ transform (translate, scale, rotate)
- ✅ opacity
- ❌ width, height
- ❌ top, left, margin
- ❌ position

**Performance:**
- Use CSS animations when possible
- Minimal JavaScript animations
- Respect `prefers-reduced-motion`
- Test on lower-end devices

### 13.6 Browser Support

**Support these browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Graceful degradation for older browsers.**

---

## 14. COMMON PATTERNS

### 14.1 Button Component

```jsx
export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled = false 
}) => (
  <button 
    className={`button button--${variant}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={typeof children === 'string' ? children : undefined}
  >
    {children}
  </button>
);
```

### 14.2 Image Component (Optimized)

```jsx
export const Image = ({ src, alt, sizes, ...props }) => (
  <img 
    src={src}
    alt={alt}
    loading="lazy"
    sizes={sizes}
    {...props}
  />
);
```

### 14.3 Section Component

```jsx
export const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    {title && <h2 className="section__title">{title}</h2>}
    {children}
  </section>
);
```

---

## 15. RESOURCES

**Design Files:**
- PRD: `Toyo_Portfolio_PRD_From_Designs.md`
- Reference Images: IMG_0583.PNG, IMG_0584.PNG, IMG_0585.png

**Color System:**
See section 2.1 for complete color palette

**Typography:**
See section 2.2 for complete type scale

**Spacing:**
See section 2.3 for spacing system

**Assets Needed:**
- Teeny illustrations (various poses)
- Project mockups
- Personal photos
- Underwater footer elements
- Social media icons
- Tool stack icons
- Font files (Urbanist, Emily's Candy)

---

## 16. CONTACT & SUPPORT

**Project Owner:** Omotoyosi Bamigboye (Toyo)
**Behance:** https://behance.net/omotoyobamigbo
**Email Address:** toyoscreativespace@gmail.com
**Instagram:** https://instagram.com/toyoscreativespace?igshid=1c6t8q6w2r6q2
**Tiktok:** https://tiktok.com/@toyoscreativespace

**In case of questions:**
1. Check the PRD first
2. Review design files
3. Ask for clarification in comments

---

## 17. SUCCESS CRITERIA

**Portfolio launches successfully when:**

✅ All pages load in < 3 seconds
✅ Responsive on all devices
✅ Lighthouse score 90+
✅ WCAG AA compliant
✅ All links working
✅ Forms functional
✅ Images optimized
✅ Animations smooth
✅ Keyboard navigable
✅ Screen reader compatible
✅ Zero console errors
✅ Design matches Figma exactly

---

**END OF AGENTS.MD**
