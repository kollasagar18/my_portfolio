import React from 'react';
import { Code, Database, Cpu, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
        
    
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}>
              
            </h3>
            <div className="space-y-4">
              <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}>
               I’m a dedicated computer science student with a strong passion for technology and innovation. While pursuing my degree, I have actively built projects and gained hands-on experience in software development.
              </p>
              <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}>
               My journey in computer science has provided me with a solid foundation in programming languages, algorithms, and software engineering principles. I am particularly interested in full-stack web development, machine learning, and AI-driven solutions that create a meaningful impact.
              </p>
              <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}>
                I'm actively seeking internship and entry-level opportunities where I can contribute to 
                meaningful projects while continuing to learn and grow as a developer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {highlight.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;