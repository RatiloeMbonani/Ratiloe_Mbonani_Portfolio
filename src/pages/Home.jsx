import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import useTypewriter from "../hooks/useTypewriter";

export default function Home() {
  const navigate = useNavigate();

  const typed = useTypewriter([
    "full-stack developer in progress.",
    "hackathon addict.",
    "visual storyteller.",
    "ICT student — multimedia design.",
  ]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="horizon" />
      </div>

      <div className="container hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow">Portfolio — 2026</span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="hero-title">
              Hey, I'm <em>Ratiloe Mbonani.</em>
            
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero-sub">
              I build things for the web, chase impossible deadlines at hackathons,
               and I'm always looking for the next thing to learn.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => navigate("/projects")}>
                View my work <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-outline" onClick={() => navigate("/contact")}>
                Let's talk
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="terminal">
            
            <div className="terminal-body">
              <div className="terminal-line">// whoami.js</div>
              <div>
                <span className="terminal-key">const</span> ratiloe = {"{"}
              </div>
              <div style={{ paddingLeft: 18 }}>
                role: <span className="terminal-str">"{typed}"</span>
                <span className="cursor" />
              </div>
              <div>{"}"}</div>
              <div className="terminal-line" style={{ marginTop: 18 }}>
                // studying ICT, specialising in multimedia design
              </div>
              <div className="terminal-line">// currently: growing, learning, upskilling</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
