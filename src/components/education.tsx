import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const getIcon = (type: string) => {
  switch (type) {
    case 'education':
      return <GraduationCap size={20} />;
    case 'work':
      return <Briefcase size={20} />;
    default:
      return <Briefcase size={20} />;
  }
};

interface ExperienceProps {
  darkMode: boolean;
}

const education: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: "avanthi's research & technological academy",
      location: 'vizag,andhra pradesh',
      date: 'april 2025',
      description: 'I am a passionate Computer Science student specializing in Cybersecurity, with strong foundations in data structures, algorithms, operating systems, and computer networks. My academic journey and hands-on projects have helped me gain practical experience in software development.',
      gpa: '7.0/10'
    },
    {
      type: 'work',
      title: 'Java Full Stack Intern',
      organization: 'Project: Online House Renting System',
      location: 'vizag, andhra pradesh',
      date: 'Summer 2023',
      Project: 'Online House Renting System',
      achievements: ['BuiltBuilt a Java-based web application for online house rental management.', 'Implemented REST APIs for user login, bookings, and data handling.', 'Used PostgreSQL for secure and structured database management.','Focused on scalability, clean code, and reliable system design.']
    },
    {
      type: 'project',
      title: 'Software Developer intern ',
      organization: '',
      location: 'Remote',
      date: '2025- Present',
      description: 'I am currently working on the backend using Python and implementing the required APIs',
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? 'bg-gray-800 border-blue-500' 
                    : 'bg-white border-blue-500'
                }`}></div>
                
                <div className="ml-16 w-full">
                  <div className={`p-6 rounded-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-900 hover:bg-gray-850' 
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {getIcon(exp.type)}
                        </div>
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {exp.title}
                          </h3>
                          <p className={`text-sm ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`text-right text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.date}
                        </div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    
                    <p className={`text-sm mb-4 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    {exp.gpa && (
                      <div className={`mb-3 text-sm font-medium ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}>
                        GPA: {exp.gpa}
                      </div>
                    )}
                    
                    {exp.achievements && (
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className={`text-sm flex items-center ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;