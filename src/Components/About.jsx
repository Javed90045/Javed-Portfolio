// src/components/About.js
import React from "react";
import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1s1oZHOqKQf9FV3FpO63nZxQ8GCPC8trA/view?usp=drive_link"; // Replace FILE_ID with your Google Drive file ID

  const qualifications = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      year: "2021 - 2024",
      institute: "Chhatrapati Shivaji Maharaj Institute of Technology",
    },
    {
      degree: "Diploma in Computer Engineering",
      year: "2017 - 2021",
      institute: "A.I. Abdul Razzak kalsekar Polytechnic",
    },
  ];

  const experience = [
    {
      role: "Web Developer Intern",
      company: "Mentor Institute of Technologies",
      duration: "May 2019 - August 2019",
      description:
        "Developed and maintained responsive user interfaces using Html, Css, JavaScript and Bootstrap. Collaborated with the design team to improve UI/UX.",
    },
    {
      role: "Web Developer Intern",
      company: "InternPe",
      duration: "1 month",
      description:
        "Worked with clients to create dynamic, user-friendly websites and web applications using modern web technologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Me</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
        I am a passionate Web developer with expertise in creating visually appealing and user-friendly web applications. I love solving problems, learning new technologies, and turning ideas into reality.
      </p>

      {/* Resume Download Button */}
      <div className="mb-12">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Qualifications Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-blue-600">
          <FaGraduationCap /> Qualifications
        </h3>
        <ul className="max-w-4xl mx-auto text-left space-y-6">
          {qualifications.map((item, index) => (
            <li
              key={index}
              className="p-6 bg-white shadow-lg rounded-md hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <h4 className="text-lg font-medium text-gray-800">{item.degree}</h4>
              <p className="text-sm text-gray-600">
                {item.year} | {item.institute}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-green-600">
          <FaBriefcase /> Experience
        </h3>
        <ul className="max-w-4xl mx-auto text-left space-y-6">
          {experience.map((item, index) => (
            <li
              key={index}
              className="p-6 bg-white shadow-lg rounded-md hover:shadow-xl transition-shadow border-l-4 border-green-500"
            >
              <h4 className="text-lg font-medium text-gray-800">{item.role}</h4>
              <p className="text-sm text-gray-600">
                {item.company} | {item.duration}
              </p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
