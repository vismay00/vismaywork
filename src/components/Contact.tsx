import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = formData.subject || `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:vismayvichuzz10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "vismayvichuzz10@gmail.com",
      description: "Best way to reach me",
      link: "mailto:vismayvichuzz10@gmail.com",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      content: "@vismay00",
      description: "Check out my repositories",
      link: "https://github.com/vismay00",
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      content: "Vismay Bhaskar",
      description: "Let's connect professionally",
      link: "https://linkedin.com/in/vismay-bhaskar",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    }
  ];

  const additionalInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Kochi, Kerala, India"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Availability",
      value: "Open to opportunities"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Response Time",
      value: "Usually within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className={`p-4 rounded-xl ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground font-medium mb-1">{method.content}</p>
                        <p className="text-sm text-muted-foreground/80">{method.description}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-card/30 backdrop-blur-md border border-border/50">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-foreground text-lg mb-4">Additional Information</h4>
                {additionalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="p-2 bg-muted/30 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-muted-foreground">{info.label}: </span>
                      <span className="text-foreground font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <span>Send a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ask a question, or just say hello! I'm excited to hear from you."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80 resize-none transition-all duration-300"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-lg py-6"
                    size="lg"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. Your information will be kept private and secure.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative ideas and bring creative visions to life. 
              Let's discuss how we can collaborate and build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="mailto:vismayvichuzz10@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me Directly
                </a>
              </Button>
              <Button variant="outline" className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50" asChild>
                <a href="https://linkedin.com/in/vismay-bhaskar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;