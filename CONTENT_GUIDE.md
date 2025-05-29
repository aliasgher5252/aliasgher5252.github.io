# Portfolio Content Management Guide

## Quick Start - Adding Your Content

### 1. Personal Information
Edit `src/data/personal.json`:
- Replace "Alex Johnson" with your name
- Update title, email, phone, location
- Change bio to describe yourself
- Update social media links
- Add your skills in each category

### 2. Projects
Edit `src/data/projects.json`:
- Replace sample projects with your own
- Add project images (use placeholder URLs or upload to `/public/assets/images/`)
- Include GitHub and live demo links
- List technologies used

### 3. Experience
Edit `src/data/experience.json`:
- Add your work history
- Include job titles, companies, dates
- Describe responsibilities and achievements

### 4. Media Assets
Place your files in:
- **Images**: `/public/assets/images/`
  - Profile photo: `avatar.jpg`
  - Project screenshots: `project1.jpg`, etc.
- **Videos**: `/public/assets/videos/`
  - Project demos: `project1-demo.mp4`, etc.
- **Documents**: `/public/assets/documents/`
  - Resume: `resume.pdf`

### 5. Quick Image Placeholder URLs
While you gather your images, you can use these placeholder URLs:
- Profile: `https://via.placeholder.com/200x200/6366f1/ffffff?text=YourInitials`
- Projects: `https://via.placeholder.com/600x400/6366f1/ffffff?text=Project+Name`

### 6. Customizing Colors
Edit CSS custom properties in `src/App.css`:
```css
:root {
  --color-primary: #6366f1;     /* Your brand color */
  --color-secondary: #f43f5e;   /* Accent color */
  /* ... other colors */
}
```

### 7. Deployment
1. Build: `npm run build`
2. Deploy the `dist` folder to:
   - Netlify (drag & drop)
   - Vercel (`vercel` command)
   - GitHub Pages (`npm run deploy`)

## The Layout Issue Fix
If the website appears only on the left side:
1. The CSS now includes full-width utilities
2. All sections use viewport width (100vw)
3. Content is properly centered within containers
4. Mobile responsive design is maintained

Your portfolio should now display correctly across the full width of the screen!
