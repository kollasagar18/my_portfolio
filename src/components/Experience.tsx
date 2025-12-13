import React from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      organization: "Avanthi's Research & Technological Academy",
      location: "Vizag, Andhra Pradesh",
      date: "April 2025",
      description:
        "Computer Science student specializing in Cybersecurity with strong foundations in Data Structures, Algorithms, Operating Systems, and Computer Networks. Gained hands-on experience through academic and project-based learning.",
      gpa: "7.0 / 10",
    },
  ];

  const experience = [
    {
      title: "Java Full Stack Intern",
      organization: "Online House Renting System (Project)",
      location: "Vizag, Andhra Pradesh",
      date: "Summer 2023",
      achievements: [
        "Developed a Java-based web application for online house rental management.",
        "Implemented REST APIs for user authentication, bookings, and data handling.",
        "Used PostgreSQL for secure and structured database management.",
        "Focused on scalability, clean code, and reliable system design.",
      ],
    },
    {
      title: "Software Developer Intern",
      organization: "Remote",
      location: "Remote",
      date: "2025",
      description:
        "Currently working on backend development using Python and building REST APIs to support application features.",
    },
  ];

  const TimelineCard = ({
    icon,
    title,
    organization,
    location,
    date,
    description,
    gpa,
    achievements,
  }: any) => (
    <div className="relative flex items-start">
      <div
        className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
          darkMode
            ? "bg-gray-800 border-blue-500"
            : "bg-white border-blue-500"
        }`}
      ></div>

      <div className="ml-16 w-full">
        <div
          className={`p-6 rounded-xl transition-all duration-300 ${
            darkMode
              ? "bg-gray-900 hover:bg-gray-800"
              : "bg-white shadow-md hover:shadow-lg"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-blue-900/50 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {icon}
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {organization}
                </p>
              </div>
            </div>

            <div
              className={`text-right text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {date}
              </div>
              <div>{location}</div>
            </div>
          </div>

          {description && (
            <p
              className={`text-sm mb-4 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          )}

          {gpa && (
            <div
              className={`mb-3 text-sm font-medium ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              GPA: {gpa}
            </div>
          )}

          {achievements && (
            <div className="space-y-1">
              {achievements.map((item: string, i: number) => (
                <div
                  key={i}
                  className={`text-sm flex items-center ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* EDUCATION */}
        <h3
          className={`text-2xl font-semibold mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Education
        </h3>

        <div className="relative mb-20">
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <TimelineCard key={i} icon={<GraduationCap size={20} />} {...edu} />
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <h3
          className={`text-2xl font-semibold mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Experience
        </h3>

        <div className="relative">
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <TimelineCard key={i} icon={<Briefcase size={20} />} {...exp} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
