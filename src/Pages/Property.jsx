import { Search, SlidersHorizontal } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Container from "../Components/Container";
import PropertyCard from "../Components/PropertyCard";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const Property = () => {
  useTitle("All Properties");
  const { isDarkMode } = useTheme();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchProperties = useCallback(
    (search = "", sort = "", order = "desc") => {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (sort) params.append("sortBy", sort);
      if (order) params.append("sortOrder", order);

      fetch(`https://homenest-server-tan.vercel.app/properties?${params}`)
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching properties:", err);
          setLoading(false);
        });
    },
    []
  );

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProperties(searchTerm, sortBy, sortOrder);
  };

  const handleSort = (newSortBy) => {
    const newOrder =
      sortBy === newSortBy && sortOrder === "desc" ? "asc" : "desc";
    setSortBy(newSortBy);
    setSortOrder(newOrder);
    fetchProperties(searchTerm, newSortBy, newOrder);
  };

  if (loading) {
    return (
      <div
        className={`min-h-screen py-12 flex justify-center items-center ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p
            className={`mt-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Loading properties...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gray-50"
      }`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            All Properties
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore our comprehensive collection of premium properties. Find
            your perfect home or investment opportunity.
          </p>
        </div>

        {/* Search and Sort Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search by property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 w-80 ${
                  isDarkMode
                    ? "bg-slate-800/50 border border-purple-600/30 text-white placeholder-gray-400"
                    : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Search
            </button>
          </form>

          <div className="flex gap-2">
            <SlidersHorizontal className="text-purple-400 w-5 h-5 mt-2" />
            <span
              className={`mr-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Sort by:
            </span>
            <button
              onClick={() => handleSort("price")}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                sortBy === "price"
                  ? "bg-purple-600 text-white"
                  : isDarkMode
                  ? "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Price {sortBy === "price" && (sortOrder === "desc" ? "↓" : "↑")}
            </button>
            <button
              onClick={() => handleSort("createdAt")}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                sortBy === "createdAt"
                  ? "bg-purple-600 text-white"
                  : isDarkMode
                  ? "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Date{" "}
              {sortBy === "createdAt" && (sortOrder === "desc" ? "↓" : "↑")}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
        {properties.length === 0 && (
          <div
            className={`text-center mt-12 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p className="text-xl">No properties available at the moment.</p>
            <p className="mt-2">Check back soon for new listings!</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Property;
