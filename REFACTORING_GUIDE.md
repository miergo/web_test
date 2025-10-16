# Refactoring Guide

This document explains the refactored codebase structure and how to work with it.

## Overview

The codebase has been refactored to improve **readability**, **modularity**, and **maintainability**. The main improvements include:

1. **Reusable UI Components** - Created a component library for consistent UI elements
2. **Utility Functions** - Extracted common logic into utility modules
3. **Constants & Configuration** - Centralized configuration and repeated strings
4. **Type Organization** - Better TypeScript type definitions
5. **Data Organization** - Separated project data by category
6. **Cleaner Route Components** - Simplified route files using extracted components

---

## Project Structure

```
app/
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Badge.tsx            # Badge component with variants
│   │   ├── Button.tsx           # Button component (button/link)
│   │   ├── Icon.tsx             # SVG icon component
│   │   ├── MediaDisplay.tsx     # Video/image display component
│   │   ├── Section.tsx          # Section layout components
│   │   └── index.ts             # UI exports
│   ├── BackButton.tsx           # Back navigation button
│   ├── ContactSection.tsx       # Contact section component
│   ├── HeroSection.tsx          # Hero section component
│   ├── NotFound.tsx             # 404 component
│   ├── PortfolioSection.tsx     # Portfolio category section
│   ├── ProjectCard.tsx          # Project card component
│   ├── ProjectGallery.tsx       # Project image gallery
│   ├── ProjectHeader.tsx        # Project detail header
│   ├── ProjectLinks.tsx         # Project external links
│   ├── ProjectTechnologies.tsx  # Technology badges
│   └── index.ts                 # Component exports
├── constants/
│   ├── categories.ts            # Category definitions & metadata
│   └── contact.ts               # Contact information
├── data/
│   └── projects/                # Project data by category
│       ├── touchdesigner.ts     # Touch Designer projects
│       ├── grasshopper.ts       # Grasshopper projects
│       ├── university.ts        # University projects
│       ├── p5js.ts              # P5.js projects
│       └── index.ts             # Combined exports & helpers
├── types/
│   ├── project.ts               # Project type definition
│   └── index.ts                 # Type exports
├── utils/
│   ├── assets.ts                # Asset path helpers
│   └── media.ts                 # Media type detection
└── routes/
    ├── home.tsx                 # Home page (refactored)
    └── project.$id.tsx          # Project detail (refactored)
```

---

## Key Components

### UI Components (`app/components/ui/`)

#### Badge
Displays category labels, tags, or status indicators with different variants.

```tsx
import { Badge } from "~/components/ui/Badge";

<Badge variant="primary" size="md">TouchDesigner</Badge>
<Badge variant="secondary">Technology</Badge>
<Badge variant="category" size="sm">CATEGORY</Badge>
```

**Props:**
- `variant`: "primary" | "secondary" | "category"
- `size`: "sm" | "md" | "lg"

#### Button
Versatile button component that can render as `<button>` or `<a>`.

```tsx
import { Button } from "~/components/ui/Button";

// As button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// As link
<Button as="a" href="/somewhere" variant="secondary">
  Go Somewhere
</Button>
```

**Props:**
- `as`: "button" | "a"
- `variant`: "primary" | "secondary" | "ghost"
- `size`: "sm" | "md" | "lg"

#### MediaDisplay
Automatically renders video or image based on file extension.

```tsx
import { MediaDisplay } from "~/components/ui/MediaDisplay";

<MediaDisplay 
  src={project.thumbnail}
  alt={project.title}
  autoPlay
  loop
  muted
/>
```

**Props:**
- `src`: string - Media URL
- `alt`: string - Alt text
- `autoPlay`, `loop`, `muted`, `controls`: boolean - Video props
- `aspectRatio`: "video" | "square" | "wide" | "portrait"

#### Section Components
Layout components for consistent page sections.

```tsx
import { Section, SectionContainer, SectionHeader } from "~/components/ui/Section";

<Section variant="alternate">
  <SectionContainer>
    <SectionHeader 
      title="My Section" 
      description="Section description"
    />
    {/* Content */}
  </SectionContainer>
</Section>
```

#### Icon
SVG icons with consistent sizing.

```tsx
import { Icon } from "~/components/ui/Icon";

<Icon name="arrow-left" size="md" />
<Icon name="github" />
<Icon name="external-link" />
```

---

### Page Components

#### HeroSection
Displays the hero section with name and tagline (reads from `constants/contact.ts`).

```tsx
import { HeroSection } from "~/components/HeroSection";

<HeroSection />
```

#### ContactSection
Contact section with email and social links (reads from `constants/contact.ts`).

```tsx
import { ContactSection } from "~/components/ContactSection";

<ContactSection />
```

#### PortfolioSection
Reusable section for displaying project categories.

```tsx
import { PortfolioSection } from "~/components/PortfolioSection";

<PortfolioSection
  id="touchdesigner"
  title="Touch Designer"
  description="Real-time interactive installations"
  variant="default"
>
  {projects.map(project => <ProjectCard key={project.id} project={project} />)}
</PortfolioSection>
```

---

## Utilities

### Media Utilities (`app/utils/media.ts`)

```tsx
import { isVideoFile, isImageFile, getMediaType } from "~/utils/media";

const isVideo = isVideoFile("video.mp4"); // true
const type = getMediaType("image.jpg"); // "image"
```

**Functions:**
- `isVideoFile(path: string): boolean` - Check if file is a video
- `isImageFile(path: string): boolean` - Check if file is an image
- `getMediaType(path: string)` - Returns "video" | "image" | "unknown"
- `shouldUsePoster(videoPath, posterPath)` - Determine if poster should be used

### Asset Utilities (`app/utils/assets.ts`)

```tsx
import { getAssetPath } from "~/utils/assets";

const path = getAssetPath("videos/demo.mp4");
// Returns: "/web_test/videos/demo.mp4" (respects BASE_URL)
```

---

## Constants

### Categories (`app/constants/categories.ts`)

Centralized category definitions with metadata.

```tsx
import { CATEGORIES, CATEGORY_METADATA, ORDERED_CATEGORIES } from "~/constants/categories";

// Use CATEGORIES for type-safe category strings
const category = CATEGORIES.TOUCHDESIGNER; // "touchdesigner"

// Get metadata for a category
const metadata = CATEGORY_METADATA[CATEGORIES.TOUCHDESIGNER];
// { id: "touchdesigner", title: "Touch Designer", description: "..." }

// Loop through categories in order
ORDERED_CATEGORIES.forEach(category => {
  // ...
});
```

### Contact (`app/constants/contact.ts`)

Centralized contact information.

```tsx
import { CONTACT } from "~/constants/contact";

console.log(CONTACT.name);    // "Arindam Katoch"
console.log(CONTACT.email);   // "your.email@example.com"
console.log(CONTACT.github);  // "https://github.com/yourusername"
```

**To update contact info:** Edit `app/constants/contact.ts`

---

## Data Organization

### Project Data (`app/data/projects/`)

Projects are now organized by category in separate files:
- `touchdesigner.ts`
- `grasshopper.ts`
- `university.ts`
- `p5js.ts`

All are combined and exported from `index.ts`.

#### Adding a New Project

1. Open the appropriate category file (e.g., `app/data/projects/touchdesigner.ts`)
2. Add your project to the array:

```tsx
{
  id: "td-project-3",
  title: "My New Project",
  category: CATEGORIES.TOUCHDESIGNER,
  thumbnail: getAssetPath("videos/my-video.mp4"),
  description: "Short description",
  detailedDescription: "Detailed description...",
  technologies: ["TouchDesigner", "GLSL", "Audio Reactive"],
  images: [getAssetPath("images/img1.jpg")],
  videoUrl: getAssetPath("videos/demo.mp4"),
  liveDemo: "https://...",
  github: "https://github.com/...",
  collaborators: ["Name 1", "Name 2"],
}
```

3. The project will automatically appear on the home page!

#### Helper Functions

```tsx
import { 
  getProjectsByCategory, 
  getProjectById, 
  getAllProjects 
} from "~/data/projects";

// Get projects by category
const tdProjects = getProjectsByCategory(CATEGORIES.TOUCHDESIGNER);

// Get single project
const project = getProjectById("td-project-1");

// Get all projects
const allProjects = getAllProjects();
```

---

## Types

### Project Type (`app/types/project.ts`)

```tsx
import type { Project } from "~/types";

interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  images?: string[];
  videoUrl?: string;
  liveDemo?: string;
  github?: string;
  collaborators?: string[];
}
```

---

## Route Components

### Home Page (`app/routes/home.tsx`)

**Before:** 120 lines with repetitive section code
**After:** 45 lines using reusable components

The home page now:
1. Uses `HeroSection` component
2. Dynamically generates portfolio sections from `ORDERED_CATEGORIES`
3. Uses `PortfolioSection` for each category
4. Uses `ContactSection` at the bottom

### Project Detail (`app/routes/project.$id.tsx`)

**Before:** 204 lines with inline logic and styling
**After:** 75 lines using extracted components

The project detail page now:
1. Uses `NotFound` component for missing projects
2. Uses `BackButton` for navigation
3. Uses `MediaDisplay` for hero media
4. Uses `ProjectHeader`, `ProjectTechnologies`, `ProjectGallery`, `ProjectLinks`

---

## Benefits of This Refactoring

### ✅ Improved Readability
- Components have clear, single responsibilities
- Route files are much shorter and easier to understand
- Consistent naming conventions

### ✅ Better Modularity
- Components can be reused across the app
- Easy to modify UI elements in one place
- Data is organized logically

### ✅ Easier Maintenance
- Adding new projects is straightforward
- Updating contact info is centralized
- Categories are easy to manage

### ✅ Type Safety
- Better TypeScript types throughout
- Import paths use `~/` for clarity
- Type exports are organized

### ✅ Scalability
- Easy to add new categories
- Simple to create new page components
- Component library can grow

---

## Common Tasks

### Adding a New Category

1. Update `app/constants/categories.ts`:
   - Add to `CATEGORIES` object
   - Add metadata to `CATEGORY_METADATA`
   - Add to `ORDERED_CATEGORIES` array

2. Create `app/data/projects/[category].ts` with projects

3. Import and export in `app/data/projects/index.ts`

### Updating Contact Information

Edit `app/constants/contact.ts` - changes will reflect throughout the site.

### Adding a New UI Component

1. Create component in `app/components/ui/[ComponentName].tsx`
2. Export from `app/components/ui/index.ts`
3. Use throughout the app!

### Modifying Styles

- UI component variants are in each component file
- Modify the `variantClasses` or `sizeClasses` objects

---

## Import Conventions

Use the `~/` alias for cleaner imports:

```tsx
// ✅ Good
import { Button } from "~/components/ui/Button";
import { getProjectById } from "~/data/projects";
import type { Project } from "~/types";

// ❌ Avoid
import { Button } from "../../../components/ui/Button";
import { getProjectById } from "../../data/projects";
```

---

## Best Practices

1. **Always use type-safe category constants** from `~/constants/categories`
2. **Use `getAssetPath()`** for all asset references
3. **Use `MediaDisplay`** instead of manual video/image checks
4. **Extract repeated UI patterns** into components
5. **Keep route files focused** on data fetching and layout
6. **Document new components** with JSDoc comments

---

## Next Steps

Consider these potential improvements:
- Add more UI components (Modal, Tooltip, etc.)
- Add animation utilities
- Create custom hooks for common logic
- Add tests for components
- Create Storybook documentation
- Add loading states
- Implement error boundaries

---

## Questions?

Review this guide when:
- Adding new projects
- Creating new components
- Understanding the project structure
- Making design changes

