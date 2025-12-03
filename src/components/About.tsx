import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Content Only (No Photo Column) */}
        <div className="max-w-3xl mx-auto space-y-6">
          
          <h3
            className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Computer Science Student
          </h3>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I’m a dedicated computer science student with a strong passion for
            technology and innovation. While pursuing my degree, I have actively
            built projects and gained hands-on experience in software
            development.
          </p>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My journey in computer science has provided me with a solid foundation
            in programming languages, algorithms, and software engineering
            principles. I am particularly interested in full-stack web development,
            machine learning, and AI-driven solutions that create a meaningful
            impact.
          </p>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm actively seeking internship and entry-level opportunities where I
            can contribute to meaningful projects while continuing to learn and
            grow as a developer.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
