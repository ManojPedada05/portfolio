import React from 'react';
import { ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-secondary-400"></div>
              <p className="text-gray-300 text-sm uppercase tracking-wider">
                Hello, I'm YourName
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Full Stack
              <br />
              <span className="text-secondary-400">Developer</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
              A tech enthusiast focused on technology and expertise in Web,
              Mobile, and Software Development. Passionate about creating
              innovative solutions and building amazing apps.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-800 font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2"
              >
                View Projects <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-secondary-400 text-white hover:text-secondary-400 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Hire Me
              </button>
            </div>
            
            <div className="mt-10 flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-secondary-400 to-primary-500 opacity-75 blur"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Profile"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-dark-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;