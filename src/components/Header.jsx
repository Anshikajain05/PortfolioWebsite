import React, { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const preferred = localStorage.getItem("theme");
    const dark = preferred === "dark" || (!preferred && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const go = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => go("home")} className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Anshika</button>
            <span className="hidden sm:inline-block text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-sm">{isDark ? "Light" : "Dark"}</button>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2 rounded-md bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
            >
              <span className="sr-only">Menu</span>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col gap-3">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="text-left px-2 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


