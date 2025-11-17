import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Building2, FlaskConical } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: FlaskConical,
    title: 'The Ohio State University & Imageomics Institute',
    role: 'Research Assistant',
    location: 'Columbus, OH',
    period: 'August 2024 – December 2024',
    description: 'Trained ResNet50 models using PyTorch to identify differences in butterfly comimics through visual acuity perspectives. Utilized Grad-CAM for model visualization to identify key coevolution variations. Collaborated with the Translational Data Analytics Institute and Imageomics Institute.',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Riverside Research Institute',
    role: 'Software Developer Intern',
    location: 'Dayton, OH',
    period: 'May 2024 – December 2024',
    description: 'Enabled access to 1K+ research documents by integrating a closed-network LLM with RAG using Python, Flask, Vue.js, Docker, and AWS. Automated infrastructure provisioning with AWS EKS and EC2. Built AI-powered dashboards for real-time monitoring of 1.5K+ space objects for the US Space Force.',
  },
  {
    type: 'work',
    icon: Building2,
    title: 'Nationwide Insurance',
    role: 'Software Engineering Intern',
    location: 'Columbus, OH',
    period: 'May 2025 – September 2025',
    description: 'Increased efficiency by 30% by creating an internal automation tool with Angular, Python, and Flask. Designed ETL pipelines using Spring Boot and accelerated deployment speed by 50% with CI/CD pipelines using GitHub Actions, Docker, and Kubernetes.',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'The Ohio State University',
    role: 'Bachelor of Science in Computer Science',
    location: 'Columbus, OH',
    period: 'August 2023 - December 2026',
    description: 'Focused on software engineering, machine learning, and computer vision. Participated in various hackathons and coding competitions.',
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());
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

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="pt-24 pb-12 px-6"
      data-testid="section-experience"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-experience-heading"
        >
          Experience & Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

          {[...experiences].reverse().map((exp, index) => {
            const isLeft = exp.type === 'work';
            const isExpanded = expandedIndices.has(index);
            const originalIndex = experiences.length - 1 - index;
            
            return (
              <div
                key={originalIndex}
                className={`relative pb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-testid={`card-experience-${originalIndex}`}
              >
                <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'} text-left transition-all duration-700 ease-in-out ${
                    isExpanded 
                      ? 'opacity-100 translate-x-0 max-h-[2000px]' 
                      : `opacity-0 max-h-0 overflow-hidden ${isLeft ? '-translate-x-5' : 'translate-x-5'}`
                  }`}>
                    <div className={`bg-card/30 backdrop-blur-md border border-border/50 rounded-lg hover-elevate transition-all duration-700 ease-in-out overflow-hidden ${isLeft ? 'mr-8' : 'ml-8'} p-6 ${
                      isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}>
                      <div className={`flex flex-col gap-2 items-start mb-4 transition-all duration-500 ease-in-out ${
                        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <div className="w-full">
                          <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${originalIndex}`}>
                            {exp.title}
                          </h3>
                          <p className="text-primary" data-testid={`text-experience-role-${originalIndex}`}>
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <div className={`mt-4 transition-all duration-500 ease-in-out delay-150 ${
                        isExpanded ? 'opacity-100 translate-y-0 max-h-[1000px]' : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'
                      }`}>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground mb-2" data-testid={`text-experience-location-${originalIndex}`}>
                            {exp.location}
                          </p>
                        )}
                        <span className="text-sm text-muted-foreground whitespace-nowrap block mb-4" data-testid={`text-experience-period-${originalIndex}`}>
                          {exp.period}
                        </span>
                        <p className="text-muted-foreground break-words" data-testid={`text-experience-description-${originalIndex}`}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative w-8 flex-shrink-0 flex items-start justify-center">
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`absolute top-2 p-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full z-10 hover:bg-primary/30 transition-all duration-300 ease-in-out cursor-pointer ${
                        isExpanded ? 'scale-110 rotate-180' : 'scale-100 rotate-0'
                      }`}
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {exp.icon ? (
                        <exp.icon className="w-4 h-4 text-primary transition-transform duration-300" />
                      ) : exp.type === 'education' ? (
                        <GraduationCap className="w-4 h-4 text-primary transition-transform duration-300" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary transition-transform duration-300" />
                      )}
                    </button>
                    <div 
                      className={`absolute top-12 left-1/2 w-px bg-primary/30 -translate-x-1/2 transition-all duration-700 ease-in-out ${
                        isExpanded ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        height: isExpanded ? 'calc(100% + 2rem)' : '0',
                        bottom: 0
                      }}
                    />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
