import { FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "../../data/profile";
import Reveal from "../Reveal";
import "./Testimonials.css";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section alt" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="primaryText">What clients say</h2>
        </Reveal>

        <div className="t-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={`${t.name}-${i}`} className="t-card" delay={(i % 3) * 120}>
              <FaQuoteLeft className="t-quote" aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.title && <span>{t.title}</span>}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
