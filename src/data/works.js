/**
 * @typedef {Object} Work
 * @property {string} title - The title of the work
 * @property {string} route - The internal route path
 * @property {string} href - The external URL
 * @property {string} src - The image source path
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
    "title": "GoArmy",
    "route": "/works/goarmy",
    "href": "https://wwww.goarmy.com",
    "src": "/goarmy.png",
    "alt": "GoArmy",
    "description": "Official website for the United States Army, serving as a comprehensive resource for potential recruits and the public. Features include interactive career exploration tools, detailed information about military service, and streamlined application processes. The platform provides accessible information about Army careers, benefits, and opportunities while maintaining the highest standards of security and professionalism.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "Army Career Map",
    "route": "/works/army-career-map",
    "href": "https://army-career-map.vercel.app/",
    "src": "/army-career-map.png",
    "alt": "Army Career Map",
    "description": "Username: Jane, Password: Doe. This AI app empowers Army prospects to take control of their career journey by providing a clear, personalized roadmap beyond basic training. Through a brief questionnaire, users receive tailored career paths based on their goals and interests.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "Coffee Logger",
    "route": "/works/coffee-logger",
    "href": "https://coffee-logger.vercel.app/",
    "src": "/coffee-logger.png",
    "alt": "Coffee Logger",
    "description": "Embedded C/C++ microcontroller system integrated with AWS to track and store real-time coffee data. Built with Next.js, React, and cloud-based architecture for seamless data visualization and accessibility.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "KZ Portfolio",
    "route": "/works/kz-portfolio",
    "href": "https://portfolio4-weld-alpha.vercel.app/",
    "src": "/kz-portfolio.png",
    "alt": "KZ Portfolio",
    "description": "A modern, responsive portfolio website built with Next.js 15 and React 19. Features include dynamic routing, responsive grid layouts, and optimized image handling. The site showcases a clean, modular architecture with custom components for navigation, banner, and CTAs, all styled with CSS modules and Tailwind CSS.",
    "repo": "https://github.com/placeholder/repo"
  },
  // {
  //   "title": "Connected International",
  //   "route": "/works/connected-international",
  //   "href": "https://ci-orcin.vercel.app/",
  //   "src": "/ci.png",
  //   "alt": "Connected International",
  //   "description": "Prototype landing page for an international agency, designed with a minimalistic yet bold fashion aesthetic. Prioritizes clean visuals and striking typography for a sophisticated digital presence.",
  //   "repo": "https://github.com/placeholder/repo"
  // },
  {
    "title": "CompTIA Notebook",
    "route": "/works/security-notebook",
    "href": "https://comp-tia-security-sy-0-701-notebook.vercel.app/",
    "src": "/security-notebook.png",
    "alt": "CompTIA Security+ SYO-701 Notebook",
    "description": "A comprehensive study resource for the CompTIA Security+ SY0-701 and AWS Certified Cloud Practitioner exams. Built with Next.js and React, it features test prep scoring and interactive flashcards for effective learning.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "Map Gen",
    "route": "/works/map-gen",
    "href": "https://map-gen.vercel.app/",
    "src": "/map-gen.png",
    "alt": "Map Gen",
    "description": "Generates maps dynamically using a grid border generation algorithm. Built with Next.js and React, it delivers structured and scalable map layouts with efficient rendering.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "Let Loose",
    "route": "/works/let-loose",
    "href": "https://let-loose.vercel.app/",
    "src": "/letloose.png",
    "alt": "Let Loose",
    "description": "A fully immersive dining experience powered by WordPress and integrated eCommerce functionality, designed for a seamless and engaging user experience.",
    "repo": "https://github.com/placeholder/repo"
  },
  {
    "title": "Meal Outpost",
    "route": "/works/meal-outpost",
    "href": "https://meal-outpost.vercel.app/",
    "src": "/mealoutpost.png",
    "alt": "Meal Outpost",
    "description": "Website for a crypto-backed fast-food organization, built with Three.js to create an engaging and visually immersive digital experience.",
    "repo": "https://github.com/placeholder/repo1"
  },
  {
    "title": "Pizza Lobo",
    "route": "/works/pizza-lobo",
    "href": "https://pizza-lobo.vercel.app/",
    "src": "/pizzalobo.png",
    "alt": "Pizza Lobo",
    "description": "A vibrant, hip pizza restaurant website built with WordPress, featuring seamless online ordering for a smooth and engaging customer experience.",
    "repo": "https://github.com/placeholder/repo2"
  },
  {
    "title": "Tractatus Design Studio",
    "route": "/works/tractatus-design-studio",
    "href": "https://tractatus-design-studio.vercel.app/",
    "src": "/tractatus-home.png",
    "alt": "Tractatus Design Studio",
    "description": "Web design studio powered by WordPress, crafting sleek, functional, and engaging digital experiences tailored to modern branding needs.",
    "repo": "https://github.com/placeholder/repo3"
  }
]

export default works