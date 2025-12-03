import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            <img
              src="https://i.im.ge/2025/04/09/pRka2x.1000196442.jpeg"
              alt="Professional headshot"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 z-10"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            } animate-fade-in-up`}
          >
            KOLLA SAGAR
          </h1>

          <h2
            className={`text-2xl md:text-3xl mb-8 ${
              darkMode ? 'text-blue-300' : 'text-blue-600'
            } animate-fade-in-up animation-delay-200`}
          >
            PYTHON DEVELOPER
          </h2>

          <p
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}
          >
            Passionate about building innovative and scalable solutions that solve
            real-world challenges. Skilled in full-stack development and
            problem-solving, with a strong focus on clean code, security, and user
            experience. Continuously learning and adapting to new technologies to
            deliver impactful software solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>

          {/* ✅ Resume Download Button */}
         
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/kollasagar18"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            } shadow-lg hover:shadow-xl`}
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            } shadow-lg hover:shadow-xl`}
          >
            <Linkedin size={24} />
          </a>

          <a
            href="kollasagar03@gmail.com"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            } shadow-lg hover:shadow-xl`}
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
          darkMode ? 'text-white' : 'text-gray-900'
        } animate-bounce`}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
