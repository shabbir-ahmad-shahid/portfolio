import { FaCode, FaLayerGroup, FaServer } from "react-icons/fa6";
import { about, profile } from "../../data/profile";
import Reveal from "../Reveal";
import "./About.css";

const serviceIcons = {
  frontend: <FaCode />,
  backend: <FaServer />,
  fullstack: <FaLayerGroup />,
};

export default function About() {
  const facts = [
    { label: "Name", value: profile.name },
    { label: "Role", value: profile.role },
    { label: "Experience", value: `${profile.yearsExperience} years` },
    { label: "Location", value: profile.location },
    {
      label: "Email",
      value: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>,
    },
    { label: "Status", value: profile.availability },
  ].filter((f) => f.value);

  return (
    <section className="section alt" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2 className="primaryText">Who I am & what I do</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="secondaryText">{p}</p>
            ))}
            <dl className="about-facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="about-services">
            {about.services.map((s, i) => (
              <Reveal key={s.title} className="service-card" delay={i * 120}>
                <span className="service-icon">{serviceIcons[s.icon]}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p className="secondaryText">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
