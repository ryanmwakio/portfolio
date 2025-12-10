# Ryan Mwakio - Portfolio Website

A modern, minimalist portfolio website showcasing the work and skills of Ryan Mwakio, a full-stack developer specializing in Laravel, Vue, Nuxt, React, Next.js, Node.js, Nest.js, GraphQL, Docker, Kubernetes, GCP, and more.

## Features

- 🎨 **Modern Minimalist Design** - Clean, premium aesthetic with glass morphism effects
- ✨ **Animated Background** - Three.js particle system for an immersive experience
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 🔍 **One-Page Layout** - All content accessible in a single scrollable page
- 🎯 **Performance Optimized** - Built with Next.js 16 and optimized for speed

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css    # Global styles with glass morphism utilities
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with introduction
│   ├── Skills.tsx          # Skills and expertise showcase
│   ├── Projects.tsx        # Featured projects section
│   ├── Contact.tsx         # Contact and social links
│   └── ThreeBackground.tsx # Animated 3D particle background
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

To customize the portfolio:

1. Update personal information in the component files
2. Modify skills in `components/Skills.tsx`
3. Add/update projects in `components/Projects.tsx`
4. Update social links in `components/Contact.tsx`
5. Adjust colors and styling in `app/globals.css`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
