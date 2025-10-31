const webSkills = {
  title: "Web",
  items: [
    "React",
    "NextJS",
    "JavaScript",
    "CSS",
    "Tailwind",
    "HTML",
    "Cypress",
    "APIs",
    "WordPress",
    "SQL",
    "Node.js",
    "AEM",
    "HTL",
    "Storybook",
    "Three.js",
  ],
};

const embeddedSkills = {
  title: "Embedded & Electronics",
  items: [
    "C/C++",
    "Python",
    "Arduino",
    "Raspberry Pi",
    "G-code",
    "Electronics Prototyping",
    "3D Printing",
    "CAD (Fusion360)",
  ],
};

const aiSkills = {
  title: "AI",
  items: [
    "LLM Development & Integration",
    "Enhancing Development Efficiency",
    "Problem Analysis & Resolution",
    "Architectural Solutions",
  ],
};

const certificates = {
  title: "Certificates",
  items: ["CompTIA Security+ ", "AWS Certified Cloud Practitioner"],
};

const devOpsSkills = {
  title: "DevOps",
  items: [
    "AWS",
    "DynamoDB",
    "Amplify",
    "API Gateway",
    "Lambda",
    "Vercel",
    "GitLab Pipelines",
    "Dreamhost",
    "Small, Medium, and Large-Scale Deployments",
  ],
};

const tools = {
  title: "Tools",
  items: [
    "Jira / Atlassian",
    "Git (GitHub, GitLab)",
    "Bitbucket",
    "npm",
    "yarn",
    "Maven",
    "CLI",
  ],
};

const optimizationSkills = {
  title: "Optimization",
  items: [
    "SEO",
    "Accessibility",
    "Site Optimization",
    "QA & Testing",
    "Debugging",
    "Documentation",
  ],
};

const designSkills = {
  title: "Design",
  items: [
    "Responsive Web Design",
    "Design Fundamentals",
    "Figma",
    "UI/UX Principles",
  ],
};

const collaborationSkills = {
  title: "Collaboration",
  items: [
    "Agile Methodologies",
    "Team Collaboration",
    "Developer Experience",
    "Customer & Client Relationships",
  ],
};

const softSkills = {
  title: "Soft Skills",
  items: [
    "Excellent Communication",
    "Critical Thinking & Reflection",
    "Strategic Planning & Organization",
    "Professionalism & Passion",
  ],
};

const frontendSkills = [
  webSkills,
  designSkills,
  optimizationSkills,
  tools,
  aiSkills,
  devOpsSkills,
  collaborationSkills,
  softSkills,
  certificates,
  embeddedSkills,
];

const cppSkills = [
  embeddedSkills,
  webSkills,
  tools,
  aiSkills,
  devOpsSkills,
  optimizationSkills,
  collaborationSkills,
  softSkills,
  certificates,
  designSkills,
];

const careerFocus = process.env.NEXT_PUBLIC_CAREER_FOCUS;
let skills;

switch (careerFocus) {
  case "frontend":
    skills = frontendSkills;
    break;
  case "cpp":
    skills = cppSkills;
    break;
  default:
    skills = frontendSkills;
}

export default skills;
