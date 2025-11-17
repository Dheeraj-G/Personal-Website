import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none"
          data-testid="text-hero-name"
        >
          Dheeraj Gosula
        </h1>
        
        <p 
          className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6 font-light"
          data-testid="text-hero-tagline"
        >
          Student & Software Engineer
        </p>

        <p 
          className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          data-testid="text-hero-description"
        >
          Honors Computer Science & Engineering at The Ohio State University
        </p>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <a
            href="https://drive.google.com/file/d/1Ij5VSBNunGv-yruJgKNs80ltgoJNmeEX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="link-resume"
          >
            View Resume
          </a>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <a
            href="https://github.com/Dheeraj-G"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="link-github-hero"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
