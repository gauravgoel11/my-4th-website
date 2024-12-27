import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  description = "I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and performant applications that solve real-world problems.",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:john@example.com",
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-[800px] w-full flex flex-col justify-center items-center relative bg-white dark:bg-gray-900 px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Hi, I'm {name}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.open(socialLinks.email, "_blank")}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="w-5 h-5" />
            View My Work
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.github, "_blank")}
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.linkedin, "_blank")}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.email, "_blank")}
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
