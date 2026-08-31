import React from "react";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2>Code by day, sunsets by evening.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="portrait">
              {/* Swap this for <img src="/your-photo.jpg" alt="Ratiloe Mbonani" /> */}
              <div className="portrait-ring" />
              <span className="portrait-initials">RM</span>
            </div>

            <div className="facts">
              <div className="fact"><b>Based in</b> South Africa</div>
              <div className="fact"><b>Studying</b> Information &amp; Communication Technology</div>
              <div className="fact"><b>Specialising in</b> Multimedia Design</div>
              <div className="fact"><b>Currently</b> Full-Stack Development</div>
            </div>
          </Reveal>

          <Reveal delay={1} className="about-copy">
            <p>
              I'm Ratiloe — a student developer who fell in love with the moment a browser
              refreshes and a bug turns into a feature. I'm currently studying Information
              and Communication Technology, specialising in Multimedia Design, which means
              I care as much about how something looks as I do about how it works.
            </p>
            <p>
              Hackathons are where I feel most alive: the sleepless nights, the whiteboard
              chaos, the moment a team of strangers ships something real in 36 hours.
              I'm working my way toward becoming a full-stack developer, one project,
              one late-night deploy, at a time.
            </p>
            <p>
              Outside the editor, I'm usually chasing a sunset with my camera, editing the
              day's footage for my vlog, or hunting for the most aesthetically pleasing
              angle in a very ordinary room. I believe good design and good code come from
              the same place — a stubborn love for making things beautiful.
            </p>

            <div className="pillrow">
              <span className="pill">☕ chronic multitasker</span>
              <span className="pill">🌅 golden hour enjoyer</span>
              <span className="pill">🏆 hackathon regular</span>
              <span className="pill">🎬 storyteller at heart</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
