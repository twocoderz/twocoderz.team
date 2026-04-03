# TwoCoderz Web - Architecture Guideline

## 📋 Current Structure

✅ **Completed:**

- HomePage with Hero, Services, Testimonials, Clients, Projects sections
- Header with responsive navigation and hide-on-scroll
- Footer with newsletter signup
- Button component with Framer Motion animations
- Container, Section UI components

## 🏗️ New Architecture (Just Added)

### 📁 File Structure

```
src/
├── pages/
│   ├── WorkPage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   └── ContactPage.tsx
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── PortfolioCard.tsx
│   │   │   └── ServiceCard.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── PortfolioGridSection.tsx
│   │       └── ServiceGridSection.tsx
│   └── data/
│       ├── portfolio.ts
│       ├── services.ts
│       ├── team.ts
│       └── testimonials.ts
```

## 🎯 TODO - Next Steps

### Pages to Finish

- [ ] **WorkPage** - Add filters, search, pagination
- [ ] **AboutPage** - Add team section, mission/vision, values, stats
- [ ] **ServicesPage** - Finish with detailed service content, process section
- [ ] **ContactPage** - Build contact form, add map, contact info

### Components to Create

- [ ] **NewsletterForm** - Reusable newsletter subscription form
- [ ] **ContactForm** - Reusable contact form with validation
- [ ] **TeamCard** - Card for team members
- [ ] **TestimonialCarousel** - Extract from HomePage

### Sections to Create

- [ ] **TeamSection** - Display team members
- [ ] **ProcessSection** - Show workflow/process
- [ ] **StatsSection** - Show metrics/achievements
- [ ] **CTASection** - Call-to-action section

### Data to Enhance

- [ ] Expand `portfolio.ts` with more projects
- [ ] Add more services to `services.ts`
- [ ] Populate `team.ts` with real team data
- [ ] Link testimonials to projects

## 📖 How to Use

### Adding a New Page

1. Create page file in `src/pages/PageName.tsx`
2. Use existing sections and components
3. Add route to `App.tsx`

### Adding a New Reusable Section

1. Create in `src/shared/components/sections/SectionName.tsx`
2. Import data from `src/shared/data/`
3. Use existing UI components

### Adding a New Component

1. Create in `src/shared/components/ui/`
2. Export TypeScript interfaces
3. Keep props minimal and reusable

### Updating Navigation

- Edit `navItems` in `src/shared/components/layout/Header.tsx`
- Edit CTA buttons as needed

## 🎨 Component Patterns

All components follow these patterns:

- Export TypeScript interfaces for props
- Use Tailwind classes consistently
- Support `className` prop for customization
- Keep components simple and reusable

## 🚀 Quick Start

```bash
# Start dev server
pnpm dev

# Build
pnpm build

# Preview
pnpm preview
```

---

**Remember:** Keep components simple, data centralized, and pages composable! 🎯
