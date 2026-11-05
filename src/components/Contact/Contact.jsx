import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { profile } from "../../data/profile";
import Reveal from "../Reveal";
import "./Contact.css";

export default function Contact() {
  const { contact } = profile;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const modes = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      action: "Send email",
    },
    contact.phone && {
      icon: <FaPhone />,
      title: "Call",
      value: contact.phone,
      href: `tel:${contact.phoneIntl || contact.phone}`,
      action: "Call now",
    },
    contact.phoneIntl && {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: contact.phone,
      href: `https://wa.me/${contact.phoneIntl.replace(/\D/g, "")}`,
      action: "Chat now",
      external: true,
    },
    contact.linkedin && {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      href: contact.linkedin,
      action: "View profile",
      external: true,
    },
  ].filter(Boolean);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend needed: opens the visitor's email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="primaryText">Let&apos;s work together</h2>
          <p className="secondaryText">
            Got a project, a job opening or a question? Reach out. I usually reply within a day.
          </p>
        </Reveal>

        <div className="c-grid">
          <Reveal className="c-modes">
            {modes.map((m) => (
              <a
                key={m.title}
                href={m.href}
                className="c-mode"
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noreferrer" : undefined}
              >
                <span className="c-icon">{m.icon}</span>
                <span className="c-detail">
                  <strong>{m.title}</strong>
                  <span>{m.value}</span>
                </span>
                <span className="c-action">{m.action}</span>
              </a>
            ))}
          </Reveal>

          <Reveal as="form" className="c-form" onSubmit={submit} delay={120}>
            <div className="c-row">
              <label>
                <span>Your name</span>
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label>
                <span>Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input name="subject" value={form.subject} onChange={update} />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={6} value={form.message} onChange={update} required />
            </label>
            <button type="submit" className="button">
              Send message <FaPaperPlane />
            </button>
            {sent && (
              <p className="c-note" role="status">
                Your email app should open with the message ready to send.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
