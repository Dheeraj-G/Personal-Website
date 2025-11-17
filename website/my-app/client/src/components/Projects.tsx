import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Brain, Music, Keyboard, Lightbulb, Flower } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import studyPathImage from '@assets/generated_images/studypath.jpeg';
import buckEyeImage from '@assets/generated_images/buckEye.jpeg';
import vibeCheckImage from '@assets/generated_images/VibeCheck.jpeg';
import kCleanerImage from '@assets/generated_images/Kcleaner.jpeg';
import perspectiveImage from '@assets/generated_images/PerspectiveGenerator.jpeg';
import irisImage from '@assets/generated_images/irisflowers.jpeg';

const projects = [
  {
    title: 'Learning Roadmap Tool: StudyPath',
    description: 'Developed a web app to help students save time discovering knowledge gaps by generating personalized learning roadmaps and contextual quizzes from uploaded PDFs, images, and audio files using OCR, LLMs, and knowledge-tree logic. Integrated Next.js frontend with Flask backend, cloud data storage (GCS, Firebase), multi-agent orchestration (LangChain, LangGraph), and Web Sockets to deliver interactive study experiences and adaptive visualizations using D3.js.',
    tech: ['Next.js', 'Flask', 'Python', 'Google Cloud Services', 'Firebase', 'LangChain', 'LangGraph', 'D3.js', 'OCR', 'LLMs', 'Web Sockets'],
    category: 'OAuth + Multimodal Input + Full Stack Application + Google Cloud Services',
    github: 'https://github.com/Dheeraj-G',
    image: studyPathImage,
    icon: Brain,
  },
  {
    title: 'Real Time Open Seat Detection: BuckEye',
    description: 'Built a React JS frontend and Python/Flask backend to display real-time library seat availability at Ohio State, saving students 20+ minutes searching for open tables. Leveraged multithreading on four YOLOv11 machine learning computer vision instances to process live camera feeds and provide accurate, aggregated seat occupancy data.',
    tech: ['Computer Vision', 'YOLOv11', 'React.js', 'Flask', 'Python', 'Multithreading'],
    category: 'Computer Vision Model + Full Stack Application',
    github: 'https://github.com/Dheeraj-G',
    image: buckEyeImage,
    icon: Code,
  },
  {
    title: 'Relational Song Recommendation Web Application: VibeCheck',
    description: 'Developed a web app with 20+ users using Next.js, Python, and OAuth integration with Spotify API, leveraging Ollama to deliver personalized, vibe-matched song recommendations, improving user music discovery efficiency. Implemented preference learning to adapt to user taste over time, increasing recommendation relevance and enhancing engagement.',
    tech: ['Next.js', 'Python', 'OAuth', 'Spotify API', 'Ollama', 'Machine Learning'],
    category: 'OAuth + API Integration + Full Stack Application',
    github: 'https://github.com/Dheeraj-G',
    image: vibeCheckImage,
    icon: Music,
  },
  {
    title: 'MacOS Keyboard Override Utility: KCleaner',
    description: 'Created a macOS utility in Swift to temporarily disable keyboard inputs, enabling safe screen and keyboard cleaning. Implemented triple Option key detection via Cocoa APIs and designed a minimal UI with planned auto screen-dimming for improved user experience.',
    tech: ['Swift', 'macOS', 'Cocoa APIs', 'UI/UX'],
    category: 'macOS Application',
    github: 'https://github.com/Dheeraj-G',
    image: kCleanerImage,
    icon: Keyboard,
  },
  {
    title: 'Perspective Generator',
    description: 'Developed a full-stack web application that encourages users to explore diverse perspectives and approach issues from new viewpoints. Utilized the OpenAI API to output three varying perspectives with a React JS frontend tied to a Python script using Flask.',
    tech: ['OpenAI API', 'React.js', 'Flask', 'Python'],
    category: 'API Integration + Full Stack Application',
    github: 'https://github.com/Dheeraj-G',
    image: perspectiveImage,
    icon: Lightbulb,
  },
  {
    title: 'Iris Flowers Classification',
    description: 'Utilized algorithms such as logistic regression and decision trees to evaluate the Iris Flowers Dataset. Implemented using Python and popular machine learning libraries such as Scikit-Learn and Pandas for data preprocessing, model training, and evaluation.',
    tech: ['Machine Learning', 'Python', 'Scikit-Learn', 'Pandas'],
    category: 'Machine Learning Dataset Classification',
    github: 'https://github.com/Dheeraj-G',
    image: irisImage,
    icon: Flower,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
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
    if (expandedIndex === index) {
      // Closing current box
      setExpandedIndex(null);
      setSlideDirection(null);
    } else if (expandedIndex !== null) {
      // Switching from one project to another
      const direction = index > expandedIndex ? 'right' : 'left';
      setSlideDirection(direction);
      setExpandedIndex(index);
    } else {
      // Opening a new box (first time)
      setExpandedIndex(index);
      setSlideDirection(null);
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`pt-24 pb-12 px-6 transition-all duration-700 ease-in-out ${
        expandedIndex !== null ? 'min-h-[800px]' : 'min-h-0'
      }`}
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-projects-heading"
        >
          Projects
        </h2>
        
        <p
          className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          To view my other projects, please visit my{' '}
          <a
            href="https://github.com/Dheeraj-G"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            data-testid="link-github-projects"
          >
            GitHub
          </a>
        </p>

        <div className={`relative transition-all duration-700 ease-in-out ${
          expandedIndex !== null ? 'pb-8' : 'pb-0'
        }`}>
          {/* Icons row */}
          <div className="relative flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              const IconComponent = project.icon || Code;

              return (
            <div
              key={project.title}
                  className="relative z-10 flex-shrink-0"
                  data-testid={`card-project-icon-${index}`}
                >
                  {/* Icon button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`p-3 sm:p-4 bg-card/30 backdrop-blur-md border border-border/50 rounded-full transition-all duration-500 ease-in-out hover-elevate ${
                      isExpanded 
                        ? 'scale-125 bg-primary/20 border-primary/50 rotate-180 shadow-lg shadow-primary/20' 
                        : 'scale-100 hover:scale-110'
                    } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-all duration-500 ${
                      isExpanded ? 'scale-110' : ''
                    }`} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Project box container - centered below */}
          <div className={`relative mt-8 transition-all duration-700 ease-in-out ${
            expandedIndex !== null 
              ? 'opacity-100 max-h-[2000px] pointer-events-auto' 
              : 'opacity-0 max-h-0 overflow-hidden pointer-events-none'
          }`}>
            {expandedIndex !== null && (
              <div className="flex justify-center overflow-hidden">
                <div 
                  key={expandedIndex}
                  className={`w-full max-w-4xl transition-all duration-700 ease-in-out ${
                    expandedIndex !== null 
                      ? 'scale-100 opacity-100 translate-y-0' 
                      : 'scale-95 opacity-0 translate-y-4'
                  }`}
                  style={{
                    animation: slideDirection === 'left' 
                      ? 'slideInLeft 0.7s ease-in-out' 
                      : slideDirection === 'right' 
                      ? 'slideInRight 0.7s ease-in-out' 
                      : 'none'
                  }}>
                  {(() => {
                    const project = projects[expandedIndex];
                    return (
                      <div data-testid={`card-project-${expandedIndex}`}>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Image on the left */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                              data-testid={`img-project-${expandedIndex}`}
                    />
                </div>

                          {/* Information on the right */}
                          <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-2xl font-bold" data-testid={`text-project-title-${expandedIndex}`}>
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover-elevate rounded-md transition-all"
                                data-testid={`link-project-github-${expandedIndex}`}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                            <p className="text-sm text-primary mb-4" data-testid={`text-project-category-${expandedIndex}`}>
                    {project.category}
                  </p>

                            <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-project-description-${expandedIndex}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
