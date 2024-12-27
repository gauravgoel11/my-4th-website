import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({
  projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      technologies: ["React", "Node.js", "MongoDB"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool using deep learning models and neural networks.",
      imageUrl: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
      technologies: ["Python", "TensorFlow", "Flask"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive analytics dashboard for social media management and monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "D3.js", "GraphQL"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A modern weather application with detailed forecasts and interactive maps.",
      imageUrl: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8",
      technologies: ["React Native", "OpenWeather API"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and professional experience.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      technologies: ["React", "TypeScript", "Tailwind"],
      projectUrl: "#",
      githubUrl: "#",
    },
  ],
}: ProjectsGridProps) => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase
            my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
