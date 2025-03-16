import PageHeader from "../pageheader/PageHeader";

export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" />

      <section className="resume-section">
        <h2>John Doe</h2>
        <p className="job-title">Full Stack Web Developer</p>
        <p className="contact-info">
          Email: john.doe@example.com | Phone: (555) 123-4567 |
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <h3>Summary</h3>
        <p>
          Passionate and detail-oriented Full Stack Web Developer with 5+ years
          of experience building responsive and user-friendly web applications.
          Proficient in modern JavaScript frameworks, with expertise in React,
          Node.js, and database technologies. Strong problem-solving skills and
          commitment to writing clean, maintainable code.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>
            <strong>Frontend:</strong> React, JavaScript (ES6+), TypeScript,
            HTML5, CSS3, Sass, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, RESTful APIs, GraphQL
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, VS Code, Webpack, Docker, Jest,
            Cypress
          </li>
          <li>
            <strong>Other:</strong> Responsive Design, Agile/Scrum, CI/CD, AWS
          </li>
        </ul>

        <h3>Work Experience</h3>
        <div className="job">
          <h4>Senior Web Developer - Tech Solutions Inc.</h4>
          <p className="job-period">January 2021 - Present</p>
          <ul>
            <li>
              Lead development of client-facing web applications using React and
              Node.js
            </li>
            <li>
              Implemented responsive designs that improved mobile user
              engagement by 40%
            </li>
            <li>
              Mentored junior developers and conducted code reviews to ensure
              quality standards
            </li>
            <li>
              Optimized application performance, reducing load times by 30%
            </li>
          </ul>
        </div>

        <div className="job">
          <h4>Web Developer - Digital Innovations LLC</h4>
          <p className="job-period">March 2018 - December 2020</p>
          <ul>
            <li>
              Developed and maintained multiple client websites using
              JavaScript, HTML, and CSS
            </li>
            <li>Created RESTful APIs using Node.js and Express</li>
            <li>Collaborated with designers to implement UI/UX improvements</li>
            <li>Integrated third-party services and payment gateways</li>
          </ul>
        </div>

        <h3>Education</h3>
        <div className="education">
          <h4>Bachelor of Science in Computer Science</h4>
          <p>University of Technology - Graduated 2018</p>
        </div>

        <h3>Projects</h3>
        <div className="project">
          <h4>E-commerce Platform</h4>
          <p>
            Built a full-stack e-commerce application with React, Node.js, and
            MongoDB. Features include user authentication, product catalog,
            shopping cart, and payment processing.
          </p>
        </div>

        <div className="project">
          <h4>Task Management App</h4>
          <p>
            Developed a responsive task management application with React and
            Firebase. Implemented real-time updates, drag-and-drop
            functionality, and user authentication.
          </p>
        </div>
      </section>
    </>
  );
}
