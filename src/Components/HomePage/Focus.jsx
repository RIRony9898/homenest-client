import {
  Building,
  Calculator,
  FileText,
  Home,
  MapPin,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Container";

const iconMap = {
  Home,
  Building,
  MapPin,
  Search,
  Calculator,
  FileText,
};

const Focus = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/focus.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services:", error));
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet all your
            property needs. From buying and selling to investment planning,
            we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-purple-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-purple-500/25">
            Explore All Services
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Focus;
