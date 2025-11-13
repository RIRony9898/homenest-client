import {
  Award,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import Container from "../Container";

const iconMap = {
  Shield,
  Clock,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
};

const ChooseUs = () => {
  const { isDarkMode } = useTheme();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/chooseUs.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error loading features:", error));
  }, []);

  return (
    <div
      className={`py-16 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-800 to-slate-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose HomeNest?
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } text-lg max-w-3xl mx-auto`}
          >
            Discover what makes HomeNest the preferred choice for real estate
            solutions. We're committed to providing exceptional service and
            unparalleled value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-700 to-slate-800 border-purple-700 hover:border-purple-500 hover:shadow-purple-500/10"
                    : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-gray-200/50"
                } p-6 rounded-lg border transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div
            className={`inline-flex items-center space-x-8 ${
              isDarkMode
                ? "bg-slate-800 border-purple-700"
                : "bg-white border-gray-200"
            } px-8 py-4 rounded-lg border`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10,000+</div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Happy Customers
              </div>
            </div>
            <div
              className={`w-px h-12 ${
                isDarkMode ? "bg-purple-700" : "bg-gray-300"
              }`}
            ></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5,000+</div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Properties Listed
              </div>
            </div>
            <div
              className={`w-px h-12 ${
                isDarkMode ? "bg-purple-700" : "bg-gray-300"
              }`}
            ></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Cities Covered
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
