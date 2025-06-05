import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-secondary-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, including web development and design projects
          </p>
        </div>
        
        <div className="flex justify-center mb-12 fade-in-section">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-secondary-500 text-dark-900'
                    : 'bg-dark-600/50 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;