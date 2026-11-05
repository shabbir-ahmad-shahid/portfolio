import { FaArrowRight } from "react-icons/fa6";
import { profile } from "../../data/profile";
import Reveal from "../Reveal";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner-wrapper">
      <div className="container">
        <Reveal className="banner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>
              I&apos;m {profile.availability.toLowerCase()}. Let&apos;s turn your idea into a fast,
              reliable web app.
            </p>
          </div>
          <a href="#contact" className="button banner-btn">
            Start a conversation <FaArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
