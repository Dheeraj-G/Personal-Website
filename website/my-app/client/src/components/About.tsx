import { useEffect, useRef, useState } from 'react';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-about-heading"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative group flex justify-center">
              <div className="absolute w-[67.5%] h-full bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-all" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }} />
              <div className="relative bg-card/50 backdrop-blur-md border border-border/50 rounded-lg p-2 hover-elevate transition-all w-[67.5%]">
                <img
                  src="/personal-photo.jpeg"
                  alt="Dheeraj Gosula"
                  className="w-full rounded-md"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-lg text-foreground mb-6" data-testid="text-bio">
              Through my various experiences including sketching, reading, rock climbing, and software development, 
              I discovered a passion for harnessing creativity to drive meaningful change.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-bio-secondary">
              I aspire to apply my academic knowledge, innovative mindset, and passion for technology to create 
              impactful solutions that make a positive difference in those around me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
