import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const programmingLanguages: Skill[] = [
    { name: 'JavaScript', percentage: 90, color: 'bg-secondary-400' },
    { name: 'TypeScript', percentage: 85, color: 'bg-secondary-400' },
    { name: 'Python', percentage: 75, color: 'bg-secondary-400' },
    { name: 'PHP', percentage: 70, color: 'bg-secondary-400' },
    { name: 'Java', percentage: 60, color: 'bg-secondary-400' },
  ];

  const frontendTechnologies: Skill[] = [
    { name: 'React.js', percentage: 95, color: 'bg-primary-400' },
    { name: 'Next.js', percentage: 85, color: 'bg-primary-400' },
    { name: 'HTML/CSS', percentage: 90, color: 'bg-primary-400' },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-primary-400' },
    { name: 'Vue.js', percentage: 75, color: 'bg-primary-400' },
  ];

  const backendFrameworks: Skill[] = [
    { name: 'Node.js', percentage: 85, color: 'bg-secondary-400' },
    { name: 'Express.js', percentage: 80, color: 'bg-secondary-400' },
    { name: 'Django', percentage: 70, color: 'bg-secondary-400' },
    { name: 'Laravel', percentage: 65, color: 'bg-secondary-400' },
    { name: 'Spring Boot', percentage: 60, color: 'bg-secondary-400' },
  ];

  const toolsPlatforms: Skill[] = [
    { name: 'Git', percentage: 90, color: 'bg-primary-400' },
    { name: 'Docker', percentage: 75, color: 'bg-primary-400' },
    { name: 'AWS', percentage: 70, color: 'bg-primary-400' },
    { name: 'CI/CD', percentage: 80, color: 'bg-primary-400' },
    { name: 'Agile', percentage: 85, color: 'bg-primary-400' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillCategory = ({ title, skills, iconClass }: { title: string; skills: Skill[]; iconClass: string }) => (
    <div className="fade-in-section">
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-8 h-8 ${iconClass} rounded-full flex items-center justify-center text-dark-900`}>
          <span className="text-xs font-bold">{title.substring(0, 2)}</span>
        </div>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-300">{skill.name}</span>
              <span className="text-sm text-secondary-400 font-medium">{skill.percentage}%</span>
            </div>
            <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
              <div
                className={`h-full ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                style={{
                  width: animate ? `${skill.percentage}%` : '0%',
                  transitionDelay: `${index * 100}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-secondary-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SkillCategory 
            title="Programming Languages" 
            skills={programmingLanguages} 
            iconClass="bg-secondary-400"
          />
          
          <SkillCategory 
            title="Frontend Technologies" 
            skills={frontendTechnologies} 
            iconClass="bg-primary-400"
          />
          
          <SkillCategory 
            title="Backend & Database" 
            skills={backendFrameworks}
            iconClass="bg-secondary-400"
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            skills={toolsPlatforms}
            iconClass="bg-primary-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;