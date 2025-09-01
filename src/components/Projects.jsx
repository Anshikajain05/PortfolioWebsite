import React from "react";
import MovieTrackerImg from "../assets/Project3.png";
import VidhyasetuImg from "../assets/Project1.png";
import PortfolioImg from "../assets/Project4.png";
import Personal from "../assets/Project2.png";

export default function Projects() {
  const projects = [
    {
      title: "Movie Tracker Web App",
      description: "Track your Movie Record and suggest your playlist to other(CSS + Javascript)",
      github: "https://github.com/Anshikajain05/Movie-Tracker",
     // demo: "#",
      image: MovieTrackerImg
    },
    {
      title: "Shikha Kendra Study Platform",
      description: "Upload and access study materials (React + Firebase).",
      github: "https://github.com/Anshikajain05/Shikha-kendra",
     // demo: "#",
      image: VidhyasetuImg
    },
    {
      title: "Interactive Portfolio",
      description: "This portfolio — built with React & Tailwind.",
      github: "https://github.com/Anshikajain05/PortfolioWebsite",
     // demo: "#",
      image: PortfolioImg
    },
     {
      title: "Personal Diary",
      description: "Track your Daily routine and make your important notes",
      github: "https://github.com/Anshikajain05/PersonalDiaryProject",
      //demo: "#",
      image: Personal
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-cyan-500 mb-6">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-gray-100 dark:bg-slate-700 text-sm rounded hover:bg-gray-200 dark:hover:bg-slate-600"
                  >
                    Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

