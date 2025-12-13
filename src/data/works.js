/**
 * @typedef {Object} Work
 * @property {string} title - The title of the work
 * @property {string} route - The internal route path
 * @property {string} href - The external URL
 * @property {string} src - The image source path. Use 2556px x 1331px
 * @property {string} alt - The image alt text
 * @property {string} description - The work description
 * @property {string} repo - The repository URL
 */

/**
 * Collection of portfolio works/projects.
 * Use VS Snippet "work" for new entry.
 * @type {Work[]}
 */
const works = [
  {
    title: "GoArmy",
    route: "/works/goarmy",
    href: "https://goarmy.com",
    src: "/goarmy.webp",
    alt: "GoArmy",
    description:
      "Official website for the United States Army, serving as a comprehensive resource for potential recruits and the public. Features include interactive career exploration tools, detailed information about military service, and streamlined application processes. The platform provides accessible information about Army careers, benefits, and opportunities while maintaining the highest standards of security and professionalism.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Army Civilian",
    route: "/works/army-civilian",
    href: "https://civilian.goarmy.com/",
    src: "/army-civilian.webp",
    alt: "Army Civilian",
    description:
      "Official site for U.S. Army Civilian Careers, providing access to federal job listings, application tools, and career resources. Supports professionals seeking civilian roles that contribute to Army missions while promoting growth and public service.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Army Career Map",
    route: "/works/army-career-map",
    href: "https://army-career-map.vercel.app/",
    src: "/army-career-map.webp",
    alt: "Army Career Map",
    description:
      "This AI app empowers Army prospects to take control of their career journey by providing a clear, personalized roadmap beyond basic training. Through a brief questionnaire, users receive tailored career paths based on their goals and interests. As the spearhead for Army AI initiatives, this project inspired the development of new AI-powered solutions across the organization. (Best viewed in Chrome)",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Coffee Logger",
    route: "/works/coffee-logger",
    href: "https://coffee-logger.vercel.app/",
    src: "/coffee-logger.webp",
    alt: "Coffee Logger",
    description:
      "Embedded C/C++ microcontroller system integrated with AWS to track and store real-time coffee data. Built with Next.js, React, and cloud-based architecture for seamless data visualization and accessibility.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Temperature & Humidity Tracker",
    route: "/works/temp-humidity",
    href: "/image-viewer?src=/temp-humidity.webp",
    src: "/temp-humidity.webp",
    alt: "A dashboard showing temperature and humidity readings in a residential setting.",
    description:
      "A home monitoring system that tracks and displays real-time temperature and humidity readings using a Raspberry Pi and BME280 sensor. Built with Flask, SQLite, and Jinja templating, it provides a practical solution for monitoring environmental conditions in residential settings.",
    repo: "https://github.com/K-Zimny/Pi-dht",
  },
  {
    title: "KZ Portfolio",
    route: "/works/kz-portfolio",
    href: "https://www.kennethzimny.com/",
    src: "/kz-portfolio.webp",
    alt: "KZ Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js 15 and React 19. Features include dynamic routing, responsive grid layouts, and optimized image handling. The site showcases a clean, modular architecture with custom components for navigation, banner, and CTAs, all styled with CSS modules and Tailwind CSS.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "CompTIA Notebook",
    route: "/works/security-notebook",
    href: "https://comp-tia-security-sy-0-701-notebook.vercel.app/",
    src: "/security-notebook.webp",
    alt: "CompTIA Security+ SYO-701 Notebook",
    description:
      "A comprehensive study resource for the CompTIA Security+ SY0-701 and AWS Certified Cloud Practitioner exams. Built with Next.js and React, it features test prep scoring and interactive flashcards for effective learning.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Map Gen",
    route: "/works/map-gen",
    href: "https://map-gen.vercel.app/",
    src: "/map-gen.webp",
    alt: "Map Gen",
    description:
      "Generates maps dynamically using a grid border generation algorithm. Built with Next.js and React, it delivers structured and scalable map layouts with efficient rendering.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Let Loose",
    route: "/works/let-loose",
    href: "https://let-loose.vercel.app/",
    src: "/letloose.webp",
    alt: "Let Loose",
    description:
      "A fully immersive dining experience powered by WordPress and integrated eCommerce functionality, designed for a seamless and engaging user experience.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Meal Outpost",
    route: "/works/meal-outpost",
    href: "https://meal-outpost.vercel.app/",
    src: "/mealoutpost.webp",
    alt: "Meal Outpost",
    description:
      "Website for a crypto-backed fast-food organization, built with Three.js to create an engaging and visually immersive digital experience.",
    repo: "https://github.com/placeholder/repo1",
  },
  {
    title: "Pizza Lobo",
    route: "/works/pizza-lobo",
    href: "https://pizza-lobo.vercel.app/",
    src: "/pizzalobo.webp",
    alt: "Pizza Lobo",
    description:
      "A vibrant, hip pizza restaurant website built with WordPress, featuring seamless online ordering for a smooth and engaging customer experience.",
    repo: "https://github.com/placeholder/repo2",
  },
  {
    title: "Tractatus Design Studio",
    route: "/works/tractatus-design-studio",
    href: "https://tractatus-design-studio.vercel.app/",
    src: "/tractatus-home.webp",
    alt: "Tractatus Design Studio",
    description:
      "Web design studio powered by WordPress, crafting sleek, functional, and engaging digital experiences tailored to modern branding needs.",
    repo: "https://github.com/placeholder/repo3",
  },
  {
    title: "The Dovetail Project",
    route: "/works/dovetail",
    href: "https://thedovetailproject.org/",
    src: "/dovetail.webp",
    alt: "The Dovetail Project",
    description:
      "A Squarespace-powered marketing and informational website for The Dovetail Project. It includes responsive navigation, social media integration, and SEO-optimized metadata. The site leverages Squarespace’s templating system, dynamic styling, and JavaScript rollups to deliver a customizable and mobile-friendly experience.",
    repo: "https://github.com/placeholder/repo",
  },
  {
    title: "Staccato 2011",
    route: "/works/staccato2011",
    href: "https://staccato2011.com/",
    src: "/staccato2011.webp",
    alt: "Staccato 2011",
    description:
      "A Next.js-powered e-commerce and marketing website for Staccato 2011, a firearms manufacturer. The site includes responsive design, SEO-optimized metadata, and integrates third-party tools like Dynamic Yield for personalization and Google Tag Manager for analytics. Content is dynamically delivered via a headless CMS (Contentstack), while performance is enhanced through asset preloading, font optimization, and CDN usage. It leverages server-side rendering and static generation for a fast, mobile-friendly user experience.",
    repo: "https://github.com/placeholder/repo",
  },
];

// Archived Works

// {
//   "title": "Connected International",
//   "route": "/works/connected-international",
//   "href": "https://ci-orcin.vercel.app/",
//   "src": "/ci.png",
//   "alt": "Connected International",
//   "description": "Prototype landing page for an international agency, designed with a minimalistic yet bold fashion aesthetic. Prioritizes clean visuals and striking typography for a sophisticated digital presence.",
//   "repo": "https://github.com/placeholder/repo"
// },

export default works;
