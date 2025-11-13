import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us");
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          : "bg-gray-50"
      }`}
    >
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions about our services? Need help finding your dream
            property? We're here to help! Reach out to our expert team and we'll
            get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h2>
              <p
                className={`mb-8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Ready to start your real estate journey? Our team of experts is
                standing by to assist you with all your property needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Phone
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    +1 (555) 123-4567
                  </p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Mon-Fri 9AM-6PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    support@homenest.com
                  </p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    sales@homenest.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Office
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    123 XY Street
                  </p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Digital City, DC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Business Hours
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className={`p-6 rounded-xl border mt-8 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Why Choose HomeNest?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {"<2hrs"}
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Response Time
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-slate-700/50 border border-purple-600/30 text-white placeholder-gray-400"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-slate-700/50 border border-purple-600/30 text-white placeholder-gray-400"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 ${
                    isDarkMode
                      ? "bg-slate-700/50 border border-purple-600/30 text-white placeholder-gray-400"
                      : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none ${
                    isDarkMode
                      ? "bg-slate-700/50 border border-purple-600/30 text-white placeholder-gray-400"
                      : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-xl border text-left ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                How quickly can I get a response?
              </h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                We typically respond to all inquiries within 2 hours during
                business hours.
              </p>
            </div>
            <div
              className={`p-6 rounded-xl border text-left ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Do you offer virtual tours?
              </h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Yes! Most of our properties include virtual tours and 360°
                photography.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
