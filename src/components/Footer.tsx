import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Vismay.dev</h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/vismay00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/vismay-bhaskar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:vismayvichuzz10@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 mx-1 text-accent animate-pulse" /> 
              by Vismay Bhaskar
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            Designed & Developed using React, TypeScript, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;