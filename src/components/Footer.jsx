import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-slate-700 bg-white/40 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-300">© {year} Anshika — Built with ❤️ & React</div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
