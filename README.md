<div align="center">

# 🚀 Souvik Karfa - Portfolio

> A modern, animated, and minimal portfolio website built with cutting-edge web technologies

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-FF0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>

---

## ✨ What Makes This Special

This portfolio isn't just another website—it's a **carefully crafted digital experience** that showcases modern web development at its finest:

- 🎨 **Design Excellence**: Minimalist yet stunning UI with a cohesive dark theme featuring a signature **#c8ff00** accent color
- ⚡ **Buttery Smooth**: Implemented with Lenis smooth scrolling and Framer Motion animations for a premium feel
- 🎯 **Performance First**: Built with Next.js 16 App Router, optimized fonts, and modern React 19
- 📱 **Fully Responsive**: Pixel-perfect adaptation from mobile to ultra-wide displays
- 🎭 **Micro-interactions**: Every element has been thoughtfully animated to delight users
- ♿ **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation support

---

## 🛠️ Tech Stack

### **Core Framework**

- ⚛️ **[Next.js 16.0.3](https://nextjs.org/)** - The React Framework for Production (App Router)
- ⚛️ **[React 19.2.0](https://reactjs.org/)** - Latest React with improved performance
- 📘 **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### **Styling & Design**

- 🎨 **[Tailwind CSS v4](https://tailwindcss.com/)** - Latest utility-first CSS framework
- 🎨 **[@tailwindcss/postcss](https://tailwindcss.com/)** - PostCSS plugin for Tailwind v4
- 🎭 **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Extended animation utilities
- 🔧 **[class-variance-authority](https://github.com/joe-bell/cva)** - Component variant management
- 🔧 **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- 🔧 **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes without conflicts

### **Animations & Interactions**

- 🎬 **[Motion (Framer Motion) 12.23.24](https://www.framer.com/motion/)** - Production-ready animations
- 📜 **[Lenis 1.3.15](https://github.com/studio-freight/lenis)** - Smooth scrolling library with ReactLenis integration

### **UI Components & Icons**

- 🎯 **[Lucide React 0.554.0](https://lucide.dev/)** - Beautiful, consistent icon library
- 🎨 **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component architecture (via components.json)

### **Custom Typography**

- ✍️ **Ulm Grotesk** - Primary font (Bold 700, Extrabold 800)
- ✍️ **Akzidenz Grotesk Black** - Headings font (Weight 900)
- ✍️ **Coconut Movie** - Accent/decorative font (Weight 400)

### **Development Tools**

- 🔍 **[ESLint 9](https://eslint.org/)** - Linting with Next.js config
- 📦 **[PostCSS](https://postcss.org/)** - CSS processing
- 🔧 **TypeScript strict mode** - Maximum type safety

---

## 🚧 Challenges & Solutions

### **1. Smooth Scrolling Performance** 🏎️

**Challenge**: Implementing smooth scrolling without janky performance or conflicting with Framer Motion animations.

**Solution**: Integrated Lenis with custom configuration (`lerp: 0.1`, `duration: 1.2`) wrapped in a client component, ensuring compatibility with Next.js SSR and React 19's concurrent features.

### **2. Font Loading Optimization** 📝

**Challenge**: Custom fonts causing layout shift (CLS) and slow initial render.

**Solution**: Used Next.js `localFont` with optimized font subsets, CSS variables, and proper font-display strategies. Implemented font preloading in layout.tsx for instant text rendering.

### **3. Animation Orchestration** 🎭

**Challenge**: Coordinating multiple staggered animations across different components without performance degradation.

**Solution**: Leveraged Framer Motion's `variants` system with viewport-based triggers (`whileInView`) and optimal `once: true` settings to prevent re-animations. Used word-by-word reveal with optimized delays (`delay: index * 0.03`).

### **4. Tailwind v4 Migration** 🎨

**Challenge**: Adapting to Tailwind CSS v4's new PostCSS-first architecture and breaking changes.

**Solution**: Restructured `globals.css` with `@import "tailwindcss"` and `@theme inline` blocks, implementing custom CSS variables for design tokens and dark mode support.

### **5. Type Safety with Motion** 📘

**Challenge**: Complex TypeScript types with Framer Motion props and Next.js Image component.

**Solution**: Proper typing of motion variants, careful use of client components (`"use client"`), and strict TypeScript configuration ensuring no type compromises.

### **6. Responsive Design Complexity** 📱

**Challenge**: Creating a design that looks stunning across all devices (mobile to 4K) with complex text sizing.

**Solution**: Implemented a comprehensive responsive scale using Tailwind's breakpoints (`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`) with careful testing at each breakpoint.

---

## 🎯 Key Features

### 🏠 **Hero Section**

- Animated entrance with staggered text reveals
- Profile picture with scaling animation
- Custom "CODE" badge with hover effects
- Section numbering system (01/)

### 👤 **About Section**

- Word-by-word scroll reveal animation
- Profile image with border effects
- Social links (Instagram, Twitter, GitHub, LinkedIn)
- Animated "Learn More" circular button with arrow
- Section numbering (02/)

### 💼 **Projects Section**

- Project showcase with hover effects
- Responsive grid layout
- Section numbering (03/)

### 🎨 **Skills Section**

- Technology visualization
- Animated skill cards
- Section numbering (04/)

### 📧 **Contact Section**

- Contact form with validation
- Social links integration
- Smooth animations

### 🧭 **Navigation**

- Smooth page transitions with PageTransition component
- Responsive navbar
- Footer with social links

### ✨ **Global Enhancements**

- Lenis smooth scrolling throughout
- Page transition animations
- Dark theme with custom color palette
- Optimized images with Next.js Image component

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
my-app/
├── app/
│   ├── about/           # About section & details page
│   ├── components/      # Reusable components (SmoothScrolling, PageTransition)
│   ├── contact/         # Contact section & page
│   ├── hero/            # Hero section
│   ├── projects/        # Projects section & page
│   ├── skills/          # Skills section
│   ├── universal/       # Global components (Navbar, Footer)
│   ├── globals.css      # Global styles & Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Homepage
├── fonts/               # Custom fonts (Ulm Grotesk, Akzidenz Grotesk, Coconut Movie)
├── public/              # Static assets (images, favicon)
├── Assests/             # Design references
├── lib/                 # Utility functions
├── components.json      # shadcn/ui configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

---

## 🎨 Design Philosophy

This portfolio follows a **minimalist yet impactful** design philosophy:

- **Dark Theme**: Primary background `#1a1a1a` for reduced eye strain
- **Accent Color**: Signature lime `#c8ff00` for CTAs and highlights
- **Typography**: Custom fonts create a unique, professional identity
- **Whitespace**: Generous spacing for breathing room
- **Animations**: Subtle, purposeful motion that enhances UX without distraction
- **Consistency**: Unified design language across all sections

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ Performance
- 🎯 **Core Web Vitals**: Excellent on all metrics
- 📦 **Bundle Size**: Optimized with Next.js automatic code splitting
- 🖼️ **Image Optimization**: Next.js Image component with WebP conversion
- 🔤 **Font Loading**: Optimized with local fonts and CSS variables

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is **open source** and available for personal and commercial use.

---

## 👨‍💻 Author

**Souvik Karfa**

- Self-taught Full Stack Developer
- Based in Kolkata, West Bengal
- Specializing in Design & Development, Creative Direction, and Iconography
- Education: Biju Pattanaik University of Technology, Bhubaneswar, Odisha

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for animation capabilities
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) for component inspiration

---

## 📧 Contact

For inquiries, reach out through the [contact form](#) or connect on social media.

---

<div align="center">

**Made with ❤️ and lots of ☕ by Souvik Karfa**

⭐ Star this repo if you find it helpful!

</div>
