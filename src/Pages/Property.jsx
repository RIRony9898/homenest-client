import { useEffect, useState } from "react";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";
import PropertyCard from "../Components/PropertyCard";

const Property = () => {
  useTitle("Property");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div>
      <Container>
        <h2 className="text-3xl font-bold text-center my-5">Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Property;
