import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Computing School Certificate (2023)',
      organization: 'XYZ',
      period: '2023',
      description: 'Recognized as an exceptional student, I have created excellence that makes me stand out as a good developer with amazing logical and coding skills.',
      category: 'education'
    },
    {
      title: 'Senior Front-End Developer',
      organization: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Led the development of multiple high-traffic web applications using React and Next.js. Mentored junior developers and implemented best practices.',
      category: 'work'
    },
    {
      title: 'Full Stack Developer',
      organization: 'Digital Innovations',
      period: '2019 - 2021',
      description: 'Developed and maintained web applications using the MERN stack. Collaborated with design and product teams to deliver user-focused solutions.',
      category: 'work'
    },
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors. Specialized in web development and artificial intelligence.',
      category: 'education'
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section className="py-20 bg-dark-700/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & <span className="text-secondary-400">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="flex justify-center mb-12 fade-in-section">
          <div className="inline-flex bg-dark-600/50 rounded-full p-1">
            {['all', 'work', 'education'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-secondary-500 text-dark-900'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-dark-600 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row fade-in-section ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 h-4 w-4 rounded-full bg-secondary-400 transform -translate-y-1/2 md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-dark-600/40 p-6 rounded-lg hover:bg-dark-600/60 transition-all duration-300 shadow-lg">
                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-display font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{exp.organization}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;