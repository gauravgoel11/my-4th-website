import React, { useState } from "react";
import Navbar from "./portfolio/Navbar";
import HeroSection from "./portfolio/HeroSection";
import ProjectsGrid from "./portfolio/ProjectsGrid";
import SkillsSection from "./portfolio/SkillsSection";
import TechGrid from "./portfolio/TechGrid";
import ContactSection from "./portfolio/ContactSection";

interface HomeProps {
  initialTheme?: "light" | "dark";
}

const Home = ({ initialTheme = "light" }: HomeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Update the document theme class
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 ${isDarkMode ? "dark" : ""}`}
    >
      <Navbar onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />

      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <section id="home">
          <HeroSection
            name="John Doe"
            title="Full Stack Developer"
            description="Building exceptional digital experiences with modern web technologies. Focused on creating intuitive and performant applications that solve real-world problems."
            socialLinks={{
              github: "https://github.com",
              linkedin: "https://linkedin.com",
              email: "mailto:john@example.com",
            }}
          />
        </section>
        <section id="projects">
          <ProjectsGrid />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="technologies">
          <TechGrid />
        </section>
        <section id="contact">
          <ContactSection
            email="john@example.com"
            socialLinks={{
              github: "https://github.com",
              linkedin: "https://linkedin.com",
              twitter: "https://twitter.com",
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
