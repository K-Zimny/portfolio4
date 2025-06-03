const careerFocus = process.env.NEXT_PUBLIC_CAREER_FOCUS
let intro
let resume

const frontendIntro = "Accomplished software developer with extensive experience in frontend development, complemented by skills in full-stack and embedded systems. Known for creating secure, scalable, and high-performing web applications that align technical strategies with business objectives. Adept at building responsive websites, enhancing business features, and delivering impactful user experiences using tools such as React, Next.js, Adobe Experience Manager, and WordPress. Brings a proven ability to thrive in diverse roles—whether as a sole developer, business owner, or collaborative team contributor—while demonstrating strong problem-solving, organizational, and communication skills."
const cppIntro = "Frontend-focused web developer with a strong foundation in modern JavaScript frameworks, user interface design, and performance optimization. Proven experience building secure, scalable web applications using tools like React, Next.js, and AEM. Personal projects involving C++ and embedded systems reflect a growing interest in low-level programming and hardware integration. Currently exploring opportunities that bridge modern frontend development with embedded technologies while continuing to deliver best-in-class web experiences."
const frontendResumePath = "/kenneth-zimny-resume-frontend.pdf" 
const cppResumePath = "/kenneth-zimny-resume-cpp.pdf"

switch(careerFocus) {
    case ("frontend"):
        intro = frontendIntro
        resume = frontendResumePath
        break
    case ("cpp"):
        intro = cppIntro
        resume = cppResumePath
        break
    default:
        intro = frontendIntro
}

const home = {
    name: "Kenneth Zimny",
    position: "Frontend Developer",
    intro: intro,
    siteLinks: [
        { href: "/skills", "title": "Skills" },
        { href: "/works", "title": "Works" },
        { href: "/contact", "title": "Contact" },
        { href: resume, "title":"Resume"}
    ]
}

export default home