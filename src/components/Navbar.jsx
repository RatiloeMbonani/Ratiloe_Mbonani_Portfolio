import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import useTheme from "../hooks/useTheme";

const NAV_ITEMS = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/certificates", label: "certificates" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) => `nav-btn ${isActive ? "active" : ""}`;

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          ratiloe mbonani<span>.</span>
        </NavLink>

        <div className="nav-actions">
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <button className="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav-mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
