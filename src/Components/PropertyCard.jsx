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
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl rounded-lg overflow-hidden border border-purple-700 hover:shadow-purple-500/20 transition-all duration-300">
      <img
        src={property.thumbnail}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {property.name}
        </h3>
        <p className="text-purple-300 mb-1">
          <strong className="text-gray-300">Category:</strong>{" "}
          {property.category}
        </p>
        <p className="text-purple-300 mb-1">
          <strong className="text-gray-300">Price:</strong> ${property.price}
        </p>
        <p className="text-purple-300 mb-1">
          <strong className="text-gray-300">Location:</strong>{" "}
          {property.location}
        </p>
        <p className="text-purple-300 mb-2">
          <strong className="text-gray-300">Description:</strong>{" "}
          {property.description}
        </p>
        <button
          onClick={handleViewDetails}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
