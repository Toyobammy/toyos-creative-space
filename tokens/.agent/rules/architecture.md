---
trigger: always_on
---

# Architecture Rules
## Toyo's Creative Space — Portfolio Website

These rules describe how Toyo's Creative Space portfolio is structured. Every agent building features must follow this architecture. Do not introduce new patterns without discussing them with the developer first.
---

## The Stack

Toyo's Creative Space is a **Next.js application** using the **App Router**, written in **TypeScript**. There is no database, no authentication, and no payment system. This is a portfolio website. The goal is fast loading, strong visual presentation, and a delightful user experience.

Styling uses **CSS Modules** with **CSS custom properties** from `tokens/design-tokens.css`. There is no Tailwind, no styled-components, and no CSS-in-JS.

The contact form uses a **third-party email service** (Resend or Formspree) via a Next.js route handler. That is the only backend logic in this project.

---

## Directory Layout

```
app/
├── (site)/                         public-facing portfolio pages
│   ├── page.tsx                    homepage — works section
│   ├── about/
│   │   └── page.tsx                about page
│   └── work/
│       ├── hustle/
│       │   └── page.tsx            Hustle Platform case study
│       ├── giggles/
│       │   └── page.tsx            Giggles Daycare case study
│       ├── sparkles/
│       │   └── page.tsx            Sparkles case study
│       ├── kikku/
│       │   └── page.tsx            Kikku UX Audit case study
│       ├── illustrations/
│       │   └── page.tsx            Illustration works page
│       └── ui-screens/
│           └── page.tsx            UI Screens slideshow page
├── api/
│   └── contact/
│       └── route.ts                contact form submission handler
├── not-found.tsx                   custom 404 page (Teeny confused pose)
├── loading.tsx                     loading state (Teeny thinking pose)
├── layout.tsx                      root layout — nav, footer, fonts

components/
├── ui/                             primitive reusable components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── Badge/                      skill pill badges
│   │   ├── Badge.tsx
│   │   └── Badge.module.css
│   └── SpeechBubble/              Teeny speech bubbles
│       ├── SpeechBubble.tsx
│       └── SpeechBubble.module.css
├── layout/                         structural layout components
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── MobileMenu.tsx
│   └── Footer/
│       ├── Footer.tsx
│       ├── Footer.module.css
│       ├── UnderwaterScene.tsx     animated underwater footer section
│       ├── Fish.tsx                individual swimming fish component
│       └── Bubbles.tsx             floating bubble animation component
├── sections/                       full page section components
│   ├── Hero/
│   │   ├── Hero.tsx                name, description, Teeny, grass
│   │   └── Hero.module.css
│   ├── ProjectCard/
│   │   ├── ProjectCard.tsx         single project card
│   │   └── ProjectCard.module.css
│   ├── ProjectList/
│   │   ├── ProjectList.tsx         list of all project cards
│   │   └── ProjectList.module.css
│   ├── AboutIntro/
│   │   ├── AboutIntro.tsx          photo + story text
│   │   └── AboutIntro.module.css
│   ├── Skills/
│   │   ├── Skills.tsx              skill badges grid
│   │   └── Skills.module.css
│   ├── ToolStack/
│   │   ├── ToolStack.tsx           tool icon cards grid
│   │   └── ToolStack.module.css
│   ├── Funivity/
│   │   ├── Funivity.tsx            favourite things photo grid
│   │   └── Funivity.module.css
│   ├── ResumeDownload/
│   │   ├── ResumeDownload.tsx      Teeny holding resume sign + download
│   │   └── ResumeDownload.module.css
│ 
│   └── CaseStudy/
│       ├── CaseStudyHero.tsx       case study title + mockup image
│       ├── CaseStudySidebar.tsx    sticky table of contents
│       ├── CaseStudySection.tsx    reusable case study content section
│       └── CaseStudy.module.css
├── teeny/                          all Teeny mascot components
│   ├── TeenyWaving.tsx             hero section
│   ├── TeenyCoffee.tsx             about section
│   ├── TeenyResume.tsx             resume download CTA
│   ├── TeenyCelebrating.tsx        form success state
│   ├── TeenyConfused.tsx           404 error page
│   └── TeenyThinking.tsx           loading state
└── animations/                     scroll and interaction animations
    ├── FadeInOnScroll.tsx           IntersectionObserver fade-in wrapper
    ├── StaggerChildren.tsx          staggered child animation wrapper
    └── ScrollProgress.tsx           reading progress bar for case studies

tokens/
└── design-tokens.css               single source of truth for all design values

lib/
├── contact.ts                      email sending helper (Resend or Formspree)
├── validators/
│   └── contact.ts                  zod schema for contact form validation
└── constants.ts                    site-wide constants (name, email, social links)

public/
├── assets/
│   ├── teeny/                      all Teeny illustration PNG/SVG files
│   │   ├── teeny-waving.png
│   │   ├── teeny-coffee.png
│   │   ├── teeny-resume.png
│   │   ├── teeny-celebrating.png
│   │   ├── teeny-confused.png
│   │   └── teeny-thinking.png
│   ├── illustrations/              underwater scene elements
│   │   ├── fish-orange.svg
│   │   ├── fish-green.svg
│   │   ├── grass-strip.svg
│   │   ├── coral-pink.svg
│   │   ├── coral-orange.svg
│   │   ├── coral-purple.svg
│   │   ├── seaweed-tall.svg
│   │   └── seaweed-short.svg
│   ├── projects/                   project mockup images per case study
│   │   ├── hustle/
│   │   ├── giggles/
│   │   ├── sparkles/
│   │   ├── kikku/
│   │   ├── illustrations/
│   │   └── ui-screens/
│   ├── tools/                      tool stack icon images
│   │   ├── figma.svg
│   │   ├── github.svg
│   │   ├── antigravity.svg
│   │   ├── slack.svg
│   │   ├── chatgpt.svg
│   │   ├── gemini.svg
│   │   └── claude.svg
│   └── about/                      personal photos (portrait, fun-ivity)
│       ├── portrait.jpg
│       ├── thrift-shopping.jpg
│       ├── video-tiktoks.jpg
│       ├── traveling.jpg
│       └── fashion-modeling.jpg
├── fonts/                          self-hosted font files
│   ├── urbanist-regular.woff2
│   ├── urbanist-medium.woff2
│   ├── urbanist-semibold.woff2
│   ├── urbanist-bold.woff2
│   └── emilys-candy-regular.woff2
├── resume/
│   └── Omotoyosi-Bamigboye-Resume.pdf    downloadable resume file
├── favicon.ico
└── og-image.png                    social media preview image (Open Graph)
```

---

## Rendering Rules

**Every page is statically generated (SSG) by default.**

This is a portfolio website. There is no dynamic user data, no authentication, and no database. Static generation means fast load times, great SEO, and no server costs.

```
Homepage (/)              → Static — generated at build time
About (/about)            → Static — generated at build time
Case Studies (/work/*)    → Static — generated at build time
404 (/not-found)          → Static — Teeny confused illustration
```

**The only dynamic route handler is the contact form:**

```
POST /api/contact         → Route handler — processes form, sends email
```

Everything else is static. Do not add `getServerSideProps`, dynamic rendering, or database calls to any page that does not absolutely require it.

---

## Page Architecture

Each page follows this structure:

```
Page (app/(site)/page.tsx)
└── RootLayout (app/layout.tsx)
    ├── Header
    │   ├── Logo (TCS)
    │   ├── NavLinks (Work, About, Resume)
    │   └── BookCallButton
    ├── [Page Content]
    │   └── [Section Components]
    └── Footer
        ├── FooterContent (links, social, message)
        └── UnderwaterScene
            ├── WaterSurface
            ├── Fish (multiple, animated)
            ├── Bubbles (multiple, animated)
            ├── ReefElements (coral, seaweed, shells)
            └── FooterBottom (copyright, back to land)
```

---

## Component Rules

### Server Components vs Client Components

**Default to server components.** Only use client components when the feature requires it.

**Client components are required for:**
- Scroll-triggered animations (IntersectionObserver)
- The underwater footer animations (fish, bubbles, seaweed)
- The mobile hamburger menu (toggle state)
- The contact form (controlled inputs, validation, submission)
- The scroll progress bar on case study pages
- The "Back to land" scroll-to-top button

**Server components handle:**
- All page layouts
- Static content rendering
- Image optimization (Next.js `<Image>`)
- Metadata generation (`export const metadata`)

Mark client components with `'use client'` at the top of the file. Never add `'use client'` to a page file — keep pages as server components and import client components into them.

---

## Data Flow

There is only one kind of write in this application:

**Contact form submissions** go through a route handler:

1. User fills out the contact form (client component)
2. Client validates with zod before sending
3. Client calls `POST /api/contact` with form data
4. Route handler validates again with zod on the server
5. Route handler sends email via Resend/Formspree
6. Returns `{ ok: true }` on success or `{ ok: false, error: { message } }` on failure
7. Client shows Teeny celebrating (success) or error message (failure)

That is the only data flow in this app. There is no database. There is no authentication. There is no cart, checkout, or payment.

---

## State Management

There is no global state library. Do not introduce Redux, Zustand, Jotai, or any state management library.

The only state in this application is:
- **Mobile menu open/closed** → `useState` in `Header`
- **Contact form values** → `useState` or `useForm` in `ContactForm`
- **Contact form submission state** → `useState` (idle / loading / success / error)
- **Scroll position** → used for header blur effect and scroll progress bar
- **Intersection state** → for scroll-triggered animations via IntersectionObserver

If you feel the urge to add a state management library, stop and reconsider. This is a portfolio website. `useState` is always enough.

---

## Animation Architecture

Animations are a key part of this portfolio. They must be performant and respect user preferences.

### Rules:
- **Only animate `transform` and `opacity`** — these are GPU-accelerated and do not cause layout reflows
- **Never animate** `top`, `left`, `width`, `height`, `margin`, or `padding`
- All scroll-triggered animations use `IntersectionObserver` — never scroll event listeners
- All looping animations (fish, bubbles, seaweed) use **CSS `@keyframes`** — not JavaScript
- Looping animations **pause when their container is outside the viewport** (IntersectionObserver on the footer)
- All animations respect `prefers-reduced-motion`

### Animation components:
- `FadeInOnScroll` — wraps any element, fades + slides up when entering viewport
- `StaggerChildren` — applies staggered delays to child elements
- `ScrollProgress` — thin purple progress bar for case study reading progress

### CSS animation for fish (example):
```css
@keyframes swim-right {
  from { transform: translateX(-150px); }
  to   { transform: translateX(calc(100vw + 150px)); }
}

@keyframes float-up {
  0%   { transform: translateY(0);      opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: translateY(-200px); opacity: 0; }
}

@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50%       { transform: rotate(5deg);  }
}
```

---

## Asset Rules

### Images
- All images go in `public/assets/`
- Project mockups live in `public/assets/projects/[project-name]/`
- All images are served via Next.js `<Image>` component for automatic optimization
- Use WebP format where possible, JPG as fallback
- Every `<Image>` must have 