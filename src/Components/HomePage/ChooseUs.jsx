import {
  Award,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
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
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/chooseUs.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error loading features:", error));
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose HomeNest?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
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
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-slate-800 px-8 py-4 rounded-lg border border-purple-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10,000+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-purple-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5,000+</div>
              <div className="text-sm text-gray-300">Properties Listed</div>
            </div>
            <div className="w-px h-12 bg-purple-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-300">Cities Covered</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
