import { FaComments, FaPlug, FaRobot, FaWandMagicSparkles } from "react-icons/fa6";
import { ai } from "../../data/profile";
import Reveal from "../Reveal";
import "./AIWork.css";

const icons = {
  chat: <FaComments />,
  agent: <FaRobot />,
  mcp: <FaPlug />,
  spark: <FaWandMagicSparkles />,
};

export default function AIWork() {
  return (
    <section className="section ai-section" id="ai">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">AI Engineering</span>
          <h2 className="primaryText">AI that does real work</h2>
          <p className="secondaryText">{ai.intro}</p>
        </Reveal>

        <div className="ai-grid">
          <div>
            <h3 className="ai-col-title">What I build with AI</h3>
            <div className="ai-builds">
              {ai.builds.map((b, i) => (
                <Reveal key={b.title} className="ai-card" delay={(i % 2) * 120}>
                  <span className="ai-icon">{icons[b.icon]}</span>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="ai-workflow" delay={120}>
            <h3 className="ai-col-title">How I build with AI</h3>
            <ol>
              {ai.workflow.map((w, i) => (
                <li key={w.title}>
                  <span className="ai-step">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {ai.stack?.length > 0 && (
          <Reveal as="ul" className="ai-stack" aria-label="AI tools and techniques">
            {ai.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
