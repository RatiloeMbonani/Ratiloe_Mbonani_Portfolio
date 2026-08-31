import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Projects I've built.</h2>
        </Reveal>

        <div className="project-list">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) + 1}>
              <div className="project">
                <span className="project-num">0{i + 1}</span>
                <span className="project-title">{p.title}</span>
                <span className="project-desc">{p.desc}</span>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-link">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
