---
trigger: always_on
---

# Code Style Rules
## Toyo's Creative Space — Portfolio Website

These are the code style rules for Toyo's Creative Space. They exist so the codebase reads the same way no matter who (or which agent) wrote a given file. Consistency matters more than personal preference.
---

## Language

TypeScript everywhere. No JavaScript files in `app/`, `components/`, `lib/`, or `tokens/`. Configuration files like `next.config.mjs` are the only exception.

Strict mode is on. Do not disable `strict`, `noImplicitAny`, or `strictNullChecks` to make an error go away. Fix the type instead.

---

## Naming

- **Components** are `PascalCase` in `PascalCase.tsx` files. `ProjectCard.tsx` exports `ProjectCard`.
- **CSS Module files** match their component: `ProjectCard.module.css` lives next to `ProjectCard.tsx`.
- **Hooks** start with `use` and live in `hooks/` or alongside the component that uses them if they are scoped to one component.
- **Utility functions** are `camelCase` in `camelCase.ts` files inside `lib/`.
- **Constants** are `SCREAMING_SNAKE_CASE` when they represent fixed configuration values (site name, social URLs, project slugs). Use `camelCase` for everything else.
- **Asset files** use `kebab-case`: `teeny-waving.png`, `fish-orange.svg`, `coral-pink.svg`.
- **CSS class names** in modules use `camelCase`: `.projectCard`, `.heroHeadline`, `.speechBubble`.
- **Boolean variables** read as yes/no questions: `isMenuOpen`, `isLoading`, `hasError`, not `menuOpen`, `loading`, `error`.
- **Animation keyframe names** use `kebab-case`: `swim-right`, `float-up`, `fade-in-up`, `gentle-sway`.

---

## File Organisation

One component per file. If a helper function is only used inside one component, define it in the same file below the component. If it is used anywhere else, lift it to `lib/`.

**Order inside every component file:**
1. Imports (React first, third-party next, local last — each group separated by a blank line)
2. Types and interfaces
3. Constants local to the file
4. The component itself
5. Helper functions used only by this component

**Example:**
```typescript
// 1. React
import { useState, useEffect, useRef } from 'react'

// 2. Third-party
import Image from 'next/image'

// 3. Local — components
import SpeechBubble from '@/components/ui/SpeechBubble/SpeechBubble'
// 3. Local — lib / constants
import { SOCIAL } from '@/lib/constants'
// 3. Local — styles
import styles from './Hero.module.css'

// Types
type HeroProps = {
  name: string
  tagline: string
}

// Component
export default function Hero({ name, tagline }: HeroProps) {
  // ...
}
```

---

## TypeScript

Prefer `type` over `interface` unless you need declaration merging. Keep types close to where they are used. When a type is shared across the app, put it in `lib/types.ts`.

Do not use `any`. If the shape of something is genuinely unknown, use `unknown` and narrow it with a type guard. Every use of `any` must have a comment explaining why. There should be almost none in this codebase.

**Shared types to define in `lib/types.ts`:**
```typescript
export type Project = {
  slug:        string
  title:       string
  category:    string
  description: string
  metrics:     string[]
  heroImage:   string
  bgColor:     string
}

export type TeenyPose =
  | 'waving'
  | 'coffee'
  | 'resume'
  | 'celebrating'
  | 'confused'
  | 'thinking'

export type SocialPlatform =
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'behance'
  | 'email'
```

---

## React

Write function components only. No class components. Use hooks. Destructure props in the function signature.

**Server components are the default.** Add `'use client'` only when the component genuinely needs:
- `useState` or `useReducer`
- `useEffect` or `useRef`
- Browser APIs (`window`, `document`, `IntersectionObserver`)
- Event handlers (`onClick`, `onChange`, `onScroll`)
- Animation state

If a component is marked `'use client'` but has none of the above, remove the directive.

**Client components in this project:**
- `Header` (mobile menu toggle state)
- `UnderwaterScene` (fish/bubble animations, IntersectionObserver)
- `Fish` (CSS animation with dynamic delay props)
- `Bubbles` (CSS animation with dynamic positioning)
- `FadeInOnScroll` (IntersectionObserver)
- `StaggerChildren` (IntersectionObserver)
- `ScrollProgress` (scroll event, case study pages)
- `MobileMenu` (open/close state)

Keep components small. If a component file exceeds 200 lines, look for pieces to extract into smaller components.

**Props must always be typed:**
```typescript
// ✅ Correct
type ProjectCardProps = {
  title:       string
  category:    string
  description: string
  metrics:     string[]
  heroImage:   string
  bgColor:     string
  slug:        string
}

export default function ProjectCard({
  title,
  category,
  description,
  metrics,
  heroImage,
  bgColor,
  slug,
}: ProjectCardProps) { ... }

// ❌ Wrong
export default function ProjectCard(props: any) { ... }
```

---

## Styling

CSS Modules only. Every component has exactly one `.module.css` file with the same name.

**Correct:**
```
components/sections/ProjectCard/
├── ProjectCard.tsx
└── ProjectCard.module.css
```

**No inline styles** except for truly dynamic values that cannot be expressed in CSS — for example, a fish animation delay driven by an index number or a progress bar width driven by scroll position.

```typescript
// ✅ Allowed — truly dynamic value
<div style={{ animationDelay: `${index * 0.1}s` }}>

// ✅ Allowed — scroll-driven width
<div style={{ width: `${scrollProgress}%` }}>

// ❌ Not allowed — use CSS Module instead
<div style={{ color: '#7D52F4', fontSize: '16px' }}>
```

**No Tailwind. No styled-components. No CSS-in-JS. No utility class libraries.**

**Use CSS variables from the token file, never raw values:**
```css
/* ✅ Correct */
.projectCard {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  font-family: var(--font-family-primary);
  color: var(--color-text-primary);
}

/* ❌ Wrong */
.projectCard {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  font-family: 'Urbanist', sans-serif;
  color: #1a1a1a;
}
```

**CSS class names inside modules use camelCase:**
```css
/* ✅ Correct */
.projectCard { }
.cardTitle { }
.viewCaseStudy { }

/* ❌ Wrong */
.project-card { }
.card_title { }
```

**CSS Module class order inside each rule:**
1. Layout (display, position, flex, grid)
2. Box model (width, height, padding, margin, border)
3. Typography (font, text)
4. Visual (background, color, box-shadow, border-radius)
5. Animation (transition, transform, animation)

---

## Animation Code Style

Animations are important in this portfolio. They must be written cleanly and performantly.

**CSS `@keyframes` live in the component's `.module.css` file:**
```css
/* Fish.module.css */
@keyframes swim-right {
  from { transform: translateX(-150px); }
  to   { transform: translateX(calc(100vw + 150px)); }
}

.fish {
  animation: swim-right var(--fish-duration, 30s) linear infinite;
}
```

**Dynamic animation values (delay, duration) use inline style only:**
```typescript
// ✅ Allowed — dynamic delay from index
<div
  className={styles.fish}
  style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
>
```

**IntersectionObserver pattern for scroll animations:**
```typescript
// ✅ Correct pattern
'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './FadeInOnScroll.module.css'

export default function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
    >
      {children}
    </div>
  )
}
```

**Always include reduced motion:**
```css
/* In every animation-related module.css */
@media (prefers-reduced-motion: reduce) {
  .fish,
  .bubble,
  .seaweed,
  .fadeIn {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## Image Usage

Always use Next.js `<Image>` — never a raw `<img>` tag. `<Image>` handles optimisation, lazy loading, and responsive sizes automatically.

```typescript
// ✅ Correct
import Image from 'next/image'

<Image
  src="/assets/teeny/teeny-waving.png"
  alt="Teeny the duck mascot waving hello"
  width={300}
  height={350}
  priority   // Only on above-the-fold images (hero, portrait)
/>

// Decorative image
<Image
  src="/assets/illustrations/coral-pink.svg"
  alt=""
  width={80}
  height={100}
  aria-hidden="true"
/>

// ❌ Wrong
<img src="/assets/teeny/teeny-waving.png" />
```

**Rules:**
- `priority={true}` on hero images only (Teeny waving, portrait photo)
- All below-fold images use default lazy loading
- Every image has an `alt` prop — meaningful text for functional images, empty string for decorative ones
- Decorative images also get `aria-hidden="true"`

---

## Accessibility Code Style

Accessibility is non-negotiable. These patterns must appear consistently across all components.

**Semantic HTML — use the right element:**
```typescript
// ✅ Correct
<header>...</header>
<nav aria-label="Main navigation">...</nav>
<main>...</main>
<section aria-labelledby="skills-heading">...</section>
<footer>...</footer>

// ❌ Wrong
<div class="header">...</div>
<div id="nav">...</div>
<div class="main">...</div>
```

**Focus management for the mobile menu:**
```typescript
// Trap focus when mobile menu is open
// Esc key closes the menu
// Focus returns to hamburger button on close
// aria-expanded reflects open/closed state
<button
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
  aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
```

**External links always open with context:**
```typescript
// ✅ Correct
<a
  href={SOCIAL.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Toyo on Instagram (opens in new tab)"
>
  <Image src="/assets/icons/instagram.svg" alt="" aria-hidden="true" width={24} height={24} />
</a>
```

**Skip link at top of every page:**
```typescript
// In layout.tsx — first element in <body>
<a href="#main-content" className={styles.skipLink}>
  Skip to main content
</a>
```

---

## Constants and Configuration

Never hardcode site values inside components. Always import from `lib/constants.ts`.

```typescript
// ✅ Correct
import { SITE, SOCIAL } from '@/lib/constants'

<a href={SOCIAL.linkedin}>LinkedIn</a>
<p>{SITE.location}</p>

// ❌ Wrong
<a href="https://linkedin.com/in/omotoyosi-bamigboye">LinkedIn</a>
<p>Lagos, Nigeria</p>
```

---

## Imports

Use the `@/` alias for all local imports. Never use relative paths that go up more than one level.

```typescript
// ✅ Correct
import ProjectCard from '@/components/sections/ProjectCard/ProjectCard'
import { PROJECTS } from '@/lib/constants'
import styles from './ProjectList.module.css'

// ❌ Wrong
import ProjectCard from '../../../components/sections/ProjectCard/ProjectCard'
```

**Import groups — always in this order, separated by blank lines:**
1. React and Next.js
2. Third-party packages
3. Local components (`@/components/...`)
4. Local lib / constants (`@/lib/...`)
5. Local types (`@/lib/types`)
6. CSS Module (always last)

---

## Comments

Write comments that explain **why**, not **what**. The code already says what it does. If a comment paraphrases the line below it, delete it.

```typescript
// ✅ Good comment
// Pause underwater animations when footer leaves the viewport
// to avoid running CSS animations on elements the user cannot see
useEffect(() =>