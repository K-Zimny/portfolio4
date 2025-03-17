import PageHeader from "@/components/pageheader/PageHeader";

export default function skills() {
  return (
    <>
      <PageHeader title="Skills" />

      <ul>
        <li>
          Frontend Development
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>
              Modern Frameworks
              <ul>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Angular</li>
              </ul>
            </li>
            <li>CSS Preprocessors (SASS/LESS)</li>
            <li>Responsive Design</li>
            <li>UI/UX Principles</li>
          </ul>
        </li>
        <li>
          Backend Development
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful API Design</li>
            <li>GraphQL</li>
            <li>
              Database Management
              <ul>
                <li>SQL (MySQL, PostgreSQL)</li>
                <li>NoSQL (MongoDB, Firebase)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          DevOps & Tools
          <ul>
            <li>Version Control (Git)</li>
            <li>CI/CD Pipelines</li>
            <li>Docker</li>
            <li>AWS/Azure/GCP</li>
          </ul>
        </li>
        <li>
          Professional Skills
          <ul>
            <li>Problem Solving</li>
            <li>Technical Documentation</li>
            <li>Agile Methodologies</li>
            <li>Team Collaboration</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
