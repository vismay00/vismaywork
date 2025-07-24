import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main heading with typing animation */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text neon-text">Vismay</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            <p className="typing-animation">
              Building clean, responsive digital experiences one project at a time.
            </p>
          </div>
        </div>

        {/* Tech tags floating */}
        <div className="mb-12 animate-fade-up animation-delay-300">
          <div className="flex flex-wrap justify-center gap-3">
            {['Full-Stack Developer', 'CUSAT 2026', 'DevOps Enthusiast'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm skill-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-fade-up animation-delay-600">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="neon-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-up animation-delay-900">
          <a 
            href="https://github.com/vismay00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/vismay-bhaskar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:vismayvichuzz10@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;