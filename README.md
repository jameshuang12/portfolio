# James Huang - Portfolio

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Platform Engineer and Software Developer.

🌐 **Live Site**: [https://jameshuang12.github.io/portfolio/](https://jameshuang12.github.io/portfolio/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Dynamic Content**: Easy-to-update data files for projects, experience, and skills
- **SEO Optimized**: Proper meta tags and Open Graph support for social sharing
- **Fast Performance**: Static site generation with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages via GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/jameshuang12/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Content data files
│   │   ├── profile.ts    # Personal information
│   │   ├── experience.ts # Work experience
│   │   ├── projects.ts   # Project portfolio
│   │   ├── skills.ts     # Technical skills
│   │   └── certificates.ts # Certifications
│   └── lib/              # Utility functions
├── public/               # Static assets
│   └── images/           # Images and PDFs
└── .github/workflows/    # GitHub Actions for deployment
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit [`src/data/profile.ts`](src/data/profile.ts)
2. **Add Your Experience**: Modify [`src/data/experience.ts`](src/data/experience.ts)
3. **Showcase Projects**: Update [`src/data/projects.ts`](src/data/projects.ts)
4. **List Your Skills**: Edit [`src/data/skills.ts`](src/data/skills.ts)
5. **Add Certificates**: Update [`src/data/certificates.ts`](src/data/certificates.ts)
6. **Replace Images**: Add your photos to [`public/images/`](public/images/)

## 🚢 Deployment

This portfolio is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is live at `https://[username].github.io/portfolio/`

### Manual Deployment

```bash
npm run deploy
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/jameshuang12/portfolio/issues).

## 📧 Contact

James Huang - [jameshuang.business@gmail.com](mailto:jameshuang.business@gmail.com)

Portfolio: [https://jameshuang12.github.io/portfolio/](https://jameshuang12.github.io/portfolio/)

LinkedIn: [https://www.linkedin.com/in/james-huang12/](https://www.linkedin.com/in/james-huang12/)

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
