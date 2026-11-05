import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiReact,
} from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { profile, skills } from "../../data/profile";
import Reveal from "../Reveal";
import "./Skills.css";

const icons = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  js: <SiJavascript />,
  react: <SiReact />,
  php: <SiPhp />,
  laravel: <SiLaravel />,
  node: <SiNodedotjs />,
  express: <SiExpress />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="primaryText">My technical toolkit</h2>
          <p className="secondaryText">
            {profile.yearsExperience} years of hands-on work across the front end and the back end.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <Reveal key={group.group} className="skill-group" delay={gi * 120}>
              <h3>
                {group.group} <span>Development</span>
              </h3>
              <ul>
                {group.items.map((item) => {
                  const icon = icons[item.icon] ?? <FaCode />;
                  return (
                    <li key={item.name} className="skill-item">
                      <span className="skill-icon">{icon}</span>
                      <span className="skill-name">{item.name}</span>
                      <span className={`skill-level ${item.level.toLowerCase()}`}>{item.level}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
