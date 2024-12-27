import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  description: string;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const SkillsSection = ({ categories }: SkillsSectionProps) => {
  const defaultCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "HTML/CSS", "Next.js", "Tailwind CSS"],
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      description:
        "Building responsive and interactive user interfaces with modern web technologies",
    },
    {
      title: "UI/UX Design",
      skills: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Wireframing",
        "Prototyping",
      ],
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      description: "Creating intuitive and visually appealing user experiences",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "SQL", "REST APIs", "GraphQL"],
      icon: <Terminal className="w-8 h-8 text-green-500" />,
      description: "Developing robust server-side applications and APIs",
    },
  ];

  const displayCategories = categories || defaultCategories;

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized in modern web technologies and development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
