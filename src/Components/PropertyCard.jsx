import { DollarSign, MapPin, Tag } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../AuthContexts/AuthContext";

const PropertyCard = ({ property }) => {
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      window.location.href = "/login";
    } else {
      window.location.href = `/property/${property._id}`;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-lg overflow-hidden border border-purple-700 dark:border-gray-600 hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300 group">
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
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-200">
          {property.name}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-purple-300">
            <DollarSign className="w-4 h-4 mr-2" />
            <span className="font-semibold">
              ${property.price.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {property.description}
        </p>
        <button
          onClick={handleViewDetails}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
        >
          <span>View Details</span>
          <Tag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
