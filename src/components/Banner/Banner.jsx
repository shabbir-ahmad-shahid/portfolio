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
            <h2>Got an idea, a stuck project or code that needs a second look?</h2>
            <p>
              Website, web app, AI agent or code review, I&apos;m happy to help. I&apos;m{" "}
              {profile.availability.toLowerCase()}, so let&apos;s talk.
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
