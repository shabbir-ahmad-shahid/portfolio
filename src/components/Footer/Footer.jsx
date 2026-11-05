import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { navLinks, profile } from "../../data/profile";
import "./Footer.css";

export default function Footer() {
  const { contact } = profile;
  const socials = [
    { href: contact.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
    { href: contact.github, label: "GitHub", icon: <FaGithub /> },
    {
      href: contact.phoneIntl && `https://wa.me/${contact.phoneIntl.replace(/\D/g, "")}`,
      label: "WhatsApp",
      icon: <FaWhatsapp />,
    },
    { href: `mailto:${contact.email}`, label: "Email", icon: <FaEnvelope /> },
  ].filter((s) => s.href);

  return (
    <footer className="f-wrapper">
      <div className="container f-container">
        <div className="f-brand">
          <a href="#home" className="f-name">
            <span className="monogram" aria-hidden="true">{profile.initials}</span>
            {profile.name}
          </a>
          <p>
            {profile.role} · {profile.tagline}
          </p>
        </div>

        <nav className="f-links" aria-label="Footer">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="f-socials">
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
      </div>
      <p className="f-copy">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
