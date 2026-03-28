import { GraduationCap, Award, Users } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      school: "Indian Institute of Information Technology, Sri City",
      period: "Expected May 2027",
      gpa: "7.7/10.0",
      description: "Coursework includes core CS foundations with focus on software systems and development.",
      courses: ["DBMS", "Object-Oriented Programming", "DSA", "Operating Systems", "Computer Networks"]
    },
    {
      degree: "Class XII (Senior Secondary)",
      school: "The Indian School, Kingdom of Bahrain",
      period: "2023",
      gpa: "94.6%",
      description: "CBSE Class XII with Computer Science, Mathematics, and Physics.",
      courses: ["Computer Science", "Mathematics", "Physics"]
    },
    {
      degree: "Class X (Secondary)",
      school: "The Indian School, Kingdom of Bahrain", 
      period: "2021",
      gpa: "91.6%",
      description: "CBSE Class X with distinction and strong academic performance.",
      courses: ["CBSE Curriculum"]
    }
  ];

  const achievements = [
    {
      title: "Principal's List",
      organization: "The Indian School, Kingdom of Bahrain",
      description: "Awarded for academic excellence in CBSE Class XII results."
    },
    {
      title: "Assistant House Captain",
      organization: "The Indian School, Kingdom of Bahrain",
      description: "Led a student body of 100+ and coordinated large-scale event logistics."
    }
  ];

  const extracurricular = [
    {
      title: "Badminton",
      description: "Represented school in CBSE Cluster tournaments."
    },
    {
      title: "Karate",
      description: "Secured medals in national-level competitions."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Education & Achievements</h2>
          
        </div>
        
        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-3 text-blue-600" size={28} />
            <h3 className="text-3xl font-semibold">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <h4 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">{edu.degree}</h4>
                <p className="text-base md:text-lg font-medium text-gray-700 mb-2">{edu.school}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">{edu.period}</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {(edu.degree.startsWith("Class X") || edu.degree.startsWith("Class XII")) ? "Percentage: " : "GPA: "}{edu.gpa}
                  </span>
                </div>
                {(!edu.degree.startsWith("Class X") && !edu.degree.startsWith("Class XII")) && (
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                )}
                
                {(!edu.degree.startsWith("Class")) && (
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span key={courseIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements & Awards */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Award className="mr-3 text-yellow-600" size={28} />
            <h3 className="text-3xl font-semibold">Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{achievement.title}</h4>
                </div>
                <p className="font-medium text-gray-600 mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Extracurricular Activities */}
        <div>
          <div className="flex items-center mb-8">
            <Users className="mr-3 text-green-600" size={28} />
            <h3 className="text-3xl font-semibold">Extracurricular Activities</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricular.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{activity.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;