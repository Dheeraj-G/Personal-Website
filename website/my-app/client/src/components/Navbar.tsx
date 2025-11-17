import { useEffect, useState, useRef } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover-elevate active-elevate-2 rounded-md transition-all"
      data-testid="button-theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeSection];
      const container = navContainerRef.current;
      const indicator = container?.querySelector('.subnav__switch-indicator') as HTMLElement;

      if (activeButton && container && indicator) {
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const left = buttonRect.left - containerRect.left;
        const width = buttonRect.width;
        const top = buttonRect.top - containerRect.top + buttonRect.height / 2;

        indicator.style.setProperty('--left', `${left}px`);
        indicator.style.setProperty('--width', `${width}px`);
        indicator.style.setProperty('--top', `${top}px`);
        indicator.classList.add('subnav__switch-indicator--active');
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateIndicator, 0);
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        data-testid="navbar"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
          isScrolled ? 'max-w-5xl' : ''
        }`}>
          <div className="flex items-center justify-between gap-4">
            <div 
              className={`transition-all duration-500 ${
                isScrolled
                  ? 'bg-background/60 backdrop-blur-xl border border-border/30 rounded-full px-6 py-3 shadow-lg'
                  : 'bg-transparent'
              }`}
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="text-lg font-semibold hover-elevate px-3 py-2 rounded-full transition-all"
                data-testid="button-logo"
              >
                DG
              </button>
            </div>

            <div 
              className={`hidden md:flex items-center gap-2 transition-all duration-500 ${
                isScrolled
                  ? 'bg-background/60 backdrop-blur-xl border border-border/30 rounded-full px-4 py-3 shadow-lg'
                  : 'bg-transparent'
              }`}
            >
              <div ref={navContainerRef} className="flex items-center gap-1 relative">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      ref={(el) => { buttonRefs.current[item.id] = el; }}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm px-4 py-2 rounded-full transition-all duration-300 relative z-10 ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      data-testid={`link-${item.id}`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                
                {/* Sliding Glass Oval Indicator */}
                <div
                  className="subnav__switch-indicator subnav__switch-indicator--active absolute backdrop-blur-xl border border-border/60 rounded-full transition-all duration-500 ease-out shadow-lg dark:bg-white/10 bg-black/10"
                  style={{
                    '--top': '50%',
                    '--left': '8px',
                    '--width': '0px',
                    top: 'var(--top)',
                    left: 'var(--left)',
                    width: 'var(--width)',
                    height: '36px',
                    transform: 'translateY(-50%)',
                    opacity: navItems.some(item => item.id === activeSection) ? 1 : 0,
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  } as React.CSSProperties & { '--top': string; '--left': string; '--width': string }}
                />
              </div>
              
              <div className="w-px h-6 bg-border/50 mx-1" />
              
              <a
                href="https://github.com/Dheeraj-G"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover-elevate p-2 rounded-full transition-all"
                data-testid="link-github"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover-elevate rounded-full"
                data-testid="button-mobile-menu"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl hover-elevate px-6 py-3 rounded-full transition-all ${
                  activeSection === item.id ? 'text-primary' : 'hover:text-primary'
                }`}
                data-testid={`mobile-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/Dheeraj-G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary hover-elevate px-6 py-3 rounded-full flex items-center gap-2"
              data-testid="mobile-link-github"
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
