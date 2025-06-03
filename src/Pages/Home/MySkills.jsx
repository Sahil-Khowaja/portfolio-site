import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaJs,
  FaAngular,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiPostgresql,
  SiSequelize,
  SiGraphql,
  SiVercel,
  SiHeroku,
} from "react-icons/si";
import data from "../../data/index.json";
const iconMap = {
  "React.js": <FaReact />,
  Angular: <FaAngular />,
  "Next.js": <SiNextdotjs />,
  Redux: <SiRedux />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  "Tailwind CSS": <SiTailwindcss />,
  MUI: <SiMui />,
  Bootstrap: <SiBootstrap />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,

  "Node.js": <FaNodeJs />,
  NestJS: <SiNestjs />,
  AdonisJS: <FaNodeJs />,
  "Express.js": <SiExpress />,

  MongoDB: <SiMongodb />,
  MySQL: <FaDatabase />,
  PostgreSQL: <SiPostgresql />,
  "Firebase (Realtime DB, Firestore)": <SiFirebase />,
  Sequelize: <SiSequelize />,
  Prisma: <SiPrisma />,

  "Git & GitHub": <FaGitAlt />,
  Docker: <FaDocker />,
  "RESTful APIs": <FaTools />,
  GraphQL: <SiGraphql />,
  AWS: <FaAws />,
  Heroku: <SiHeroku />,
  Vercel: <SiVercel />,
  "CI/CD Workflows": <FaTools />,
};

const skills = data.skills;

function SkillsSection() {
  return (
    <section className="skills-section" id="mySkills">
      <div className="skills-section-container">
        <h2 className="section-title">My Expertise</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="category-title">{category}</h3>
            <ul className="skills-list">
              {items.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="icon">{iconMap[skill] || <FaTools />}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
