# Lokesh — Personal Portfolio Website

A clean, modern personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

- Single-page portfolio with smooth scroll navigation
- Sticky responsive Navbar (hamburger menu on mobile)
- Hero, About, Skills, Projects, Contact, and Footer sections
- Dark theme with cyan accent color
- Fully responsive (mobile-first)
- Basic SEO metadata (Open Graph)

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Sticky responsive navbar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section with form
│   ├── Footer.tsx        # Footer
│   ├── SectionWrapper.tsx # Reusable section wrapper
│   ├── SkillCard.tsx     # Skill category card
│   └── ProjectCard.tsx   # Project card
├── data/
│   ├── projects.ts       # Projects data
│   └── skills.ts         # Skills data
└── public/               # Static assets
```

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com). Just push to your repository and connect it on Vercel.

```bash
npm run build
```
