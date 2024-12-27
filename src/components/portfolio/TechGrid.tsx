import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechGridProps {
  technologies?: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
}

const TechGrid = ({
  technologies = [
    {
      name: "React",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
      description: "Frontend JavaScript library for building user interfaces",
    },
    {
      name: "TypeScript",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=typescript",
      description: "Typed superset of JavaScript",
    },
    {
      name: "Tailwind CSS",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=tailwind",
      description: "Utility-first CSS framework",
    },
    {
      name: "Node.js",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=nodejs",
      description: "JavaScript runtime environment",
    },
    {
      name: "PostgreSQL",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=postgresql",
      description: "Open source relational database",
    },
    {
      name: "Docker",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=docker",
      description:
        "Platform for developing, shipping, and running applications",
    },
  ],
}: TechGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <TooltipProvider>
          {technologies.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{tech.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TechGrid;
