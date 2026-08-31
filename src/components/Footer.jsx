import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ratiloe Mbonani.</p>
      </div>
    </footer>
  );
}
