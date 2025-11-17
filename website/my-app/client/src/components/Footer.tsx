import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur-md" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} Dheeraj Gosula. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Dheeraj-G"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover-elevate active-elevate-2 rounded-md transition-all"
              data-testid="link-footer-github"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/dheeraj-gosula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover-elevate active-elevate-2 rounded-md transition-all"
              data-testid="link-footer-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Gosuladheeraj@gmail.com"
              className="p-2 hover-elevate active-elevate-2 rounded-md transition-all"
              data-testid="link-footer-email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1bJ6ziRbnGE850E-7KLXD1DsEUplBECRf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-accent/30 backdrop-blur-sm border border-accent-foreground/10 rounded-md hover-elevate active-elevate-2 transition-all"
              data-testid="link-footer-resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
