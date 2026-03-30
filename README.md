# James Huang - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

🌐 **Live Site**: [https://jameshuang12.github.io/portfolio/](https://jameshuang12.github.io/portfolio/)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 🌓 **Dark/Light Theme**: Automatic theme detection with manual toggle
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance**: Static site generation with Next.js
- 🎭 **Smooth Animations**: Framer Motion for engaging user experience
- ♿ **Accessible**: WCAG compliant components
- 🔍 **SEO Optimized**: Meta tags and Open Graph support
- 📝 **Easy Content Management**: Update content without touching code

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: GitHub Pages (Static Export)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── header.tsx     # Navigation
│   │   │   ├── hero.tsx       # Landing section
│   │   │   ├── about.tsx      # About me
│   │   │   ├── skills.tsx     # Skills showcase
│   │   │   ├── certificates.tsx # Certifications
│   │   │   ├── gallery.tsx    # Photo gallery
│   │   │   ├── contact.tsx    # Contact form
│   │   │   └── footer.tsx     # Footer
│   │   └── theme-provider.tsx # Theme context
│   ├── data/                  # Content data files
│   │   ├── profile.ts         # Personal information
│   │   ├── skills.ts          # Skills and proficiency
│   │   ├── certificates.ts    # Certifications
│   │   ├── experience.ts      # Work experience
│   │   ├── projects.ts        # Projects showcase
│   │   └── gallery.ts         # Gallery images
│   └── lib/
│       ├── utils.ts           # Utility functions
│       └── paths.ts           # Path helpers
├── public/
│   └── images/                # Images and assets
├── old-portfolio/             # Backup of original site
└── Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jameshuang12/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Updating Content

All content is managed through TypeScript data files in `src/data/`. No coding required!

### Update Personal Information

Edit `src/data/profile.ts`:
```typescript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
}
```

### Add Work Experience

Edit `src/data/experience.ts`:
```typescript
{
  id: "job-1",
  title: "Software Engineer",
  company: "Company Name",
  location: "City, State",
  startDate: "2024-01",
  endDate: "Present",
  current: true,
  description: "Your role description",
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2"
  ],
  technologies: ["React", "Node.js", "AWS"],
}
```

### Add Projects

Edit `src/data/projects.ts`:
```typescript
{
  id: "project-1",
  title: "Project Name",
  description: "Brief description",
  technologies: ["Next.js", "TypeScript"],
  githubUrl: "https://github.com/...",
  demoUrl: "https://demo.example.com",
  featured: true,
}
```

### Add Certificates

Edit `src/data/certificates.ts`:
```typescript
{
  id: "cert-1",
  title: "Certificate Name",
  issuer: "Issuing Organization",
  issueDate: "2024-01",
  pdfPath: "/portfolio/images/certificate.pdf",
  credentialUrl: "https://www.credly.com/badges/...",
  skills: ["Skill 1", "Skill 2"],
  description: "What you learned",
}
```

### Add Gallery Images

1. Add image to `public/images/`
2. Edit `src/data/gallery.ts`:
```typescript
{
  id: "image-1",
  src: "/portfolio/images/your-image.jpg",
  alt: "Description",
  title: "Image Title",
  category: "Personal",
}
```

### Update Skills

Edit `src/data/skills.ts`:
```typescript
{ 
  name: "React", 
  level: 90,  // 0-100
  category: "Frontend" 
}
```

## 🎨 Customization

### Colors and Theme

Edit `tailwind.config.ts` to customize colors:
```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // ... more colors
    }
  }
}
```

Edit `src/app/globals.css` for theme variables:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}
```

## 📦 Building for Production

### Build Static Site

```bash
npm run build
```

This creates an `out` directory with static HTML files.

### Deploy to GitHub Pages

1. Build the site:
```bash
npm run build
```

2. Commit and push:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. GitHub Pages will automatically deploy from the `out` directory

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Sections

1. **Header**: Responsive navigation with theme toggle
2. **Hero**: Animated landing with profile image and CTAs
3. **About**: Personal story and key highlights
4. **Skills**: Interactive skills showcase with proficiency levels
5. **Experience**: Work history timeline (add your data)
6. **Projects**: Project showcase with filters (add your data)
7. **Certificates**: Certifications with PDF viewer
8. **Gallery**: Photo gallery with lightbox
9. **Contact**: Contact form and social links
10. **Footer**: Social links and copyright

## 🎯 Key Features Explained

### Theme Toggle
- Automatic detection of system preference
- Manual toggle between light/dark modes
- Smooth transitions

### Animations
- Scroll-triggered animations with Framer Motion
- Staggered children animations
- Hover effects and transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile

### SEO
- Meta tags for search engines
- Open Graph tags for social sharing
- Semantic HTML structure

## 🐛 Troubleshooting

### TypeScript Errors in IDE
These are normal during development. Next.js will resolve them during compilation.

### Images Not Loading
- Ensure images are in `public/images/`
- Check paths in data files use `/portfolio/images/` for production
- Development uses `/images/` (handled automatically)

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**James Huang**
- LinkedIn: [james-huang12](https://www.linkedin.com/in/james-huang12/)
- GitHub: [@jameshuang12](https://github.com/jameshuang12)
- Email: james153018@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icons

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS