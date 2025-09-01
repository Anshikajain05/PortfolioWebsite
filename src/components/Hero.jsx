import React from "react";
import HeroImage from "../assets/devloper1.png" // Replace with your image or illustration


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-cyan-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 py-20">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-snug mb-6">
            Hey, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Anshika
            </span>
            , <br /> a developer who builds polished web experiences
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
            I create responsive, accessible, and elegant front-end applications using React, Tailwind CSS, and modern JavaScript. Focused on clean code, smooth UI, and continuous learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-400 transition transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          {/* Extra Info */}
          <div className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto lg:mx-0 space-y-2">
            <p>💼 Open to internships</p>
            <p>⚡ Enthusiastic learner</p>
            <p>👩‍💻 Exploring advanced React & Tailwind CSS</p>
            <p>🎯 Passionate about UI/UX design</p>
            <p>🌱 Always experimenting with new tools and frameworks</p>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-80 sm:w-96 lg:w-full">
            <img
              src={HeroImage}
              alt="Hero Illustration"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* Floating emojis */}
            <div className="absolute -top-6 -left-6 text-3xl animate-bounce">✨</div>
            <div className="absolute -bottom-6 -right-6 text-4xl animate-pulse">💻</div>
          </div>
        </div>

      </div>
    </section>
  );
}
