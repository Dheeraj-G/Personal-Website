import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud } from 'lucide-react';

const skillLinks: Record<string, string> = {
  // Programming Languages
  'Java': 'https://www.java.com',
  'Python': 'https://www.python.org',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org',
  'C': 'https://en.cppreference.com/w/c',
  'C++': 'https://isocpp.org',
  'Swift': 'https://www.swift.org',
  'Ruby': 'https://www.ruby-lang.org',
  'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  // Libraries/Frameworks
  'NumPy': 'https://numpy.org',
  'PyTorch': 'https://pytorch.org',
  'YOLO': 'https://ultralytics.com',
  'Spring Boot': 'https://spring.io/projects/spring-boot',
  'Flask': 'https://flask.palletsprojects.com',
  'Node.js': 'https://nodejs.org',
  'Next.js': 'https://nextjs.org',
  'Vue.js': 'https://vuejs.org',
  'React.js': 'https://react.dev',
  'Angular': 'https://angular.io',
  // Technologies
  'Linux/Unix': 'https://www.linux.org',
  'Git': 'https://git-scm.com',
  'Docker': 'https://www.docker.com',
  'Bash': 'https://www.gnu.org/software/bash',
  'AWS': 'https://aws.amazon.com',
  'Kubernetes': 'https://kubernetes.io',
  'Neo4j': 'https://neo4j.com',
  'Anaconda': 'https://www.anaconda.com',
};

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Swift', 'Ruby', 'HTML', 'CSS'],
  },
  {
    icon: Database,
    title: 'Libraries/Frameworks',
    skills: ['NumPy', 'PyTorch', 'YOLO', 'Spring Boot', 'Flask', 'Node.js', 'Next.js', 'Vue.js', 'React.js', 'Angular'],
  },
  {
    icon: Cloud,
    title: 'Technologies',
    skills: ['Linux/Unix', 'Git', 'Docker', 'Bash', 'AWS', 'Kubernetes', 'Neo4j', 'Anaconda'],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-skills-heading"
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold" data-testid={`text-skill-category-${index}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const skillUrl = skillLinks[skill];
                  const SkillComponent = skillUrl ? 'a' : 'span';
                  const skillProps = skillUrl ? {
                    href: skillUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  } : {};

                  return (
                    <SkillComponent
                      key={skill}
                      {...skillProps}
                      className="px-3 py-1 bg-accent/50 backdrop-blur-sm border border-accent-foreground/10 rounded-md text-sm hover-elevate transition-all cursor-pointer"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill}
                    </SkillComponent>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
