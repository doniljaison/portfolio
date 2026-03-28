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
            Computer Science student building practical web and analytics projects with strong engineering fundamentals
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
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Web Development</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Data Analytics</span>
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
              I am currently pursuing BTech in Computer Science and Engineering at IIIT Sri City. I enjoy
              building end-to-end products, from designing role-based web platforms to developing
              analytics dashboards that convert large datasets into clear, actionable insights.
              My core interests include full-stack development, optimization problems, and applied machine learning.
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
                    Building responsive and role-based applications with React.js, Node.js, Express.js, and API-driven architectures.
                  </p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-gray-800">Data and Optimization</h5>
                  <p className="text-gray-600 text-sm">
                    Developing Python-based analytics workflows and optimization models for logistics, sales, and sparse graph problems.
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