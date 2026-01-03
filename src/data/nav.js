const careerFocus = process.env.NEXT_PUBLIC_CAREER_FOCUS;
let resume;

const frontendResumePath = "/kenneth-zimny-resume-fullstack-1-3-26.pdf";
const cppResumePath = "/kenneth-zimny-resume-cpp.pdf";

switch (careerFocus) {
  case "frontend":
    resume = frontendResumePath;
    break;
  case "cpp":
    resume = cppResumePath;
    break;
  default:
    resume = frontendResumePath;
}

const nav = [
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Resume",
    href: resume,
  },
];

export default nav;
