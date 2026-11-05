import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks, profile } from "../../data/profile";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`n-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="container n-container" aria-label="Main">
        <a href="#home" className="n-brand" onClick={() => setOpen(false)}>
          <span className="monogram" aria-hidden="true">{profile.initials}</span>
          <span className="n-name">{profile.name}</span>
        </a>

        <div className={`n-menu ${open ? "open" : ""}`} id="n-menu">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="button n-cta" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </div>

        <button
          className="menu-icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="n-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </nav>
      {open && <div className="n-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
