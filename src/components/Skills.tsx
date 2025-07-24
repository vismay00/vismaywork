import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, Cloud, Lightbulb, TrendingUp, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "HTML5", level: 90, color: "bg-orange-500" },
        { name: "CSS3", level: 85, color: "bg-blue-400" },
        { name: "C++", level: 75, color: "bg-purple-500" },
        { name: "C", level: 70, color: "bg-gray-500" }
      ],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Tools & Platforms", 
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 80, color: "bg-red-500" },
        { name: "VS Code", level: 90, color: "bg-blue-600" },
        { name: "GitHub", level: 85, color: "bg-gray-800" }
      ],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Interest Areas",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "DevOps", level: 60, color: "bg-green-500" },
        { name: "Full-stack Development", level: 70, color: "bg-purple-600" },
        { name: "Web Development", level: 85, color: "bg-indigo-500" }
      ],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Currently Learning",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: [
        { name: "React", level: 65, color: "bg-cyan-500" },
        { name: "Node.js", level: 55, color: "bg-green-600" },
        { name: "Docker", level: 40, color: "bg-blue-700" },
        { name: "CI/CD", level: 35, color: "bg-orange-600" }
      ],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  const certifications = [
    { name: "Responsive Web Design", provider: "FreeCodeCamp", year: "2023" },
    { name: "JavaScript Algorithms", provider: "FreeCodeCamp", year: "2023" },
    { name: "Git & GitHub", provider: "Self-taught", year: "2022" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and areas I'm passionate about
          </p>
          
          {/* Skills overview stats */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/50 hover:border-primary/30 transition-all duration-500 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className={`p-3 rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Complete Skill Set
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              { name: "HTML5", priority: "high" },
              { name: "CSS3", priority: "high" }, 
              { name: "JavaScript", priority: "high" },
              { name: "Python", priority: "high" },
              { name: "C", priority: "medium" },
              { name: "C++", priority: "medium" },
              { name: "Git", priority: "high" },
              { name: "GitHub", priority: "high" },
              { name: "VS Code", priority: "medium" },
              { name: "Responsive Design", priority: "high" },
              { name: "Web Development", priority: "high" },
              { name: "DevOps", priority: "medium" },
              { name: "Full-stack Development", priority: "medium" },
              { name: "React", priority: "learning" },
              { name: "Node.js", priority: "learning" },
              { name: "Docker", priority: "learning" },
              { name: "CI/CD", priority: "learning" }
            ].map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className={`text-sm py-2 px-4 transition-all duration-300 cursor-default ${
                  skill.priority === 'high' 
                    ? 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20' 
                    : skill.priority === 'learning'
                    ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20'
                    : 'bg-card/50 border-border/50 hover:bg-card hover:border-primary/20'
                } hover:scale-105`}
              >
                {skill.name}
                {skill.priority === 'high' && <Star className="ml-1 h-3 w-3 fill-current" />}
                {skill.priority === 'learning' && <TrendingUp className="ml-1 h-3 w-3" />}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Certifications & Learning
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group text-center"
              >
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning journey */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6">
              I believe in staying updated with the latest technologies and continuously improving my skillset. 
              Currently focusing on React, Node.js, and DevOps practices.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🎯 Goal: Full-Stack Mastery
              </Badge>
              <Badge className="bg-accent/20 text-accent border-accent/30">
                📚 Always Learning
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                🚀 Future: DevOps Engineer
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;