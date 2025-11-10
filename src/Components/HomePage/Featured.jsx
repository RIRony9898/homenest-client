import { useEffect, useState } from "react";
import Container from "../Container";
import PropertyCard from "../PropertyCard";

const Featured = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/recent-properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Real Estate
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our most recently added properties. These premium listings
            showcase the latest opportunities in the real estate market.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}

        {properties.length === 0 && !loading && (
          <div className="text-center text-gray-400">
            <p>No properties available at the moment.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Featured;
