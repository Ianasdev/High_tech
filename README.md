# HighTech Landing Page

Next.js 14 + TypeScript + Tailwind CSS landing page for HighTech IT Company.

## 🚀 Quick Start

```bash
# 1. Create the project (if starting fresh)
npx create-next-app@latest hightech-landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd hightech-landing

# 2. Install additional dependency
npm install lucide-react

# 3. Replace all files with the provided source files

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 File Structure

```
hightech-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          ← All custom CSS + fonts
│   │   ├── layout.tsx           ← Root layout + metadata
│   │   └── page.tsx             ← Main page (assembles all sections)
│   └── components/
│       ├── Navbar.tsx           ← Sticky top nav with mobile menu
│       ├── Hero.tsx             ← Hero section
│       ├── Stats.tsx            ← Stats (Projects, Clients, etc.)
│       ├── About.tsx            ← About Us section
│       ├── Vision.tsx           ← Vision / Mission / Values
│       ├── Services.tsx         ← Service cards
│       ├── SuccessStories.tsx   ← Success stories
│       ├── Partners.tsx         ← Partner logos
│       ├── CTA.tsx              ← Call to action
│       └── Footer.tsx           ← Footer
├── public/
│   └── images/                  ← Put your images here!
│       ├── logo.png
│       ├── odoo-logo.png
│       └── partners/
│           ├── merve.png
│           ├── shatnnan.png
│           ├── dawli.png
│           └── aldekhel.png
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🖼️ Adding Your Images

1. Create folder: `public/images/` and `public/images/partners/`
2. Add your logo as `public/images/logo.png`
3. Add partner logos to `public/images/partners/`
4. In `Navbar.tsx` — uncomment the `<Image>` tag and remove the placeholder div
5. In `Partners.tsx` — replace `<PartnerPlaceholder>` with `<Image>` tags
6. In `Hero.tsx` — replace the odoo text block with `<Image src="/images/odoo-logo.png" ...>`

---

## 🎨 Customization

### Colors
Edit CSS variables in `globals.css`:
```css
:root {
  --gold: #F5A623;      /* Primary brand color */
  --dark: #0A0A0A;      /* Dark backgrounds */
  --text: #1A1A1A;      /* Body text */
  --muted: #6B7280;     /* Muted text */
  --border: #E5E7EB;    /* Borders */
}
```

### Content
- Stats → `src/components/Stats.tsx`
- Services → `src/components/Services.tsx`
- Success stories → `src/components/SuccessStories.tsx`
- Contact info → `src/components/Footer.tsx` and `CTA.tsx`

---

## ⚡ Performance Features

- Next.js App Router (server components by default)
- `'use client'` only where needed (interactivity/animations)
- `IntersectionObserver` for scroll-triggered animations (no heavy libraries)
- CSS-only animations via custom keyframes
- Next.js `<Image>` for automatic WebP/AVIF conversion
- Google Fonts loaded via CSS `@import` with `display=swap`
- `compress: true` in `next.config.js`

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```
