// Hero section component - the main landing area
import { Github, Linkedin, ArrowDown } from "lucide-react";

function Hero() {
  // Function to scroll to different sections when buttons are clicked
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-indigo-950 to-indigo-900">
      <div className="text-center text-white max-w-3xl mx-auto px-6 py-24">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Donil <span className="text-indigo-300">Jaison</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-200/90 leading-relaxed mb-10">
          Computer Science student focused on modern web development and clean, usable interfaces.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-5 py-2.5 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition-colors"
          >
            View my work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2.5 rounded-md border border-white/50 text-white hover:bg-white hover:text-slate-900 transition-colors"
          >
            Get in touch
          </button>
          <a
            href="/portfolio/resume.pdf"
            download="Donil_Jaison_Resume.pdf"
            className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Social media links */}
        <div className="flex items-center justify-center gap-5 opacity-90">
          <a href="https://github.com/doniljaison" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/donil-jaison-93a17428a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <Linkedin size={24} />
          </a>
          {/* Mail link removed per request */}
        </div>
      </div>
      
      {/* Scroll down button */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </button>
    </div>
  );
}

export default Hero;