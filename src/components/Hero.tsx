import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { icon: Code, position: { top: '20%', left: '10%' }, delay: '0s' },
    { icon: Terminal, position: { top: '60%', right: '15%' }, delay: '0.5s' },
    { icon: Zap, position: { top: '30%', right: '25%' }, delay: '1s' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic background with mouse parallax */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating particles */}
      <div className="particles-bg">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute hidden lg:block"
          style={item.position}
        >
          <div 
            className="p-4 bg-card/20 backdrop-blur-md border border-border/50 rounded-2xl animate-float opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{ animationDelay: item.delay }}
          >
            <item.icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main content with glassmorphism card */}
        <div className="max-w-4xl mx-auto">
          {/* Hero badge */}
          <div className="mb-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-card/30 backdrop-blur-md border border-border/50 rounded-full text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for opportunities
            </div>
          </div>

          {/* Main heading with enhanced typography */}
          <div className="mb-8 animate-fade-up animation-delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Hi, I'm</span>
              <span className="block gradient-text neon-text relative">
                Vismay
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">Building clean, responsive</p>
              <p className="gradient-text font-semibold">digital experiences</p>
              <p>one project at a time.</p>
            </div>
          </div>

          {/* Enhanced role cards */}
          <div className="mb-12 animate-fade-up animation-delay-400">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { title: 'Full-Stack Developer', subtitle: 'In Training' },
                { title: 'CUSAT 2026', subtitle: 'IT Student' },
                { title: 'DevOps Enthusiast', subtitle: 'Future Goals' }
              ].map((role, index) => (
                <div 
                  key={index}
                  className="group p-4 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-card/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {role.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {role.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="mb-16 animate-fade-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="neon-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4 bg-primary hover:bg-primary/90 group"
              >
                <span className="mr-2">View My Work</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-card/30 backdrop-blur-md border-border/50 hover:bg-card/50 hover:border-primary/50 transition-all duration-300"
                asChild
              >
                <a href="mailto:vismayvichuzz10@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced social links with glassmorphism */}
          <div className="animate-fade-up animation-delay-800">
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/vismay00", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/vismay-bhaskar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:vismayvichuzz10@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="group p-4 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-card/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-up animation-delay-1000">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;