import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../../data/profile";
import Reveal from "../Reveal";
import "./Projects.css";

export default function Projects() {
  if (!projects.length) return null;

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2 className="primaryText">Featured projects</h2>
          <p className="secondaryText">A selection of things I&apos;ve designed, built and shipped.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" key={`${p.name}-${i}`} className="project-card" delay={(i % 3) * 120}>
              <div className="project-image">
                <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="secondaryText">{p.description}</p>
                {p.tags?.length > 0 && (
                  <ul className="project-tags">
                    {p.tags.map((t) => (
                      <li key={t} className="tag">{t}</li>
                    ))}
                  </ul>
                )}
                {(p.live || p.code) && (
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="button">
                        Live site <FaArrowUpRightFromSquare size={13} />
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="button outline">
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
