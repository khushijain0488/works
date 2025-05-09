import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },

  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'SQL', level: 75, category: 'backend' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'Git', level: 80, category: 'other' },
  { name: 'Testing', level: 65, category: 'other' },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full skill-progress-bar"
          style={{
            width: `${skill.level}%`,
            background: getSkillColor(skill.category),
          }}
        ></div>
      </div>
    </div>
  );
};

function getSkillColor(category: string): string {
  switch (category) {
    case 'frontend':
      return 'linear-gradient(to right, #3B82F6, #60A5FA)';
    case 'backend':
      return 'linear-gradient(to right, #0D9488, #2DD4BF)';
    case 'design':
      return 'linear-gradient(to right, #8B5CF6, #A78BFA)';
    case 'other':
      return 'linear-gradient(to right, #F97316, #FB923C)';
    default:
      return 'linear-gradient(to right, #3B82F6, #60A5FA)';
  }
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 transition-all duration-1000 delay-${delay}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars when visible
            const skillBars = entry.target.querySelectorAll('.skill-progress-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const designSkills = skills.filter((skill) => skill.category === 'design');
  const otherSkills = skills.filter((skill) => skill.category === 'other');

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career. Here's a snapshot of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={200} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={400} />
          <SkillCategory title="Design" skills={designSkills} delay={600} />
          <SkillCategory title="Other Skills" skills={otherSkills} delay={800} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
