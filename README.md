# Modern Portfolio Website

A sleek, responsive portfolio website built with React + Vite, featuring smooth animations and easy content management.

## Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Easy Content Management**: JSON-based configuration for projects, experience, and personal info
- **Performance Optimized**: Fast loading with Vite build system
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **CSS Custom Properties** - Modern styling with theming support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information
Edit `/src/data/personal.json` to update your personal details:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "location": "Your City, Country",
  "bio": "Your bio description...",
  "resumeUrl": "/assets/documents/resume.pdf"
}
```

### Projects
Add your projects in `/src/data/projects.json`:
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description...",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "/assets/images/project-screenshot.jpg",
  "video": "/assets/videos/project-demo.mp4",
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://project-live-url.com"
}
```

### Work Experience
Update `/src/data/experience.json` with your work history:
```json
{
  "id": "unique-id",
  "title": "Job Title",
  "company": "Company Name",
  "startDate": "2023-01",
  "endDate": "Present",
  "description": "Job description...",
  "skills": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Education & Certifications
- Edit `/src/data/education.json` for educational background
- Edit `/src/data/certifications.json` for certificates and achievements

### Media Assets
Place your media files in the `/public/assets/` directory:
- **Images**: `/public/assets/images/`
- **Videos**: `/public/assets/videos/`
- **Documents**: `/public/assets/documents/`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/          # React components
├── context/            # React context providers
├── data/              # JSON configuration files
├── hooks/             # Custom React hooks
└── utils/             # Utility functions

public/
└── assets/            # Static media files
    ├── images/        # Image files
    ├── videos/        # Video files
    └── documents/     # Documents (PDF, etc.)
```

## Theme Customization

The website supports dark/light themes. You can customize colors by editing the CSS custom properties in `/src/App.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  /* ... more variables */
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
