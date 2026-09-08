import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner" style={{ justifyContent: "center", textAlign: "center" }}>
        <p>©{new Date().getFullYear()} Ratiloe Lebogang Mbonani.All Rights Reserved</p>
      </div>
    </footer>
  );
}
