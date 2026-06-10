---
trigger: always_on
---

# Rule: Design System
## Toyo's Creative Space — Portfolio Website
-- 

## Token Files Are the Source of Truth

The project has one design token file. The agent must never modify them:

- `tokens/design-tokens.css` — all color values, font sizes, weights, line heights, font families, spacing, border radius, shadows, and animation durations.

The token file exports CSS custom properties (CSS variables) that are available globally across all pages and components.

---

## Mandatory: Use CSS Variables, Never Raw Values

The agent must never write hardcoded color, typography, spacing, or shadow values anywhere in this codebase.

**Wrong:**
```css
color: #1A1A1A;
font-size: 16px;
font-family: 'Urbanist', sans-serif;
background: #7D52F4;
border-radius: 12px;
padding: 24px;
```

**Correct:**
```css
color: var(--color-text-primary);
font-size: var(--font-size-body-medium);
font-family: var(--font-family-primary);
background: var(--color-primary);
border-radius: var(--radius-card);
padding: var(--spacing-m);
```

Before writing any style value, check the token file first. If a variable exists for what you need, use it. If it does not exist, ask before inventing a new value.

---

## Color Tokens

All colors are defined in `tokens/design-tokens.css`. Reference them as follows:

### Brand Colors
```css
var(--color-primary)           /* #7D52F4 — Purple, main brand color */
var(--color-primary-dark)     /* #5D4580 — Dark purple, hover states on Desktop */
var(--color-primary-dark)      /* #5D4580 — Dark purple, pressed states on Mobile */
var(--color-accent-pink)       /* #FB4BA3 — Pink accent */
var(--color-accent-pink-light) /* #FFB3C6 — Light pink */
var(--color-accent-pink-dark)  /* #D8397B — Dark pink */
```

### Neutral Colors
```css
var(--color-white)             /* #FFFFFF */
var(--color-surface)           /* #F9FAFB — Off-white, subtle backgrounds */
var(--color-surface-muted)     /* #F3F4F6 — Light gray backgrounds */
var(--color-border-light)      /* #E6E6E6 — Dividers, card borders */
var(--color-border-strong)     /* #D1D5DB — Strong borders */
var(--color-neutral-400)       /* #9CA3AF — Placeholder text */
var(--color-neutral-500)       /* #7B7B7B — Neutral gray */
var(--color-neutral-600)       /* #6B6B6B — Secondary text */
var(--color-neutral-800)       /* #2D2D2D — Dark gray */
var(--color-black)             /* #1A1A1A — Primary text */
```

### Text Colors
```css
var(--color-text-primary)      /* #1A1A1A — All body text */
var(--color-text-secondary)    /* #6B6B6B — Supporting text, captions */
var(--color-text-tertiary)     /* #9CA3AF — Disabled, placeholder */
var(--color-text-inverse)      /* #FFFFFF — Text on dark backgrounds */
var(--color-text-on-primary)   /* #FFFFFF — Text on purple backgrounds */
```

### Semantic Colors
```css
var(--color-success)           /* #10B981 — Form success, checkmarks */
var(--color-success-light)     /* #6EE7B7 — Success backgrounds */
var(--color-error)             /* #EF4444 — Form errors, alerts */
var(--color-error-light)       /* #FCA5A5 — Error backgrounds */
var(--color-warning)           /* #F59E0B — Warnings */
var(--color-warning-light)     /* #FCD34D — Warning backgrounds */
var(--color-info)              /* #3B82F6 — Informational */
var(--color-info-light)        /* #93C5FD — Info backgrounds */
```

### Underwater/Footer Colors
```css
var(--color-water-light)       /* #A3D5FF — Top water */
var(--color-water-medium)      /* #6BB6FF — Mid water */
var(--color-water-deep)        /* #4A90E2 — Deep water */
var(--color-sand)              /* #E8D4B0 — Ocean floor */
var(--color-seaweed-light)     /* #45A29E — Seaweed */
var(--color-seaweed-dark)      /* #2D5F5D — Dark seaweed */
var(--color-coral-pink)        /* #FFB3C6 — Coral */
var(--color-coral-orange)      /* #FF8C42 — Coral */
```

### Rules for Color Usage
- **Never** use `var(--color-primary-light)` or `var(--color-accent-pink)` for body text — contrast is too low.
- **Always** use `var(--color-text-primary)` or `var(--color-black)` for readable body text.
- **Backgrounds only:** Light purple and pink variants are for backgrounds, hover states, and decorative use.
- **Purple on white** passes WCAG AA (4.73:1) — safe for buttons and interactive elements.

---

## Typography Tokens

Two font families are used across the entire site. No other fonts may be introduced.

### Font Families
```css
var(--font-family-primary)     /* 'Urbanist', sans-serif — All body and UI text */
var(--font-family-accent)      /* 'Emilys Candy', cursive — Headlines and brand moments only */
```

### Font Size Scale (Material Design 3)
```css
var(--font-size-display)       /* 3.563rem / 60px — Hero headlines */
var(--font-size-headline-lg)   /* 3rem / 48px — Page titles */
var(--font-size-headline-md)   /* 2rem / 32px — Section headings */
var(--font-size-headline-sm)   /* 1.75rem / 28px — Subsection headings */
var(--font-size-title-lg)      /* 1.375rem / 22px — Emphasized titles */
var(--font-size-title-md)      /* 1.125rem / 18px — Subtitles */
var(--font-size-body-lg)       /* 1.125rem / 18px — Large body text */
var(--font-size-body-md)       /* 1rem / 16px — Standard body text */
var(--font-size-body-sm)       /* 0.875rem / 14px — Captions, labels */
var(--font-size-label)         /* 0.75rem / 12px — Timestamps, tiny labels */
```

### Font Weights
```css
var(--font-weight-regular)     /* 400 — Body text */
var(--font-weight-medium)      /* 500 — Labels, buttons, nav links */
var(--font-weight-semibold)    /* 600 — Subheadings */
var(--font-weight-bold)        /* 700 — Project titles, strong headings */
```

### Line Heights
```css
var(--line-height-tight)       /* 1.2 — Display and large headlines */
var(--line-height-snug)        /* 1.4 — Subheadings */
var(--line-height-normal)      /* 1.6 — Body text */
var(--line-height-relaxed)     /* 1.8 — Long-form paragraphs */
```

### Typography Rules

**Emily's Candy — Use ONLY for:**
- Hero display headline ( "Omotoyosi Bamigboye")
- Section headings ("About", "Skills", "Overview")
- Page titles ("Hustle Platform", "Download Resume")
- Brand-moment callouts

**Emily's Candy — NEVER use for:**
- Body paragraphs
- Button labels
- Navigation links
- Captions or meta text
- Any text smaller than 24px

**Urbanist — Use for:**
- All body text and paragraphs
- Navigation links
- Button labels
- Form inputs and labels
- Tags, badges, and metadata
- Everything not listed under Emily's Candy

---

## Spacing Scale

Use the spacing tokens for all margin, padding, and gap values. Do not use arbitrary pixel values.

```css
var(--spacing-xxs)   /* 4px  — Tight gaps between inline elements */
var(--spacing-xs)    /* 8px  — Small internal padding */
var(--spacing-s)     /* 12px — Compact spacing */
var(--spacing-m)     /* 16px — Standard spacing (most common) */
var(--spacing-l)     /* 24px — Card padding, comfortable gaps */
var(--spacing-xl)    /* 32px — Section sub-spacing */
var(--spacing-2xl)   /* 48px — Section top/bottom padding */
var(--spacing-3xl)   /* 64px — Major section gaps */
var(--spacing-4xl)   /* 96px — Large section separation */
```

**Common uses:**
- Button padding: `var(--spacing-s) var(--spacing-l)` (12px 24px)
- Card inner padding: `var(--spacing-l)` or `var(--spacing-xl)` (24px or 32px)
- Section margin: `var(--spacing-3xl)` or `var(--spacing-4xl)` (64px or 96px)
- Page horizontal padding: `var(--spacing-2xl)` desktop, `var(--spacing-m)` mobile

---

## Border Radius

Use only these radius tokens. No arbitrary radius values.

```css
var(--radius-sm)       /* 8px  — Buttons, inputs, small elements */
var(--radius-md)       /* 12px — General cards, containers */
var(--radius-lg)       /* 16px — Project cards, large panels */
var(--radius-pill)     /* 20px — Skill badges, tag pills */
var(--radius-full)     /* 9999px — Fully rounded (social icons) */
```

**Rule by element:**
- Buttons: `var(--radius-sm)`
- Input fields: `var(--radius-sm)`
- Skill badges: `var(--radius-pill)`
- Project cards: `var(--radius-lg)`
- Tool icons: `var(--radius-md)`
- Social icons: `var(--radius-full)`
- Photo frames (about page): `var(--radius-lg)`

---

## Shadow Tokens

```css
var(--shadow-sm)     /* 0 2px 4px rgba(0,0,0,0.06) — Subtle lift */
var(--shadow-md)     /* 0 4px 8px rgba(0,0,0,0.08) — Cards default */
var(--shadow-lg)     /* 0 8px 24px rgba(0,0,0,0.12) — Cards on hover */
var(--shadow-purple) /* 0 4px 12px rgba(125,82,244,0.3) — Primary button hover */
```

---

## Animation Tokens

```css
var(--duration-fast)    /* 0.2s — Button hover*/
var(--duration-normal)  /* 0.3s — Card hover, menu transitions */
var(--duration-slow)    /* 0.4s — Page transitions, modal open */
var(--ease-default)     /* ease — Standard easing */
var(--ease-out)         /* ease-out — Elements entering the screen */
var(--ease-in-out)      /* ease-in-out — Looping animations */
```

**Only animate GPU-accelerated properties:**
```css
/* Allowed */
transform: translateY(-4px);
opacity: 0.8;

/* Not allowed — causes repaints */
top: 10px;
height: 200px;
margin-top: 10px;
```

---

## Styling Method

- All component styles use CSS Modules (`.module.css` files).
- No inline `style={{}}` props except for truly dynamic values (e.g., fish animation delay driven by index, progress bar width driven by a number).
- No Tailwind. No styled-components. CSS Modules only.
- No hardcoded hex values, pixel sizes, or font names in any `.module.css` file — use tokens always.

---

## Mobile-First

Toyo's portfolio visitors arrive primarily from mobile (Instagram, TikTok, LinkedIn). Every component must be built mobile-first:

- Default styles target mobile (393px and up).
- Use `@media (min-width: 768px)` to add tablet styles.
- Use `@media (min-width: 1024px)` to add desktop styles.
- Touch targets must be a minimum of **44px tall**.
- The homepage and about page must be fully functional on a **393px viewport**.

**Mobile layout rules:**
- Single column layouts by default
- Full-width cards (minus page padding)
- Hamburger navigation (no visible links)
- Reduced font sizes (see typography scale)
- Simplified animations (no parallax, no hover)
- Underwater footer: reduced height, fewer elements

---

## Component-Specific Rules

### Navigation
- Fixed position on all pages
- Desktop height: 80px | Mobile height: 64px
- Background transitions from transparent to white + blur after 10px scroll
- "Book a Call" button uses `var(--color-primary)` background always
- Active nav link: purple underline, `var(--color-primary)`
- Mobile: hamburger triggers full-screen overlay menu

### Project Cards
- Background: `var(--color-white)`
- Border: `1px solid var(--color-border-light)`
- Border-radius: `var(--radius-lg)`
- Padding: `var(--spacing-xl)` desktop, `var(--spacing-m)` mobile
- Hover (desktop only): `translateY(-4px)`, shadow increases to `var(--shadow-lg)`
- No hover effects on mobile (touch devices)
- Checkmark icons: `var(--color-primary)` or `var(--color-success)`

### Buttons
- Primary: background `var(--color-primary)`, text `var(--color-text-inverse)`
- Secondary: transparent background, `2px solid var(--color-primary)`, text `var(--color-primary)`
- Hover primary: background `var(--color-primary-dark)`, `translateY(-2px)`
- Hover secondary: background `var(--color-primary)`, text `var(--color-text-inverse)`
- Active: `scale(0.96)`
- Minimum height: 48px (mobile), 48px (desktop)
- Border-radius: `var(--radius-sm)`

### Skill Badges (About Page)
- Background: `var(--color-primary)`
- Text: `var(--color-text-inverse)`
- Padding: `10px 20px`
- Border-radius: `var(--radius-pill)`
- Font: `var(--font-family-primary)`, `var(--font-weight-medium)`
- Font-size: `var(--font-size-body-sm)`

### Tool Icon Cards (About Page)
- Width/Height: 120px × 120px
- Background: `var(--color-white)`
- Border: `2px solid var(--color-border-light)`
- Border-radius: `var(--radius-md)`
- Hover: border changes to `var(--color-primary)`, `translateY(-4px)`

### Form Inputs
- Height: 56px
- Border: `1px sol