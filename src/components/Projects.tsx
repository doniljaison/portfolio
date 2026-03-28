// Projects section component - showcases my work
import { Github, ExternalLink } from "lucide-react";

function Projects() {
  // My featured projects
  const projects = [
    {
      title: "Sports Event Management System",
      description: "Role-based event platform where I engineered the Manager Dashboard, helping users manage rosters, event registrations, and schedules while contributing to schema and RBAC API design.",
      technologies: ["React.js", "Node.js", "RBAC", "API Design", "Database Schema"],
      period: "Dec 2025",
      github: "https://github.com/SportsAmigo/SportsAmigo",
      demo: null
    },
    {
      title: "GRASP Algorithm Optimization",
      description: "Research project implementing GRASP for sparse graph optimization with machine learning guidance, improving solution quality by 15% over baseline approaches.",
      technologies: ["Python", "Machine Learning", "GRASP", "Sparse Graphs", "Complexity Analysis"],
      period: "Nov 2024",
      github: "https://github.com/doniljaison/ai-project",
      demo: null
    },
    {
      title: "EcoRoute - Logistics Optimization Engine",
      description: "Analytics engine processing 9,000+ shipping records to identify routing inefficiencies and score carrier strategies by cost and sustainability metrics.",
      technologies: ["Python", "Pandas", "Data Analytics", "Optimization", "Visualization"],
      period: "Sept 2025",
      github: null,
      demo: "https://doniljaison.github.io/ecoroute-optimizer/"
    },
    {
      title: "Global Sales Data Analytics",
      description: "Data visualization tool analyzing 51,290+ transactions to detect regional trends using dynamic heatmaps and time-based insights.",
      technologies: ["Python", "Data Cleaning", "Statistical Analysis", "Heatmaps", "Visualization"],
      period: "Dec 2025",
      github: null,
      demo: "https://doniljaison.github.io/product-sales-analytics/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          
        </div>
        
        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {/* Project header */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{project.period}</p>
                </div>
                
                {/* Project description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies used */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interested in my work?</h3>
            <p className="text-gray-600 mb-6">
              Check out my projects and reach out to discuss collaboration opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/doniljaison"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} className="mr-2" />
                View All Projects
              </a>
              <a
                href="#contact"
                className="flex items-center border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
