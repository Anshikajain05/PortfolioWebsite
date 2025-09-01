import React from "react";

export default function Skills() {
  const technical = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Power_BI_logo.svg" },
    { name: "MS Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
    { name: "PowerPoint", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microsoft_PowerPoint_2013-2019_logo.svg" },
    { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Canva_Logo.png" }
  ];

  const soft = [
    { name: "Problem Solving & Critical Thinking", logo: "https://img.icons8.com/ios-filled/50/00bcd4/idea.png" },
    { name: "Interpersonal Communication", logo: "https://img.icons8.com/ios-filled/50/00bcd4/conference-call.png" },
    { name: "Creativity & Innovation", logo: "https://img.icons8.com/ios-filled/50/00bcd4/creativity.png" },
    { name: "Teamwork & Leadership", logo: "https://img.icons8.com/ios-filled/50/00bcd4/teamwork.png" },
    { name: "Quick Learner", logo: "https://img.icons8.com/ios-filled/50/00bcd4/reading.png" },
    { name: "Time Management", logo: "https://img.icons8.com/ios-filled/50/00bcd4/time-machine.png" }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold text-cyan-500 mb-6">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {technical.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 hover:shadow-lg transition"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain mb-2" />
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">{tech.name}</div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold text-cyan-500 mb-6">Soft Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {soft.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 hover:shadow-lg transition"
            >
              <img src={s.logo} alt={s.name} className="w-10 h-10 object-contain mb-2" />
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
