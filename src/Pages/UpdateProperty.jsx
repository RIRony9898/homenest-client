import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const UpdateProperty = () => {
  useTitle("Update Property");
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    if (location.state?.property) {
      const property = location.state.property;
      setFormData({
        name: property.name || "",
        description: property.description || "",
        category: property.category || "",
        price: property.price || "",
        location: property.location || "",
        image: property.image || "",
      });
    } else {
      fetch(`https://homenest-server-tan.vercel.app/properties/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name || "",
            description: data.description || "",
            category: data.category || "",
            price: data.price || "",
            location: data.location || "",
            image: data.image || "",
          });
        })
        .catch((err) => console.error("Error fetching property:", err));
    }
  }, [id, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://homenest-server-tan.vercel.app/properties/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Property updated successfully!");
        navigate(`/property/${id}`);
      } else {
        toast.error("Failed to update property");
      }
    } catch (error) {
      console.error("Error updating property:", error);
      toast.error("Error updating property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen py-12 ${
        isDarkMode ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-lg shadow-lg p-8 ${
            isDarkMode ? "bg-slate-800 shadow-purple-900/20" : "bg-white"
          }`}
        >
          <h1
            className={`text-3xl font-bold mb-8 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Update Property
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Property Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isDarkMode
                    ? "bg-slate-700 border-purple-700 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Image Link
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isDarkMode
                    ? "bg-slate-700 border-purple-700 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  User Email (Read-only)
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  User Name (Read-only)
                </label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode
                      ? "bg-slate-700 border-purple-700 text-gray-100"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate("/my-properties")}
                className={`px-6 py-2 rounded-md focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500"
                    : "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500"
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Property"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
