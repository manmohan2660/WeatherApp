import React, { useState, useEffect } from "react";
import "./ThemeToggle.css"; // Import the CSS file

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
