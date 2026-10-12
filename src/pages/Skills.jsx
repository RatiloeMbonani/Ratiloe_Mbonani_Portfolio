import React from "react";
import { Code2, Sparkles, Camera, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import useReveal from "../hooks/useReveal";
import { skillGroups, tools } from "../data/skills";

const ICONS = { Code2, Sparkles, Camera };

function SkillBar({ name, value }) {
  const ref = useReveal();
  return (
    <div className="skill-row" ref={ref} style={{ "--fill": `${value}%` }}>
      <div className="skill-label">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section section-soft">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills &amp; tools</span>
          <h2>What I bring to the table.</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={(gi % 3) + 1}>
                <div className="skill-cat-head">
                  <Icon size={20} color="var(--pink)" />
                  <h3>{group.title}</h3>
                </div>
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} value={s.value} />
                ))}
              </Reveal>
            );
          })}
          <Reveal delay={3}>
            <div className="skill-cat-head">
              <Wrench size={20} color="var(--pink)" />
              <h3>Everyday Toolkit</h3>
            </div>
            <div>
              {tools.map((tool) => (
                <SkillBar key={tool.name} name={tool.name} value={tool.value} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
