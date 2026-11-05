import {
  SiCss3,
  SiElementor,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import {
  FaBrain,
  FaCode,
  FaCodePullRequest,
  FaComments,
  FaDatabase,
  FaKeyboard,
  FaPlug,
  FaPuzzlePiece,
  FaRobot,
  FaServer,
  FaTerminal,
  FaWandMagicSparkles,
} from "react-icons/fa6";
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
  wordpress: <SiWordpress />,
  woo: <SiWoocommerce />,
  elementor: <SiElementor />,
  plugin: <FaPuzzlePiece />,
  agent: <FaRobot />,
  llm: <FaBrain />,
  vibe: <FaWandMagicSparkles />,
  review: <FaCodePullRequest />,
  github: <SiGithub />,
  api: <FaServer />,
  mysql: <SiMysql />,
  rag: <FaDatabase />,
  mcp: <FaPlug />,
  chat: <FaComments />,
  prompt: <FaKeyboard />,
  terminal: <FaTerminal />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="primaryText">Tools I reach for every day</h2>
          <p className="secondaryText">
            From Laravel and React to RAG, MCP and AI agents: {profile.yearsExperience} years of shipping,
            with the review habits that keep it all solid.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <Reveal
              key={group.group}
              className={`skill-group${group.wide ? " wide" : ""}`}
              delay={(gi % 2) * 120}
            >
              <h3>
                {group.group} {group.sub && <span>{group.sub}</span>}
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
