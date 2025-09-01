import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I'm a Computer Science student and a passionate developer. I enjoy building elegant,
          accessible, and performant web applications. I focus on user experience, clean code, and continuous learning.
        </p>

        {/* Contact & Social Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 text-gray-700 dark:text-gray-300">
          <a href="mailto:yourmail@example.com" className="flex items-center gap-2 hover:text-cyan-500 transition">
            <FaEnvelope /> anshika31102005@gmail.com
          </a>
          <a href="tel:+918982030934" className="flex items-center gap-2 hover:text-cyan-500 transition">
            <FaPhone /> +91 8982030934
          </a>
          <a href="https://www.linkedin.com/in/anshika-jain41665025a " target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500 transition">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Anshikajain05 " target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500 transition">
            <FaGithub /> GitHub
          </a>
          <a href="https://leetcode.com/TechRun" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500 transition">
            <FaLaptopCode /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}
