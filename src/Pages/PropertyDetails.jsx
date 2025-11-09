import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });

  useTitle("Property Details");

  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error("Error fetching property:", err));
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ rating: 0, text: "" });
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
            <p className="text-gray-700 mb-4">{property.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p>
                <strong>Price:</strong> {property.price}
              </p>
              <p>
                <strong>Location:</strong> {property.location}
              </p>
              <p>
                <strong>Category:</strong> {property.category}
              </p>
              <p>
                <strong>Posted Date:</strong>{" "}
                {new Date(property.postedDate).toLocaleDateString()}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Posted by:</h3>
              <p>
                <strong>Name:</strong> {property.postedBy.name}
              </p>
              <p>
                <strong>Email:</strong> {property.postedBy.email}
              </p>
              {property.postedBy.photo && (
                <img
                  src={property.postedBy.photo}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
              )}
            </div>
          </div>
        </div>

        {/* rating & review */}
        <div className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Rating:</label>
                <select
                  value={newReview.rating}
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      rating: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value={0}>Select Rating</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Review:</label>
                <textarea
                  value={newReview.text}
                  onChange={(e) =>
                    setNewReview({ ...newReview, text: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit Review
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <ReactStars
                  count={5}
                  value={review.rating}
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                />
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
