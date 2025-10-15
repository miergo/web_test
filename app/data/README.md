# Project Data Guide

## How to Add/Edit Projects

### Quick Example:

```typescript
{
  id: "my-awesome-project",              // Unique ID for URL
  title: "My Awesome Project",            // Display name
  category: "touchdesigner",              // touchdesigner | grasshopper | university | p5js
  thumbnail: "/my-project-thumb.jpg",     // Image in public/ folder
  description: "Short description",       // Shows on card
  detailedDescription: "Long description with details about the project...",
  technologies: ["TouchDesigner", "Python"], // Tech stack
  images: ["/img1.jpg", "/img2.jpg"],    // Optional: Gallery images
  videoUrl: "https://...",                // Optional: Demo video
  liveDemo: "https://...",                // Optional: Live demo link
  github: "https://github.com/...",       // Optional: GitHub repo
}
```

### Image Guidelines:

**Thumbnails:**
- Size: 600x400px or 16:9 aspect ratio
- Format: WebP or JPG
- File size: 200-500KB (optimized!)
- Place in: `public/` folder

**Gallery Images:**
- High quality screenshots
- Keep under 2MB each
- Place in: `public/` folder

**Videos:**
- Host on YouTube/Vimeo or self-host
- Provide direct video URL
- Include poster image (thumbnail)

### Categories:

- `touchdesigner` - Touch Designer projects
- `grasshopper` - Grasshopper/Rhino projects  
- `university` - Academic/university work
- `p5js` - P5.js creative coding projects

### Tips:

1. Use descriptive project IDs (they appear in URLs)
2. Keep descriptions concise on cards
3. Use detailed descriptions on project pages
4. Add all relevant technologies
5. Optimize all images before uploading!

