# Arbor - Project Structure

This Next.js 16 application follows 2025 best practices for organization, design systems, and scalability.

## 📁 Directory Structure

```
arbor/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with font configuration
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles & design tokens
│   ├── components/             # Reusable React components
│   │   └── icons/              # SVG icon components
│   ├── lib/                    # Utility functions & helpers
│   │   ├── utils.ts            # Common utilities (cn, etc.)
│   │   └── constants.ts        # Design system constants
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
└── [config files]
```

## 🎨 Design System

### Colors
Defined in `src/app/globals.css` using Tailwind v4's `@theme` block:

- **Brand Green**: `#2E6F40` → Use `bg-brand-green`, `text-brand-green`, `border-brand-green`
- **Background**: `#FEFEFE` → Use `bg-background`
- **Black**: `#0A0A0A` → Use `bg-black`, `text-black`

### Typography
Configured using `next/font` in `src/app/layout.tsx`:

- **Main Font**: Geist → Use `font-sans`
- **Monospace Font**: IBM Plex Mono → Use `font-mono`

### Border Radius
Default style is `rounded-full` (9999px). Available utilities:
- `rounded-full` - Fully rounded (9999px)
- `rounded-none` - No rounding (0px)

## 🧩 Component Guidelines

### Icons
Icons are located in `src/components/icons/` as proper React components:

```tsx
import { UpArrow, UpArrowRight } from "@/components/icons";

<UpArrow className="w-6 h-6 text-brand-green" />
```

Each icon component:
- Accepts standard SVG props via `SVGProps<SVGSVGElement>`
- Uses `currentColor` for stroke/fill (easily themeable)
- Can be sized using Tailwind classes (`w-*`, `h-*`)

### Creating New Components
Place feature-specific components in organized subdirectories:
```
src/components/
├── icons/
├── ui/              # Generic UI components (buttons, cards, etc.)
├── layout/          # Layout components (header, footer, nav)
└── features/        # Feature-specific components
```

## 🛠️ Utilities

### `cn()` Function
Located in `src/lib/utils.ts` for conditional class name combining:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class", "another-class")} />
```

### Constants
Design tokens are available in `src/lib/constants.ts` for JavaScript/TypeScript usage:

```tsx
import { COLORS, FONTS, BORDER_RADIUS } from "@/lib/constants";
```

## 🚀 Best Practices Applied

1. **App Router**: Using Next.js 16 App Router for modern React patterns
2. **Tailwind v4**: Leveraging `@theme` block for design tokens (no separate config file needed)
3. **Font Optimization**: Using `next/font` for automatic font optimization
4. **Component Organization**: Icons and components outside of `app/` directory
5. **Type Safety**: TypeScript throughout with proper typing for components
6. **Feature-based Architecture**: Ready for scaling with modular structure

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Next Steps

To extend this project:

1. **Add UI Components**: Create reusable components in `src/components/ui/`
2. **Add Features**: Implement feature modules in `src/components/features/`
3. **Add Types**: Define shared types in `src/types/`
4. **Add API Routes**: Create API endpoints in `src/app/api/`
5. **Add Middleware**: Create middleware in `src/middleware.ts` if needed

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
