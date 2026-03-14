export interface TechReason {
  name: string;
  reason: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tech: string[];
  whyTechStack: TechReason[];
  problem: string;
  inspirations: string[];
  images: ProjectImage[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: ProjectData[] = [
  {
    slug: 'modern-web-application',
    title: 'Event Ticketing System',
    description: 'Modern web application built with Next.js, Nest.js, and GraphQL.',
    longDescription: 'A full-stack application with a Next.js frontend, Nest.js API, and GraphQL layer. Includes a Flutter mobile app for cross-platform access, with shared types and consistent APIs.',
    category: 'Full Stack',
    tech: ['Next.js', 'TypeScript', 'Nest.js', 'Flutter', 'GraphQL', 'Docker'],
    whyTechStack: [
      { name: 'Next.js', reason: 'SSR, API routes, and strong DX for a fast, SEO-friendly web app.' },
      { name: 'Nest.js', reason: 'Structured backend with dependency injection, modules, and easy integration with GraphQL.' },
      { name: 'GraphQL', reason: 'Single endpoint and flexible queries so web and mobile clients request only the data they need.' },
      { name: 'Flutter', reason: 'One codebase for iOS and Android with consistent UI and performance.' },
      { name: 'Docker', reason: 'Reproducible builds and deployment for all services.' },
    ],
    problem: 'The product required a responsive web app, a mobile app, and a scalable API—all with shared business logic and a clear contract between frontend and backend.',
    inspirations: [
      'JAMstack and modern full-stack patterns for separation of concerns.',
      'GraphQL ecosystems for type-safe, efficient APIs.',
      'Cross-platform mobile frameworks for reaching both iOS and Android users.',
    ],
    images: [
      { src: '/images/p-1-1.png', caption: 'Overview — core user journey and main navigation.' },
      { src: '/images/p-1-2.png', caption: 'Details — states, interactions, and data presentation.' },
      { src: '/images/p-1-3.png', caption: 'System — layout decisions and information hierarchy.' },
      { src: '/images/p-1-4.png', caption: 'Mobile — consistent experience across platforms.' },
      { src: '/images/p-1-5.png', caption: 'API — GraphQL schema and example queries.' },
      { src: '/images/p-1-6.png', caption: 'Tech stack — rationale for each technology choice.' },
      { src: '/images/p-1-7.png', caption: 'Challenges — key technical hurdles and solutions.' },
      { src: '/images/p-1-8.png', caption: 'Future — potential improvements and next steps.' },
    ],
    image: '/images/p-1-1.png',
    demoUrl: 'https://tickit-frontend.vercel.app/',
  },
  {
    slug: 'ecommerce-b2b-platform',
    title: 'Ecommerce B2B Platform',
    description: 'Scalable B2B ecommerce platform built with Laravel, Vue, Nuxt, and Docker.',
    longDescription: 'A full-featured B2B ecommerce platform enabling wholesale buyers and suppliers to manage orders, inventory, and pricing at scale. The platform supports multi-vendor workflows, bulk ordering, and integrated payment flows.',
    category: 'Full Stack',
    tech: ['Laravel', 'Vue', 'Nuxt', 'Docker'],
    whyTechStack: [
      { name: 'Laravel', reason: 'Robust backend with Eloquent ORM, queues, and API resources for reliable B2B business logic and scalability.' },
      { name: 'Vue / Nuxt', reason: 'Component-based frontend with SSR for SEO and fast product catalog browsing; Nuxt for structure and performance.' },
      { name: 'Docker', reason: 'Consistent dev and deployment environments and easy scaling of app and services.' },
    ],
    problem: 'B2B buyers and suppliers needed a single platform to handle bulk orders, tiered pricing, and order history instead of relying on spreadsheets and email.',
    inspirations: [
      'Alibaba and other B2B marketplaces for discovery and ordering flows.',
      'Modern SaaS dashboards for clear analytics and order management.',
      'Ecommerce best practices for checkout, cart, and inventory visibility.',
    ],
    images: [
      { src: '/images/p-2-1.png', caption: 'Catalog & discovery — fast browsing for B2B buyers.' },
      { src: '/images/p-2-2.png', caption: 'Order management — clear status and history.' },
      { src: '/images/p-2-3.png', caption: 'Checkout — trust, clarity, and speed for bulk ordering.' },
      { src: '/images/p-2-4.png', caption: 'Admin — manage products, orders, and users efficiently.' },
      { src: '/images/p-2-5.png', caption: 'Tech stack — rationale for each technology choice.' },
      { src: '/images/p-2-6.png', caption: 'Challenges — key technical hurdles and solutions.' },
    ],
    image: '/images/project1.png',
    demoUrl: 'https://vietnamfactoryb2b.com/',
  },
 
  {
    slug: 'ticketing-system',
    title: 'General ticketing',
    description: 'Ticketing system built with Laravel, Vue, and Javascript.',
    longDescription: 'An event ticketing platform where organizers can create events, set pricing, and manage capacity. Attendees can browse events, purchase tickets, and receive confirmations with integrated payment processing.',
    category: 'Full Stack',
    tech: ['Laravel', 'Vue', 'Javascript', 'Payment Gateway'],
    whyTechStack: [
      { name: 'Laravel', reason: 'Rapid development of auth, payments, and email; strong ecosystem for integrations.' },
      { name: 'Vue', reason: 'Reactive UI for seat selection, cart, and checkout without full page reloads.' },
      { name: 'Payment Gateway', reason: 'Secure, compliant payment handling and reconciliation for ticket sales.' },
    ],
    problem: 'Event organizers needed a simple way to sell tickets online, control capacity, and handle payments without relying on generic forms or manual tracking.',
    inspirations: [
      'Eventbrite and Ticketmaster for event discovery and purchase flows.',
      'Ecommerce checkout patterns for clarity and trust.',
      'Dashboard-style tools for organizers to manage events and sales.',
    ],
    images: [
      { src: '/images/p-3-1.png', caption: 'Event discovery — conversion-focused event listing.' },
      { src: '/images/p-3-2.png', caption: 'Purchase flow — ticket selection and checkout.' },
      { src: '/images/p-3-3.png', caption: 'Admin view — sales tracking and capacity management.' },
      { src: '/images/p-3-4.png', caption: 'Tech stack — rationale for each technology choice.' },
      { src: '/images/p-3-5.png', caption: 'Challenges — key technical hurdles and solutions.' },
    ],
    image: '/images/p-3-1.png',
    demoUrl: 'https://ticketsasa.com/',
  },
  {
    slug: 'real-estate-api',
    title: 'Real estate API',
    description: 'Real estate API built with Node.js, Express, MySQL, and REST APIs.',
    longDescription: 'A REST API for real estate listings: properties, search, filters, and CRUD operations. Serves web and mobile clients and supports structured data for locations, amenities, and media.',
    category: 'Backend / API',
    tech: ['Node.js', 'Express', 'MySQL', 'REST APIs'],
    whyTechStack: [
      { name: 'Node.js / Express', reason: 'Lightweight, fast backend well-suited for I/O-heavy APIs and real-time features.' },
      { name: 'MySQL', reason: 'Relational model for properties, locations, and relationships with strong query and indexing support.' },
      { name: 'REST', reason: 'Clear, stateless API contract that any client can consume with standard HTTP and JSON.' },
    ],
    problem: 'Property platforms and apps needed a single, reliable API to list and search properties, manage data, and keep listing information consistent across channels.',
    inspirations: [
      'RESTful API design principles for clarity and predictability.',
      'Real estate portals for data models (listings, filters, locations).',
      'Documentation-first APIs for easier integration by third parties.',
    ],
    images: [
      { src: '/images/project4.png', caption: 'API overview — endpoints and usage patterns.' },
      { src: '/images/project4.png', caption: 'Search & filters — predictable REST query design.' },
      { src: '/images/project4.png', caption: 'Data model — properties, locations, and media.' },
    ],
    image: '/images/project4.png',
    demoUrl: 'https://urbancribs.onrender.com/',
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
