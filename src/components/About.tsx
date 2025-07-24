import { GraduationCap, MapPin, Heart } from "lucide-react";
import profileImage from "@/assets/profile-vismay.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden neon-glow animate-float">
                <img 
                  src={profileImage} 
                  alt="Vismay Bhaskar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-glow animation-delay-1000"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Vismay Bhaskar</span>, an Information Technology undergraduate at 
                <span className="text-foreground font-semibold"> Cochin University of Science and Technology (Class of 2026)</span>. 
                I'm passionate about web development and enjoy building clean, responsive, and user-friendly digital experiences.
              </p>
              
              <p>
                With a strong academic foundation and a curiosity-driven mindset, I'm eager to contribute to 
                impactful tech projects and grow as a full-stack developer. Beyond academics, I'm a football enthusiast 
                and a proud <span className="text-accent font-semibold">FC Barcelona</span> fan.
              </p>
            </div>

            {/* Education & Location Info */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Information Technology</p>
                  <p className="text-sm text-muted-foreground">CUSAT (2022–2026)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Kochi, Kerala, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <Heart className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">Interests</h3>
                  <p className="text-muted-foreground">Football, FC Barcelona, Web Development</p>
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