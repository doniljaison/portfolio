// About section component - tells people about me
import { User, Heart, Code } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating meaningful digital experiences
          </p>
        </div>
        
        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal info card - spans 1 column */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <User className="mr-3 text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold">Personal Information</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p><strong>Name:</strong> Donil Jaison</p>
              <p><strong>Location:</strong> Thrissur, Kerala</p>
              <p><strong>Email:</strong> donil.j23@iiits.in</p>
              <p><strong>Status:</strong> BTech CSE Student</p>
              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Computer Science</span>
              </div>
            </div>
          </div>
          
          {/* Personal statement card - spans 2 columns */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Heart className="mr-3 text-red-500" size={24} />
              <h3 className="text-2xl font-semibold">About Me</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate Computer Science student currently pursuing my BTech from IIIT Sri City. 
              My journey in technology started with curiosity about how digital systems work, and has 
              evolved into a strong foundation in web development and computer science fundamentals.
              I'm excited to learn new technologies and build impactful solutions.
            </p>
            
            {/* What I do section */}
            <div>
              <div className="flex items-center mb-4">
                <Code className="mr-3 text-green-600" size={24} />
                <h4 className="text-xl font-semibold">What I Do</h4>
              </div>
              <div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-800">Web Development</h5>
                  <p className="text-gray-600 text-sm">
                    Learning and building web applications with modern technologies like React, Node.js, and JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;