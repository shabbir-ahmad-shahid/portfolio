import { FaBriefcase } from "react-icons/fa6";
import { experience } from "../../data/profile";
import Reveal from "../Reveal";
import "./Experience.css";

export default function Experience() {
  if (!experience.length) return null;

  return (
    <section className="section alt" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="primaryText">Where I&apos;ve worked</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${i}`} className="timeline-item" delay={i * 120}>
              <span className="timeline-dot" aria-hidden="true">
                <FaBriefcase />
              </span>
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="tag">{job.period}</span>
                </div>
                {job.points?.length > 0 && (
                  <ul>
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
