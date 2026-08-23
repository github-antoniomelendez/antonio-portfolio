"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition <
            section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Antonio<span>.</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}