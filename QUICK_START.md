# ⚡ Quick Start Checklist

## ✅ Setup Complete - Ready to Customize!

### 🎯 Immediate Next Steps (15 minutes)

#### 1. **Update Your Name & Info**
```typescript
// File: app/routes/home.tsx

Line 23: "Your Name"           → Replace with your actual name
Line 24: "Creative Developer"  → Replace with your title
Line 100: your.email@...       → Replace with your email
Line 106: yourusername         → Replace with your GitHub username
```

#### 2. **Add ONE Test Project**
```typescript
// File: app/data/projects.ts

1. Add an image to public/ folder (e.g., public/test-project.jpg)
2. Edit the first project in the array:
   - Change the title
   - Update the description
   - Change thumbnail path to "/test-project.jpg"
3. Save and check http://localhost:5173
```

#### 3. **Preview Your Site**
```bash
# Server should be running already
# Visit: http://localhost:5173

# If not running:
npm run dev
```

---

## 📝 Daily Workflow

### Adding a New Project:

**Step 1:** Add image to `public/`
```
public/
  └─ my-new-project-thumb.jpg
```

**Step 2:** Edit `app/data/projects.ts`
```typescript
{
  id: "my-new-project",
  title: "My Project Title",
  category: "touchdesigner", // or grasshopper, university, p5js
  thumbnail: "/my-new-project-thumb.jpg",
  description: "Brief description for the card",
  detailedDescription: "Full description for the detail page",
  technologies: ["TouchDesigner", "Python"],
}
```

**Step 3:** Save → Auto-refresh → Done! ✨

---

## 🎨 Customization Checklist

### Homepage (`app/routes/home.tsx`)
- [ ] Update your name (line 23)
- [ ] Update your title/role (line 24-25)
- [ ] Update bio text (line 27)
- [ ] Update section descriptions (lines 37, 50, 63, 76)
- [ ] Update email link (line 100)
- [ ] Update GitHub link (line 106)

### Projects (`app/data/projects.ts`)
- [ ] Remove sample projects
- [ ] Add your real projects (at least 2 per category)
- [ ] Add real thumbnails
- [ ] Add detailed descriptions
- [ ] Add live demo links (if applicable)
- [ ] Add GitHub links (if applicable)

### Images (`public/`)
- [ ] Add project thumbnails (600x400px, WebP/JPG, ~200-500KB)
- [ ] Add project detail images (optional)
- [ ] Optimize all images
- [ ] Remove placeholder-thumbnail.jpg

### Styling (Optional)
- [ ] Customize colors in `app/app.css`
- [ ] Update fonts in `app/root.tsx` (currently Inter)
- [ ] Adjust spacing/layout if needed

---

## 🚀 Deployment Checklist

### Before Deploying:
- [ ] Replace ALL sample data with real projects
- [ ] Add real images (no placeholders)
- [ ] Update personal info (name, email, GitHub)
- [ ] Test all project links
- [ ] Test on mobile (responsive)
- [ ] Test dark mode
- [ ] Run `npm run build` (check for errors)

### Deploy to GitHub Pages:
```bash
# Build and deploy in one command
npm run deploy

# Your site will be live at:
# https://miergo.github.io/web_test
```

---

## 📂 File Priority Guide

**Edit Most Often:**
1. `app/data/projects.ts` - Your project data
2. `public/` - Your images

**Edit Once:**
3. `app/routes/home.tsx` - Personal info
4. `app/app.css` - Colors/theme (optional)

**Rarely Edit:**
5. `app/components/ProjectCard.tsx` - Card design
6. `app/routes/project.$id.tsx` - Detail page layout
7. `app/root.tsx` - Global layout
8. `app/routes.ts` - Routing

---

## 💡 Pro Tips

### Images:
- Use WebP format (smaller file size)
- Compress before uploading (use tinypng.com)
- Keep thumbnails under 500KB
- Use 16:9 aspect ratio for consistency

### Content:
- Write action-oriented descriptions
- Show, don't just tell (use images/videos)
- Highlight what you learned
- Include technologies used

### Performance:
- Optimize all images
- Keep homepage fast (light thumbnails)
- Put heavy content on detail pages
- Test on mobile data

### SEO:
- Update meta descriptions
- Use descriptive project titles
- Add alt text to images
- Include relevant keywords

---

## 🐛 Common Issues

**Images not showing?**
- Make sure they're in `public/` folder
- Use paths starting with `/` like `"/image.jpg"`
- Check file names match exactly (case-sensitive)

**Type errors?**
- Run `npm run build` to generate types
- Or remove `type { Route }` imports

**Site not updating?**
- Save your files
- Check terminal for errors
- Hard refresh browser (Ctrl+Shift+R)

**Build failing?**
- Check for missing images
- Verify all project data is valid
- Check terminal error messages

---

## 📚 Documentation Files

- **SETUP_COMPLETE.md** - Overview of what's been built
- **PORTFOLIO_README.md** - Detailed customization guide
- **ARCHITECTURE.md** - How everything works
- **app/data/README.md** - Project data guide
- **QUICK_START.md** (this file) - Fast reference

---

## ⏱️ Time Estimates

- **Add 1 project:** 5 minutes
- **Update personal info:** 5 minutes
- **Customize colors:** 10 minutes
- **Add 10 projects:** 30-60 minutes
- **Full customization:** 2-3 hours

---

## 🎯 Minimum Viable Portfolio

To get a working portfolio online:
1. Update your name ✅
2. Add 4 real projects (1 per category) ✅
3. Add 4 project images ✅
4. Update contact info ✅
5. Deploy! ✅

**Total time: ~30 minutes**

---

## 📞 Need Help?

Check these files in order:
1. This file (QUICK_START.md) - Quick answers
2. PORTFOLIO_README.md - Detailed guide
3. app/data/README.md - Project data help
4. ARCHITECTURE.md - How it works

---

**You've got this! 🚀**

Start with Step 1 above and work your way through.
Save often, preview in browser, and have fun! 🎨

