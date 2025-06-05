import React from 'react';
import { 
  Layers, 
  Database, 
  Server, 
  Layout, 
  Smartphone
} from 'lucide-react';

const Technologies = () => {
  const techs = [
    { 
      icon: <Layout size={24} />, 
      name: 'Frontend', 
      description: 'Creating responsive and interactive user interfaces'
    },
    { 
      icon: <Server size={24} />, 
      name: 'Backend', 
      description: 'Building robust server-side applications'
    },
    { 
      icon: <Database size={24} />, 
      name: 'Database', 
      description: 'Managing and optimizing data storage'
    },
    { 
      icon: <Smartphone size={24} />, 
      name: 'Mobile', 
      description: 'Developing cross-platform mobile applications'
    },
    { 
      icon: <Layers size={24} />, 
      name: 'DevOps', 
      description: 'Streamlining deployment and CI/CD pipelines'
    },
  ];

  return (
    <section className="py-20 bg-dark-700/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies I <span className="text-secondary-400">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The tools and frameworks I use to bring ideas to life
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-8 fade-in-section">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="w-20 flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-xl bg-dark-600/80 flex items-center justify-center text-secondary-400 mb-3">
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;