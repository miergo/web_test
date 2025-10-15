# Portfolio Architecture Overview

## 🏗️ How Everything Works Together

```
┌─────────────────────────────────────────────────────────────┐
│                         USER VISITS                          │
│                      http://localhost:5173                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      app/root.tsx                            │
│  • HTML structure (<html>, <head>, <body>)                  │
│  • Loads app.css (Tailwind styles)                          │
│  • Loads Google Fonts (Inter)                               │
│  • Wraps all pages                                           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      app/routes.ts                           │
│  Routes:                                                     │
│  • "/" → app/routes/home.tsx                                │
│  • "/project/:id" → app/routes/project.$id.tsx             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                ┌─────────┴─────────┐
                │                   │
                ▼                   ▼
    ┌───────────────────┐  ┌───────────────────────┐
    │  HOMEPAGE (/)     │  │ PROJECT DETAIL PAGE   │
    │  home.tsx         │  │ project.$id.tsx       │
    └────────┬──────────┘  └──────────┬────────────┘
             │                        │
             ▼                        ▼
    ┌─────────────────────────────────────────────┐
    │        app/data/projects.ts                 │
    │  • getProjectsByCategory()                  │
    │  • getProjectById()                         │
    │  • Project data array                       │
    └─────────────────────────────────────────────┘
```

## 📄 Page Flow

### Homepage Flow:
```
home.tsx
  │
  ├─ getProjectsByCategory("touchdesigner")
  ├─ getProjectsByCategory("grasshopper")
  ├─ getProjectsByCategory("university")
  └─ getProjectsByCategory("p5js")
      │
      ├─ Maps each project to <ProjectCard />
      │   └─ Links to /project/{id}
      │
      └─ Renders grid layout
```

### Project Detail Flow:
```
User clicks project card
  │
  ▼
/project/td-project-1
  │
  ▼
project.$id.tsx receives ID from URL
  │
  ▼
getProjectById("td-project-1")
  │
  ▼
Renders project details:
  • Hero image/video
  • Title, description
  • Technologies
  • Gallery
  • Links (demo, GitHub)
```

## 🎨 Component Hierarchy

```
root.tsx (Global wrapper)
├─ <html>, <head>, <body>
├─ Loads app.css
│
└─ Routes:
    │
    ├─ home.tsx (Homepage)
    │   ├─ Hero Section
    │   ├─ Touch Designer Section
    │   │   └─ ProjectCard × N
    │   ├─ Grasshopper Section
    │   │   └─ ProjectCard × N
    │   ├─ University Section
    │   │   └─ ProjectCard × N
    │   ├─ P5.js Section
    │   │   └─ ProjectCard × N
    │   └─ Contact Section
    │
    └─ project.$id.tsx (Detail Page)
        ├─ Back Button
        ├─ Hero Video/Image
        ├─ Project Info
        ├─ Gallery
        └─ Links
```

## 📊 Data Flow

```
projects.ts (Source of Truth)
    │
    ├─ Interface: Project
    │   ├─ id: string
    │   ├─ title: string
    │   ├─ category: "touchdesigner" | "grasshopper" | "university" | "p5js"
    │   ├─ thumbnail: string
    │   ├─ description: string
    │   ├─ detailedDescription: string
    │   ├─ technologies: string[]
    │   ├─ images?: string[]
    │   ├─ videoUrl?: string
    │   ├─ liveDemo?: string
    │   └─ github?: string
    │
    ├─ projects: Project[]
    │   └─ Array of all projects
    │
    └─ Helper Functions:
        ├─ getProjectsByCategory(category) → Project[]
        └─ getProjectById(id) → Project | undefined
```

## 🔄 User Journey

```
1. Land on homepage (/)
   └─ See hero section with your name
   
2. Scroll down
   └─ See 4 project sections with grids
   
3. Click a project card
   └─ Navigate to /project/{id}
   
4. View project details
   ├─ Watch video/see images
   ├─ Read description
   └─ Click live demo or GitHub
   
5. Click "Back to Portfolio"
   └─ Return to homepage
```

## 🎯 Key Files Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `app/data/projects.ts` | All project data | Adding/editing projects |
| `app/routes/home.tsx` | Homepage layout | Changing sections/order |
| `app/components/ProjectCard.tsx` | Project card design | Changing card style |
| `app/routes/project.$id.tsx` | Project page template | Changing detail layout |
| `app/routes.ts` | URL routing | Adding new pages |
| `app/root.tsx` | Global layout | Adding navbar/footer |
| `app/app.css` | Global styles | Changing colors/fonts |

## 🚀 Adding Content Workflow

```
1. Add image to public/
   └─ e.g., public/my-project.jpg

2. Edit app/data/projects.ts
   └─ Add new project object

3. Save file
   └─ Hot reload updates instantly

4. View on homepage
   └─ New card appears automatically

5. Click card
   └─ Detail page generated automatically
```

## 💾 State Management

**No complex state needed!**
- All data is static (from projects.ts)
- No database required
- No API calls needed
- Pure component rendering

When you add a project to `projects.ts`, both:
- Homepage grid updates (new card)
- Detail page route created (automatic)

## 🎨 Styling System

```
Tailwind CSS (Utility-first)
├─ Global: app.css
│   ├─ Tailwind import
│   ├─ Custom fonts
│   └─ Dark mode base
│
├─ Components: Inline classes
│   ├─ Responsive (md:, lg:)
│   ├─ Dark mode (dark:)
│   └─ Hover effects (hover:)
│
└─ No CSS modules needed
    (Everything is Tailwind)
```

## 🔍 URL Structure

```
/                           → Homepage
/project/td-project-1      → Touch Designer Project 1
/project/gh-project-1      → Grasshopper Project 1
/project/uni-project-1     → University Project 1
/project/p5-project-1      → P5.js Project 1
```

Each project ID in `projects.ts` becomes a unique URL!

---

**Simple, clean, and easy to maintain! 🎉**

