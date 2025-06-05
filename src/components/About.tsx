import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-700/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-secondary-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Who am I?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a Full Stack Developer with expertise in building responsive, 
              accessible web applications using modern JavaScript frameworks. 
              With 5+ years of experience, I've worked on various projects 
              ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-300 mb-6">
              My approach to development combines technical excellence with 
              creative problem-solving. I'm passionate about creating clean, 
              efficient code and delivering exceptional user experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge 
              through blog posts and community events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-section">
            <div className="bg-dark-600/30 p-6 rounded-lg">
              <h4 className="font-display font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 bg-secondary-400 mr-2 rounded-full"></span>
                Education & History
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Computer Science (2017-2021)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Frontend Development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Problem Solving</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-600/30 p-6 rounded-lg">
              <h4 className="font-display font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 bg-secondary-400 mr-2 rounded-full"></span>
                Services I Provide
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Web Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Mobile App Development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-secondary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">UI/UX Design</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-600/30 p-6 rounded-lg">
              <h4 className="font-display font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 bg-primary-400 mr-2 rounded-full"></span>
                Tools & Platforms
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">VS Code, Git, Docker</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">AWS, Vercel, Netlify</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Figma, Adobe XD</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-600/30 p-6 rounded-lg">
              <h4 className="font-display font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 bg-primary-400 mr-2 rounded-full"></span>
                Interests & Hobbies
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Open Source Contributing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Tech Blogging</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300 text-sm">Photography</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;