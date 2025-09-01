import React from "react";

export default function Education() {
  const items = [
    {
      degree: "B.Tech in Computer Science",
      school: "Dr. Harisingh Gour Vishwavidyalaya, Sagar (M.P.)",
      year: "2022 - Present",
      Percentage: "84.4%"
    },
    { degree: "12th (PCM)", school: "MP Board", year: "2021 - 2022",Percentage:"94%"},
    { degree: "10th", school: "MP Board", year: "2019 - 2020",Percentage:"94%"}
  ];

  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-cyan-500 mb-6">Education</h3>
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">{it.degree}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{it.school}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{it.Percentage}</div>  
                </div>
                 <div className="font-semibold text-gray-800 dark:text-gray-100">{it.year}</div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
