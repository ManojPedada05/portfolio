import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-secondary-500 hover:bg-secondary-600 text-dark-900 rounded-full mx-auto mb-10 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              <span className="text-secondary-400">Your</span>Name
            </h3>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              A passionate full-stack developer focused on creating innovative and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Let's work together to make it happen.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 text-dark-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed and developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;