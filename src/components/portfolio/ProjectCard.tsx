import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This showcases the main functionality and purpose.",
  imageUrl = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  technologies = ["React", "TypeScript", "Tailwind"],
  projectUrl = "#",
  githubUrl = "#",
}: ProjectCardProps) => {
  return (
    <Card className="w-[380px] h-[320px] overflow-hidden group bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold truncate">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => window.open(projectUrl, "_blank")}
        >
          <ExternalLink size={16} />
          View Project
        </Button>

        {githubUrl && (
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github size={16} />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
