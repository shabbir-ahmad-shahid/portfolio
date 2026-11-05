import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaRobot } from "react-icons/fa6";
import { SiLaravel, SiReact, SiWordpress } from "react-icons/si";
import { profile, skills } from "../../data/profile";
import "./Hero.css";

export default function Hero() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0);
  const stats = [
    { value: profile.yearsExperience, label: "Years experience" },
    { value: profile.projectsCount, label: "Projects delivered" },
    { value: techCount, label: "Skills & tools" },
  ];
  const socials = [
    { href: profile.contact.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
    { href: profile.contact.github, label: "GitHub", icon: <FaGithub /> },
    { href: `mailto:${profile.contact.email}`, label: "Email", icon: <FaEnvelope /> },
  ].filter((s) => s.href);

  return (
    <section className="h-wrapper" id="home">
      <div className="container h-container">
        <div className="h-left">
          <span className="h-badge">
            <span className="dot" aria-hidden="true" /> {profile.availability}
          </span>
          <h1 className="h-title">
            <span>Hi, I&apos;m {profile.shortName}</span>
            <br />
            {profile.role}
          </h1>
          <p className="h-tagline">{profile.tagline}</p>
          <p className="secondaryText h-intro">{profile.intro}</p>

          <div className="h-buttons">
            <a href="#contact" className="button">
              Let&apos;s talk <FaArrowRight />
            </a>
            <a href="#projects" className="button outline">
              View my work
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} className="button outline" download>
                <FaDownload /> CV
              </a>
            )}
          </div>

          {socials.length > 0 && (
            <div className="h-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}

          <dl className="h-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="h-right">
          <div className="image-container">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="float-badge b-top">
            <span className="b-icon"><FaRobot /></span>
            <span>
              <strong>RAG · MCP · Agents</strong>
              <small>AI that does real work</small>
            </span>
          </div>
          <div className="float-badge b-bottom">
            <span className="b-icon laravel"><SiLaravel /></span>
            <span className="b-icon react"><SiReact /></span>
            <span className="b-icon wp"><SiWordpress /></span>
            <span>
              <strong>Laravel · React · WP</strong>
              <small>Full-stack & WordPress</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
