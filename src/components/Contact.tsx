// Contact section component - has contact form and info
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | "info" | null; message: string }>({ type: null, message: "" });

  // Handle form submission - send via Formspree
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setSubmitting(true);
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xldwvrgl";
      if (!formspreeId) {
        setStatus({ type: "info", message: "Message feature not configured. Ask the site owner to set VITE_FORMSPREE_ID." });
        setSubmitting(false);
        return;
      }
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again later." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    }
    setSubmitting(false);
  }

  // Handle input changes
  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle resume download
  function handleDownloadResume() {
    alert("Resume download will be available soon.");
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4 text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">donil.j23@iiits.in</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-4 text-green-600" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 97471 09684</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-4 text-red-600" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Thrissur, Kerala</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/doniljaison" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/donil-jaison-93a17428a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Linkedin size={24} />
                  </a>
                  {/* Twitter removed */}
                </div>
              </div>
              
              {/* Resume download removed */}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {status.type && (
                  <div
                    className={
                      status.type === "success"
                        ? "text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded"
                        : status.type === "error"
                        ? "text-red-700 bg-red-50 border border-red-200 px-4 py-2 rounded"
                        : "text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2 rounded"
                    }
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Send size={16} className="mr-2 inline" />
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;