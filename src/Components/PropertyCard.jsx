import { DollarSign, MapPin, Tag } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../AuthContexts/AuthContext";
import { useTheme } from "../Contexts/ThemeContext";

const PropertyCard = ({ property }) => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();

  const handleViewDetails = () => {
    if (!user) {
      window.location.href = "/login";
    } else {
      window.location.href = `/property/${property._id}`;
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${
        isDarkMode ? "from-slate-800 to-slate-900" : "from-white to-gray-100"
      } shadow-xl rounded-lg overflow-hidden border ${
        isDarkMode ? "border-purple-700" : "border-gray-300"
      } hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300 group flex flex-col`}
    >
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className={`text-xl font-semibold mb-3 ${
            isDarkMode ? "text-white" : "text-gray-900"
          } group-hover:text-purple-300 transition-colors duration-200`}
        >
          {property.name}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-purple-300">
            <DollarSign className="w-4 h-4 mr-2" />
            <span className="font-semibold">
              ${property.price.toLocaleString()}
            </span>
          </div>
          <div
            className={`flex items-center ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>
        <p
          className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } flex-1`}
        >
          {property.description}
        </p>
        <button
          onClick={handleViewDetails}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 mt-auto"
        >
          <span>View Details</span>
          <Tag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
