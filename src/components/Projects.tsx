import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Music, Smartphone, BookOpen, Star, Clock, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "Music Streaming Web App",
      longDescription: "A fully responsive music streaming application built with vanilla JavaScript. Features custom audio controls, dynamic metadata rendering, and an intuitive user interface inspired by Spotify's design.",
      icon: <Music className="h-6 w-6" />,
      technologies: ["HTML5", "CSS3", "JavaScript", "Audio API"],
      features: [
        "Responsive UI Design",
        "Custom Audio Controls", 
        "Dynamic Song Metadata",
        "Playlist Management",
        "Modern CSS Animations",
        "Cross-browser Compatibility"
      ],
      futureGoals: ["User Authentication", "Backend Integration", "Real Playlists", "Social Features"],
      status: "Completed",
      statusColor: "bg-accent text-accent-foreground",
      link: "#",
      github: "#",
      image: "🎵",
      priority: "high"
    },
    {
      title: "Mobile Price Tracker UI",
      description: "E-commerce Frontend Project", 
      longDescription: "Modern e-commerce frontend focused on mobile device price tracking. Built with responsive design principles and user-centered design approach for optimal shopping experience.",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["HTML5", "CSS Grid", "Flexbox", "Responsive Design"],
      features: [
        "Modern Grid Layout",
        "Product Comparison",
        "Price Filter System",
        "Mobile-first Design",
        "Intuitive Navigation",
        "Performance Optimized"
      ],
      role: "Frontend Developer",
      status: "Completed",
      statusColor: "bg-accent text-accent-foreground",
      link: "#",
      github: "#",
      image: "📱",
      priority: "medium"
    },
    {
      title: "Private Travel Journal",
      description: "Full-Stack Team Project",
      longDescription: "Collaborative development of a private travel journaling application. Working with a team to create a comprehensive solution for travel enthusiasts to document their experiences with rich media and location tracking.",
      icon: <BookOpen className="h-6 w-6" />,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Private Journal Entries",
        "Location Tagging",
        "Photo Integration",
        "Team Collaboration",
        "Real-time Sync",
        "Secure Data Storage"
      ],
      role: "Full-Stack Developer",
      status: "In Progress",
      statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      link: "#",
      github: "#",
      image: "✈️",
      priority: "high"
    },
    {
      title: "Task Manager App",
      description: "Android Development Project",
      longDescription: "Native Android application for task management with modern Material Design principles. Features offline functionality, cloud sync, and intuitive gesture-based interactions.",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["Kotlin", "Android SDK", "Room Database", "Material Design"],
      features: [
        "Material Design UI",
        "Offline Functionality",
        "Cloud Synchronization",
        "Gesture Controls",
        "Dark Mode Support",
        "Widget Integration"
      ],
      role: "Android Developer",
      status: "In Development",
      statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
      link: "#",
      github: "#",
      image: "📱",
      priority: "medium"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and development journey
          </p>
          
          {/* Project stats */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative">
                {/* Project priority indicator */}
                {project.priority === 'high' && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs text-accent">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Project Visual */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      {/* Project image placeholder with better styling */}
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-6xl border border-border/50 group-hover:scale-105 transition-transform duration-500">
                        {project.image}
                      </div>
                      
                      {/* Floating project icon */}
                      <div className="absolute -top-3 -right-3 p-3 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                    </div>

                    {/* Quick info cards */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Status: </span>
                        <Badge className={project.statusColor}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      {project.role && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Role: {project.role}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.longDescription}
                      </p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline"
                              className="bg-card/50 border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <li 
                                key={featureIndex}
                                className="flex items-center space-x-2 text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.futureGoals && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Future Enhancements:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.futureGoals.slice(0, 3).map((goal, goalIndex) => (
                                <Badge 
                                  key={goalIndex} 
                                  variant="secondary"
                                  className="text-xs bg-muted/50"
                                >
                                  {goal}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <Button 
                          variant="default" 
                          className="bg-primary hover:bg-primary/90 group-hover:scale-105 transition-all duration-300" 
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300" 
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates!
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://github.com/vismay00" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;