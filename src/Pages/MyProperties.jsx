import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";

const MyProperties = () => {
  useTitle("My Properties");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-properties?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching properties:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/properties/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setProperties(properties.filter((prop) => prop._id !== id));
          toast.success("Property deleted successfully!");
        } else {
          toast.error("Failed to delete property");
        }
      } catch (error) {
        console.error("Error deleting property:", error);
        toast.error("Error deleting property");
      }
    }
  };

  const handleUpdate = (property) => {
    navigate(`/update-property/${property._id}`, { state: { property } });
  };

  const handleViewDetails = (id) => {
    navigate(`/property/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            My Properties
          </h1>
          {properties.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              You haven't added any properties yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property._id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {property.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Category:</strong> {property.category}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Price:</strong> ${property.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Location:</strong> {property.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Posted:</strong>{" "}
                      {new Date(property.postedDate).toLocaleDateString()}
                    </p>
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleViewDetails(property._id)}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleUpdate(property)}
                        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(property._id)}
                        className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
