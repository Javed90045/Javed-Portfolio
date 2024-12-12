// src/components/Skills.js
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; // Import icons
import { SiTailwindcss, SiRedux } from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: "💡" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Communication", icon: "🗣️" },
    { name: "Adaptability", icon: "🌟" },
    { name: "Time Management", icon: "⏳" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Below are my technical and soft skills, presented with visual badges for a more engaging experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <ul className="flex flex-wrap gap-4 justify-center">
            {technicalSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-blue-100 text-blue-700 py-2 px-4 rounded shadow-sm"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <ul className="flex flex-wrap gap-4 justify-center">
            {softSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-green-100 text-green-700 py-2 px-4 rounded shadow-sm"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
