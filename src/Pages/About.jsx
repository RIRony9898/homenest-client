import { Award, Heart, Target, TrendingUp, Users } from "lucide-react";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const About = () => {
  useTitle("About Us");
  const { isDarkMode } = useTheme();
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
            About HomeNest
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're more than just a real estate platform. We're your trusted
            partner in finding the perfect home, making smart investments, and
            building a brighter future in the world of property.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-purple-400 mr-4" />
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h3>
            </div>
            <p
              className={`leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To revolutionize the real estate industry by providing
              transparent, accessible, and innovative solutions that empower
              individuals and families to achieve their housing dreams and
              investment goals.
            </p>
          </div>
          <div
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-pink-400 mr-4" />
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Vision
              </h3>
            </div>
            <p
              className={`leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To be the world's most trusted real estate platform, connecting
              people with their ideal properties while fostering sustainable
              communities and economic growth through smart property
              investments.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              10,000+
            </div>
            <div
              className={`text-gray-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              5,000+
            </div>
            <div
              className={`text-gray-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Properties Listed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div
              className={`text-gray-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Cities Covered
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <div
              className={`text-gray-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Satisfaction Rate
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`text-center p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3
                className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Excellence
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                We strive for excellence in everything we do, from property
                listings to customer service.
              </p>
            </div>
            <div
              className={`text-center p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3
                className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Integrity
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Transparency and honesty are at the core of all our interactions
                and business practices.
              </p>
            </div>
            <div
              className={`text-center p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3
                className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Innovation
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                We continuously innovate to provide cutting-edge solutions for
                modern real estate needs.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Sarah Johnson
              </h3>
              <p className="text-purple-400 mb-3">CEO & Founder</p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With over 15 years in real estate, Sarah leads HomeNest with
                vision and expertise.
              </p>
            </div>
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Michael Chen
              </h3>
              <p className="text-purple-400 mb-3">CTO</p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Technology innovator driving our platform's cutting-edge
                features and user experience.
              </p>
            </div>
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Emily Rodriguez
              </h3>
              <p className="text-purple-400 mb-3">Head of Operations</p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Ensures seamless operations and exceptional customer
                satisfaction across all services.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
