import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContexts/AuthContext";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const MyProperties = () => {
  useTitle("My Properties");
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
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
      <div
        className={`min-h-screen py-12 flex justify-center items-center ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
            : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div
            className={`animate-spin rounded-full h-12 w-12 border-b-2 mx-auto ${
              isDarkMode ? "border-purple-400" : "border-blue-600"
            }`}
          ></div>
          <p
            className={`mt-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Loading your properties...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-6 ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
          >
            My Properties
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <svg
                className={`mx-auto h-24 w-24 ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3
                className={`mt-4 text-lg font-medium ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                No properties found
              </h3>
              <p
                className={`mt-2 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                You haven't added any properties yet. Start by adding your first
                property to get started.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => navigate("/add-property")}
                  className={`inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500"
                      : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Property
                </button>
              </div>
            </div>
          ) : (
            properties.map((property) => (
              <div
                key={property._id}
                className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-700/30 hover:shadow-purple-500/25"
                    : "bg-white border border-gray-200"
                }`}
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {property.name}
                  </h3>
                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <strong
                      className={
                        isDarkMode ? "text-purple-400" : "text-gray-900"
                      }
                    >
                      Category:
                    </strong>{" "}
                    {property.category}
                  </p>
                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <strong
                      className={
                        isDarkMode ? "text-purple-400" : "text-gray-900"
                      }
                    >
                      Price:
                    </strong>{" "}
                    ${property.price}
                  </p>
                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <strong
                      className={
                        isDarkMode ? "text-purple-400" : "text-gray-900"
                      }
                    >
                      Location:
                    </strong>{" "}
                    {property.location}
                  </p>
                  <p
                    className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <strong
                      className={
                        isDarkMode ? "text-purple-400" : "text-gray-900"
                      }
                    >
                      Posted:
                    </strong>{" "}
                    {new Date(property.postedDate).toLocaleDateString()}
                  </p>
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => handleViewDetails(property._id)}
                      className={`w-full px-4 py-2 rounded-xl transition-all duration-200 shadow-lg ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-purple-500/25"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleUpdate(property)}
                      className={`w-full px-4 py-2 rounded-xl transition-all duration-200 shadow-lg ${
                        isDarkMode
                          ? "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white hover:shadow-green-500/25"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(property._id)}
                      className={`w-full px-4 py-2 rounded-xl transition-all duration-200 shadow-lg ${
                        isDarkMode
                          ? "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white hover:shadow-red-500/25"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
