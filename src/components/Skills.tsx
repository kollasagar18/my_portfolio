import React from "react";

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      category: "Programming Languages",
      description: "Languages I use for backend development and problem solving",
      skills: ["Python", "Java", "MySQL", "PostgreSQL"],
    },
    {
      category: "Web Technologies",
      description: "Frameworks and technologies used in web applications",
      skills: ["Django", "Flask", "HTML", "CSS", "REST APIs"],
    },
    {
      category: "Libraries & Data Tools",
      description: "Libraries used for data analysis and visualization",
      skills: ["NumPy", "Pandas", "Matplotlib"],
    },
    {
      category: "Tools & Platforms",
      description: "Tools I use for development, testing, and deployment",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Netlify"],
    },
    {
      category: "Problem Solving & Coding",
      description: "Competitive coding and algorithmic practice",
      skills: [
        "LeetCode – 150+ problems solved",
        "HackerRank – 3 ⭐ Problem Solving",
        "Strong in DSA basics",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technologies and tools I’ve worked with through academics,
            projects, and hands-on practice.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 shadow-xl"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {category.category}
              </h3>

              <p
                className={`text-sm mb-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {category.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      darkMode
                        ? "bg-blue-900/40 text-blue-300 border border-blue-700"
                        : "bg-blue-100 text-blue-800 border border-blue-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
