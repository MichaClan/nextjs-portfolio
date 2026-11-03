export type Category = "year-1" | "year-2" | "personal";

export type Project = {
  title: string;
  description: string;
  image: string; // file in /public/projects
  imageAlt: string;
  category: Category;
  badge?: string;
  featured?: boolean; // shown first, as a large card
  details: { label: string; value: string }[];
  liveUrl?: string;
  repoUrl?: string;
};

// Filter chips on the portfolio page, in display order
export const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "year-2", label: "Second year" },
  { id: "year-1", label: "First year" },
  { id: "personal", label: "Personal" },
];

// Order here = display order (newest / best first). Featured ones always go on top.
export const projects: Project[] = [
  {
    title: "Sorcerer Ascendant",
    description:
      "A two-player, turn-based game with real-time multiplayer logic, built with Next.js. Pick one of three characters, each with its own moveset, sprites and status effects. I built most of it myself, including the simple sprites and the balancing. It was my last school project of the second year, and my favourite so far.",
    image: "/projects/Sorcerer.png",
    imageAlt: "Sorcerer Ascendant, a two-player turn-based game",
    category: "year-2",
    badge: "Multiplayer",
    featured: true,
    details: [
      // TODO: fill in your real stack (languages, realtime service, database, ...)
      { label: "Tech stack", value: "Next.js" },
      { label: "Deployment", value: "Vercel" },
      { label: "Players", value: "2 (online)" },
    ],
    liveUrl: "https://sorcerer-ascendant.vercel.app/",
    repoUrl: "https://github.com/MichaClan/Sorcerer-Ascendant",
  },
  {
    title: "Reading;Gate",
    description:
      "Client project built for the Werkplek Leren course. Features full CRUD functionality, role-based access control, popular books analytics, and Google Books API integration. Successfully delivered and presented to a satisfied client.",
    image: "/projects/reading-gate.png",
    imageAlt: "Reading Gate, a web application for book management",
    category: "year-2",
    badge: "Client Project",
    details: [
      { label: "Tech stack", value: "Next.js, Prisma ORM, Tailwind CSS" },
      { label: "Integrations", value: "Google Books API" },
      { label: "Features", value: "Role CRUD, Analytics, Book Catalog" },
    ],
    repoUrl: "https://github.com/ROCMondriaanTIN/sd24-project-p08-werkplek-leren-reading-gate"
  },
  {
    title: "Tower Defense Game",
    description:
      "Full-stack web app built with the Next.js App Router, an interactive canvas game engine, and persistent score and leaderboard tracking in a cloud PostgreSQL database.",
    image: "/projects/IDF.png",
    imageAlt: "Infinite Development Framework, a tower defense game",
    category: "year-2",
    badge: "Full-Stack",
    details: [
      { label: "Languages", value: "TypeScript, JavaScript, HTML, CSS" },
      {
        label: "Tech stack",
        value: "Next.js 16, Prisma ORM, Neon PostgreSQL, NextAuth.js, Tailwind CSS",
      },
      { label: "Deployment", value: "Vercel" },
    ],
    liveUrl: "https://infinite-development-framework.vercel.app/",
    repoUrl: "https://github.com/MichaClan/Infinite-Development-Framework",
  },
  {
    title: "Ashura's Battle Arena",
    description:
      "Game in development with Godot (GDScript). Working with gameplay mechanics, animations and 3D assets made in Blender.",
    image: "/projects/project4.png",
    imageAlt: "Ashura's Battle Arena, a Godot project",
    category: "personal",
    details: [
      { label: "Languages", value: "GDScript" },
      { label: "Tools", value: "Godot, Blender" },
    ],
    repoUrl: "https://github.com/MichaClan/ashura-s-battle-arena",
  },
  {
    title: "Dashboard Lahmacun",
    description:
      "First-year group project dashboard that processes incoming dataset metrics and visualizes trends through interactive charts.",
    image: "/projects/dashboard-lahmacun.png",
    imageAlt: "Dashboard Lahmacun analytics project",
    category: "year-1",
    badge: "Analytics",
    details: [
      { label: "Tech stack", value: "Next.js, Chart.js" },
      { label: "Focus", value: "Data Visualization & Dashboard UI" },
    ],
    repoUrl: "https://github.com/ROCMondriaanTIN/sd24-project-p06-dashboard-lahmacun",
  },
  {
    title: "Budget Buddy",
    description:
      "Web app for managing expenses. Built with PHP and MySQL, including CRUD functionality and user login.",
    image: "/projects/budgetbuddy.png",
    imageAlt: "Budget Buddy, an expense tracking app",
    category: "year-1",
    details: [
      { label: "Languages", value: "PHP, HTML, CSS" },
      { label: "Tools", value: "PhpStorm, MySQL" },
    ],
    repoUrl: "https://github.com/ROCMondriaanTIN/sd24-project-p05-budget-buddy-88",
  },
  {
    title: "Review Your Experience",
    description:
      "Web app built with PHP and MySQL where users can post and store reviews. Backend connected to a database through XAMPP.",
    image: "/projects/ryx.png",
    imageAlt: "Review Your Experience, a review website for a game site",
    category: "year-1",
    details: [
      { label: "Languages", value: "PHP, HTML, CSS" },
      { label: "Tools", value: "PhpStorm, XAMPP" },
    ],
    repoUrl:
      "https://github.com/ROCMondriaanTIN/sd24-project-p03-review-your-experience-balaklava-development",
  },
  {
    title: "Draughts",
    description:
      "Draughts board game built in JavaScript, with the rules and game logic implemented. Supports multiple ways to play and interactive gameplay.",
    image: "/projects/dammen.png",
    imageAlt: "Dammen, a draughts game",
    category: "year-1",
    details: [
      { label: "Languages", value: "HTML, CSS, JavaScript" },
      { label: "Tools", value: "Visual Studio Code" },
    ],
    liveUrl: "https://michaclan.github.io/micha-dammen/",
  },
  {
    title: "Higher Lower",
    description:
      "Browser game built with JavaScript where players guess whether a number is higher or lower. Focus on logic, conditionals and random values.",
    image: "/projects/hl.png",
    imageAlt: "Hoger Lager, a higher or lower card game",
    category: "year-1",
    details: [
      { label: "Languages", value: "HTML, CSS, JavaScript" },
      { label: "Tools", value: "Visual Studio Code" },
    ],
    liveUrl: "https://michaclan.github.io/micha-hoger-lager/",
  },
];