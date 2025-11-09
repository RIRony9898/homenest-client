import { Link } from "react-router";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={property.thumbnail}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-1">
          <strong>Category:</strong> {property.category}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Price:</strong> ${property.price}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Location:</strong> {property.location}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Posted by:</strong> {property.postedBy}
        </p>
        <Link
          to={`/property/${property._id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
