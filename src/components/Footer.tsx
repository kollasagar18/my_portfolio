import React from 'react';
import { Heart, Code } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-950' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4 flex items-center justify-center space-x-2">
            
            <span>KOLLA SAGAR</span>
          </p>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KOLLA SAGAR All rights reserved.
          </p>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-xs">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;