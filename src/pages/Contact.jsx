import React, { useState } from "react";
import { Github, Linkedin, Instagram, Youtube, Mail, MapPin, Send } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your backend / form service (e.g. Formspree, EmailJS)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's build something worth staying up for.</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {sent ? "Sent — thank you!" : "Send message"} <Send size={16} />
              </button>
            </form>

            <div className="socials">
              <a className="social-btn" href="https://github.com/RatiloeMbonani" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a className="social-btn" href="www.linkedin.com/in/ratiloe-mbonani" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a className="social-btn" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="contact-card">
              <div className="sun-mini" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Quick facts</span>
              <h3>Usually online after golden hour.</h3>
              <p>
                Open to internships,learnership, hackathons, and collaborations that mix
                good code with good design.
              </p>
              <div className="contact-detail">
                <Mail size={16} /> mratwalebogang@gmail.com
              </div>
              <div className="contact-detail">
                <MapPin size={16} /> South Africa
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
