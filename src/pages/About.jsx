import React from "react";
import Reveal from "../components/Reveal";
import portraitImage from "../../images/Lebogang.jpeg";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2>Where Code Meets Creativity.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="portrait">
              <img
                src={portraitImage}
                alt="Ratiloe Mbonani"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-ring" />
              
            </div>

            <div className="facts">
              <div className="fact"><b>Based in</b> Cape Town,Western Cape</div>
              <div className="fact"><b>Studying</b> Information &amp; Communication Technology</div>
              <div className="fact"><b>Specialising in</b> Multimedia Design</div>
              <div className="fact"><b>Currently Working at</b> CAPACITI</div>
            </div>
          </Reveal>

          <Reveal delay={1} className="about-copy">
            <p>
             I’m Ratiloe, an ICT Multimedia student and aspiring Full-Stack Developer
              passionate about building digital experiences that are both functional 
              and visually engaging. My background in Multimedia Design has taught me to 
              think beyond just how an application works, I care about how people 
              experience it, interact with it, and connect with it.
            </p>
            <p>
             I enjoy taking an idea from concept and design through to a working digital solution.
             I actively participate in hackathons, tech events, workshops and developer communities,
              where I get to explore new technologies, collaborate with different people, solve 
              real-world problems and challenge myself outside the classroom. Every project and event
               is an opportunity to learn something new and become a better developer.
            </p>
            <p>
              My goal is to grow into a well-rounded Full-Stack Developer who combines strong 
              technical skills with a solid understanding of design, and user experience. I’m 
              constantly looking for opportunities to upskill, experiment, build meaningful 
              projects and stay curious about what’s next in technology.
            </p>

            <div className="cv-actions">
              <a
                className="btn btn-primary"
                href="/ratiloe-mbonani-cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
              <a className="btn btn-outline" href="/ratiloe-mbonani-cv.pdf" download>
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
