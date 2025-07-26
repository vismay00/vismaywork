import { GraduationCap, MapPin, Heart, Calendar, Code2, Trophy } from "lucide-react";
import profileImage from "@/assets/profile-vismay-new.jpg";

const About = () => {
  const stats = [
    { label: "Years of Study", value: "3+", icon: Calendar },
    { label: "Projects Built", value: "5+", icon: Code2 },
    { label: "Technologies", value: "8+", icon: Trophy }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "B.Tech in Information Technology",
      detail: "CUSAT (2022–2026)",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kochi, Kerala, India",
      detail: "Available for remote work",
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: Heart,
      title: "Interests",
      content: "Football Enthusiast",
      detail: "Proud FC Barcelona fan",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Enhanced Profile Section */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            {/* Profile Image with enhanced styling */}
            <div className="relative group hover-lift">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse"></div>
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-md border border-border/50 p-2">
                <img 
                  src={profileImage} 
                  alt="Vismay Bhaskar" 
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ clipPath: 'inset(0 round 1rem)' }}
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-3 animate-float">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-3 animate-float animation-delay-1000">
                <Heart className="h-6 w-6 text-accent" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-card/50 transition-all duration-300 group interactive-card stagger-item animate-scale-up"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8 animate-slide-left">
            {/* Bio with better typography */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm <span className="text-primary font-semibold text-xl">Vismay Bhaskar</span>, an Information Technology undergraduate at 
                  <span className="text-foreground font-semibold"> Cochin University of Science and Technology</span> 
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-sm rounded-lg ml-2">(Class of 2026)</span>.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm passionate about web development and enjoy building clean, responsive, and user-friendly digital experiences. 
                  With a strong academic foundation and a curiosity-driven mindset, I'm eager to contribute to 
                  impactful tech projects and grow as a <span className="text-accent font-semibold">full-stack developer</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond academics, I'm a football enthusiast and a proud 
                  <span className="text-accent font-semibold"> FC Barcelona</span> fan ⚽
                </p>
              </div>
            </div>

            {/* Enhanced Info Cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-card/50 hover:border-primary/30 transition-all duration-300 stagger-item animate-slide-up hover-lift card-shimmer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-1">{item.content}</p>
                      <p className="text-sm text-muted-foreground/80">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-6">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">Let's Build Something Amazing</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to work on innovative projects and collaborate with passionate developers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-card/50 border border-border/50 rounded-lg text-sm text-muted-foreground">
                    🚀 Open to opportunities
                  </span>
                  <span className="px-3 py-1 bg-card/50 border border-border/50 rounded-lg text-sm text-muted-foreground">
                    💡 Love learning new tech
                  </span>
                  <span className="px-3 py-1 bg-card/50 border border-border/50 rounded-lg text-sm text-muted-foreground">
                    🤝 Team collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;