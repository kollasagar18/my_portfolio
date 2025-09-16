import React from "react";
import { ExternalLink } from "lucide-react";

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: "Privacy and Security in Online Social Media",
      company: "NPTL",
      url: "https://i.im.ge/2025/07/01/JaY3PS.1000255195.png",
      date: "May 2024",
    },
    {
      title: "JAVA FULL STACK",
      company: "Data Pro",
      url: "https://i.im.ge/2025/04/15/vQ0RMz.1000216202.jpeg",
      date: "Aug 2023",
    },
    {
      title: "CHAT GPT/GENERATIVE AI",
      company: "INTERNTIONAL INSTITUTE OF DIGITAL TECHNOLOGIES",
      url: "https://i.im.ge/2025/04/15/vQ5hTS.1000216227.png",
      date: "Jul 2024",
    },{
      title: "DATA SCIENE",
      company: "IBM Skills Build",
      url:"https://i.im.ge/2025/04/15/vQ5Kor.1000216229.png",
      date: "aug  2024",
    },{
      title: "CHAT GPT & AI TOOLS WORKSHOP",
      company: "BE10X",
      url: "https://i.im.ge/2025/06/10/veVI90.1000246738.png",
      date: "aug 203"
    },{
      title: "DATA SCIENCE",
      company: "Data Pro",
      url: "https://i.im.ge/2025/06/10/veVhQc.1000224801.jpeg",
      date: "apr 2025",
    },{
      title: "S.S.S VOCATIONAL COURSE",
      company: "BSE OF AP",
      url: "https://i.im.ge/2025/06/10/veV0xG.1000219268.jpeg",
      date: "January 2019",
    },
  ];

  return (
    <section
      id="certifications"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Some certifications I have earned to strengthen my skills.
          </p>
        </div>

        {/* Certifications List */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 shadow-xl hover:shadow-2xl"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`text-sm mb-1 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {cert.company}
                </p>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {cert.date}
                </p>
              </div>

              {/* Button */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 mt-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-all"
              >
                View Certificate
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
