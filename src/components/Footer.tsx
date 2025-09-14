// Footer component - bottom section with social links
import { Github, Linkedin, Heart } from "lucide-react";

function Footer() {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Donil Jaison</h3>
            <p className="text-gray-300">
              Computer Science Student & Aspiring Full-Stack Developer
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/doniljaison"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/donil-jaison-93a17428a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            {/* Mail link removed per request */}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Donil Jaison. Made with{" "}
            <Heart size={16} className="mx-1 text-red-400" fill="currentColor" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;