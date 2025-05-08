import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Portfolio</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Showcasing my work and skills in web development and design. Let's connect and build something amazing together.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Connect with me</h3>
            <div className="flex space-x-4">
              
              <a 
                href="https://www.linkedin.com/in/khushijain0488/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Khushi Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;