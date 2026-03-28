// Skills section component - shows what technologies I know
import { Code2, Database, Palette, Cloud, Globe } from "lucide-react";

function Skills() {
  // Array of skill categories with their skills
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "C"]
    },
    {
      icon: Database,
      title: "Frameworks & Libraries", 
      skills: ["Node.js", "Express.js", "React.js", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      icon: Palette,
      title: "Tools & Core",
      skills: ["Git", "GitHub", "MongoDB", "AWS", "REST", "SOAP", "GraphQL", "Linux"]
    },
    {
      icon: Cloud,
      title: "Coursework",
      skills: ["DBMS", "Object-Oriented Programming", "DSA", "Operating Systems", "Computer Networks"]
    }
  ];

  // All technologies I know
  const technologies = [
    "Python", "Java", "JavaScript", "SQL", "React.js", "Node.js", "Express.js",
    "Pandas", "NumPy", "Matplotlib", "MongoDB", "AWS", "Git", "GitHub", "GraphQL", "Linux"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical toolkit built through projects in software engineering, analytics, and optimization
          </p>
        </div>
        
        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <category.icon className="mr-3 text-blue-600" size={24} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* All technologies */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-6">
            <Globe className="mr-3 text-green-600" size={28} />
            <h3 className="text-2xl font-semibold">Technologies & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm hover:bg-green-200 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;