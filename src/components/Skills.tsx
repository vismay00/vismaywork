import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, Cloud, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["HTML", "CSS", "JavaScript", "Python", "C", "C++"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Tools & Platforms", 
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Git", "VS Code", "GitHub"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Interest Areas",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["DevOps", "Full-stack Development", "Web Development"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Future Learning",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: ["Docker", "CI/CD Tools", "React", "Node.js"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and areas I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-hover bg-card/50 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline" 
                      className="skill-tag w-full justify-center py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            All Skills at a Glance
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "HTML5", "CSS3", "JavaScript", "Python", "C", "C++", 
              "Git", "GitHub", "VS Code", "Responsive Design", 
              "Web Development", "DevOps", "Full-stack Development",
              "React (Learning)", "Node.js (Learning)", "Docker (Learning)", "CI/CD (Learning)"
            ].map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="skill-tag text-sm py-2 px-4 hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;