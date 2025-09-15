import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
   {
  title: 'Cyber Security Solutions for Smart Cities using AI',
  description: [
    "Designed and implemented AI-driven security models to detect and mitigate cyber threats in smart city infrastructures.",
    "Developed a Python-based system to analyze security risks and propose real-time threat detection strategies.",
    "Created a detailed research report and presentation highlighting practical AI applications for urban cybersecurity.",
    "Explored integration of AI with IoT networks to enhance resilience, privacy, and anomaly detection in smart cities."
  ],
  technologies: ['Python', 'AI/ML', 'IoT Security', 'Cyber Security', 'Data Analysis'],
  image: 'https://www.ierek.com/news/wp-content/uploads/2024/12/1728928083038.png',
  githubUrl: 'https://drive.google.com/drive/folders/1_r2iJF8WdzzLcksV3yTCDYrbxGJKeLX3?usp=sharing',
  date: 'April  2025'
},
    {
  title: 'Banking System ',
  description: [
    "Developed a full-stack banking system using Flask and HTML templates.",
    "Implemented core banking features including account creation, deposits, withdrawals, and balance checks.",
    "Designed a clean UI with modular templates for user interaction.",
    "Integrated secure environment configurations for application setup and management."
  ],
  technologies: ['Python', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
  image: 'https://i.im.ge/2025/08/31/nrVZwh.Screenshot-2025-08-31-130030.png',
  liveUrl: 'https://your-project-demo-link.com',
  githubUrl: 'https://drive.google.com/drive/folders/1_r2iJF8WdzzLcksV3yTCDYrbxGJKeLX3?usp=sharing',
  date: 'August 2025'
},

   {
  title: 'Automated Call Bot System',
  description: [
  "Developed a Python-based call automation system to efficiently handle bulk phone calls with pre-recorded audio messages, reducing manual calling efforts.",
  "Implemented CSV-driven workflows for managing student/customer contact lists and automatically categorizing call outcomes as Interested, Not Answered, or Not Interested.",
  "Added robust error handling with failed call logging and retry mechanisms, ensuring higher reliability and successful call completion rates.",
  "Configured secure environment variables for API integrations and utilized Ngrok for remote testing, enabling seamless webhook communication and deployment flexibility.",
  "Enhanced engagement tracking by storing categorized call responses in structured CSV reports for better decision-making and campaign analysis.",
  "The project is still in progress, with planned modifications and additional features to improve scalability, integration with advanced telephony APIs, and real-time analytics."
],
  technologies: ['Python', 'Flask/FastAPI (if used)', 'CSV Handling', 'Ngrok', 'Telephony APIs'],
  image: 'https://a4f8b050.delivery.rocketcdn.me/wp-content/uploads/2025/04/Call-Center-Automation-with-AI-Voice-Bot.jpg' ,

  githubUrl: 'https://drive.google.com/drive/folders/1_r2iJF8WdzzLcksV3yTCDYrbxGJKeLX3?usp=sharing',
  date: 'August 2025'
},
    {
  title: 'AI Email Sender',
  description: [
    "Built a web-based AI-powered email automation tool to simplify bulk email sending.",
    "Developed the front-end using HTML, CSS, and JavaScript for a simple and user-friendly interface.",
    "Integrated backend logic for handling email requests and applied AI-driven enhancements for personalization.",
    "Implemented secure configurations and error-handling mechanisms to ensure reliable email delivery.",
    "Optimized workflows for bulk sending, with features like retry logic and delivery status tracking."
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'AI/Automation'],
  image: 'https://i.im.ge/2025/09/01/nuLgxa.Screenshot-2025-09-01-003408.png',

  githubUrl: 'https://drive.google.com/drive/folders/1_r2iJF8WdzzLcksV3yTCDYrbxGJKeLX3?usp=sharing',// 🔗 Replace with your repo link
  date: 'January 2025'
},

    {
  title: 'Online House Rental System',
  description: [
    "Developed a full-stack Java web application for managing house rental bookings with both front-end and back-end integration.",
    "Contributed to the front-end using HTML, CSS, and JavaScript frameworks to build a responsive and user-friendly interface.",
    "Designed and implemented RESTful APIs for user authentication, booking management, and system integration.",
    "Established a secure database architecture and followed best practices for code structure, API design, and data security.",
    "Ensured scalability and reliability by applying modular design principles and testing workflows."
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'PostgreSQL/Database'],
  image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
 
  githubUrl: 'https://drive.google.com/drive/folders/1_r2iJF8WdzzLcksV3yTCDYrbxGJKeLX3?usp=sharing',
  date: 'December 2024'
}

  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
           Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A selection of projects that highlight my skills, problem-solving approach, and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 shadow-xl hover:shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <div className={`flex items-center text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;