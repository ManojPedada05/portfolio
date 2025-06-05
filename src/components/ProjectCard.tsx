import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Project } from '../types/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-dark-700/50 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-secondary-500/10 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-dark-900 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.codeUrl && (
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
              >
                <Code size={18} />
              </a>
            )}
          </div>
        </div>
        {project.tag && (
          <span className="absolute top-3 right-3 bg-secondary-500 text-dark-900 text-xs font-medium px-2 py-1 rounded">
            {project.tag}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-dark-600/80 text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;