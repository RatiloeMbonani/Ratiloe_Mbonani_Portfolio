import React from "react";
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

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) + 1}>
              <div className="project-card">
                <div className="project-card-img">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-card-body">
                   <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-desc">{p.desc}</p>
                  <span className="project-card-role">Role:{p.role}</span>
                 
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="btn btn-outline project-link"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
