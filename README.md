# Alex Matei - Personal Portfolio Website

A minimal, elegant personal portfolio website with integrated blog, built with Next.js 14 and TailwindCSS.

## ✨ Features

- **Minimal Design**: Clean, sophisticated aesthetic inspired by high-end portfolio sites
- **Strong Visual Hierarchy**: Large, bold typography with generous white space
- **Integrated Blog**: Markdown-based blog system with frontmatter support
- **SEO Optimized**: Proper meta tags and static site generation
- **Mobile Responsive**: Optimized for all screen sizes
- **Performance Focused**: Static site generation for fast loading

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

## 📝 Adding Blog Posts

Create new markdown files in the `/posts` directory with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-06-24"
excerpt: "A brief description of your post"
---

# Your post content here

Write your blog post using standard Markdown syntax.
```

## 🎨 Design Philosophy

- **Typography First**: Crimson Text serif font for elegance
- **Minimal Color Palette**: Black, white, and orange accent (#FF5722)
- **Generous White Space**: Creates breathing room and focus
- **Strong Hierarchy**: Clear visual progression from most to least important

## 📁 Project Structure

```
├── components/          # Reusable React components
├── lib/                # Utility functions (blog parsing)
├── pages/              # Next.js pages
├── posts/              # Markdown blog posts
├── public/             # Static assets
└── styles/             # Global CSS styles
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (already configured in `vercel.json`)
3. Deploy automatically on push to main branch

### Manual Deploy

```bash
npm run build
# Upload the 'out' directory to your static hosting provider
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS v4
- **Content**: Markdown with gray-matter + remark
- **Typography**: Google Fonts (Crimson Text)
- **Deployment**: Vercel-ready with static export

## 📄 License

MIT License - feel free to use as a starting point for your own portfolio.