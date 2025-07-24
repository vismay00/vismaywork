import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Music, Smartphone, BookOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "Music Streaming Web App",
      longDescription: "Built using HTML, CSS, JavaScript with responsive UI, play/pause functionality, and dynamic rendering of song metadata. Features custom audio controls and organized folder structure.",
      icon: <Music className="h-6 w-6" />,
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive UI Design",
        "Play/Pause Controls", 
        "Dynamic Song Metadata",
        "Custom Audio Controls",
        "Organized Folder Structure"
      ],
      futureGoals: ["Authentication", "Playlists", "Backend Integration"],
      status: "Completed",
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Price Tracker UI",
      description: "Frontend Development Project",
      longDescription: "Designed and developed the frontend UI layout using modern HTML/CSS structure with focus on user-friendly product grid and responsive design patterns.",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["HTML", "CSS", "Responsive Design"],
      features: [
        "Modern UI Layout",
        "Product Grid System",
        "Responsive Design",
        "User-Friendly Interface"
      ],
      role: "Frontend Developer",
      status: "Completed",
      link: "#",
      github: "#"
    },
    {
      title: "Private Travel Journal App",
      description: "Team Development Project",
      longDescription: "Collaborating as part of a development team to create a private travel journal application. Focus on UI/UX structure with plans for React/Node tech stack.",
      icon: <BookOpen className="h-6 w-6" />,
      technologies: ["React", "Node.js", "UI/UX"],
      features: [
        "Journal Entry Forms",
        "Location Tagging",
        "Private User Data",
        "Team Collaboration"
      ],
      role: "Team Developer",
      status: "In Progress",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover group bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>

                {project.role && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Role:</h4>
                    <p className="text-primary font-medium">{project.role}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="skill-tag"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
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
                    <h4 className="font-semibold text-foreground mb-3">Future Goals:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.futureGoals.map((goal, goalIndex) => (
                        <Badge 
                          key={goalIndex} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;