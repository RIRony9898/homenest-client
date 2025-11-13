import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const AddProperty = () => {
  useTitle("Add Property");
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
  });

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

    const propertyData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
      postedDate: new Date().toISOString(),
      createdAt: new Date(),
    };

    try {
      const response = await fetch(
        "https://homenest-server-tan.vercel.app/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
        }
      );

      if (response.ok) {
        toast.success("Property added successfully!");
        navigate("/my-properties");
      } else {
        toast.error("Failed to add property");
      }
    } catch (error) {
      console.error("Error adding property:", error);
      toast.error("Error adding property");
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
            Add New Property
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

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add Property"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
