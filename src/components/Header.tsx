import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-800/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-display font-bold text-white">
              <span className="text-secondary-400">Your</span>Name
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            {['home', 'about', 'skills', 'portfolio', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-secondary-400 transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-700/95 backdrop-blur-md shadow-xl">
            <ul className="flex flex-col py-4">
              {['home', 'about', 'skills', 'portfolio', 'contact'].map(
                (item) => (
                  <li key={item} className="border-b border-gray-700/30 last:border-0">
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 hover:text-secondary-400 transition-colors py-3 px-6 w-full text-left font-medium text-sm uppercase tracking-wider"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;