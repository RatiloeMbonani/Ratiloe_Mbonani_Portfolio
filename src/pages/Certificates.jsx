import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Certifications</span>
          <h2 className="cert-heading">Courses &amp; certificates I've completed.</h2>
        </Reveal>

        <div className="cert-grid">
          {certificates.map((certificate, i) => (
            <Reveal key={certificate.title} delay={(i % 3) + 1}>
              <article className="cert-card">
                <h3 className="cert-title">{certificate.title}</h3>
                <p className="cert-meta">
                  {certificate.issuer} &middot; {certificate.date}
                </p>
                <a
                  className="cert-verify"
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View<ExternalLink size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
