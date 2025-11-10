import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });
  const [loading, setLoading] = useState(true);

  useTitle("Property Details");

  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching property:", err));

    fetch(`http://localhost:3000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to add a review");
      return;
    }

    const reviewData = {
      propertyId: id,
      propertyName: property.name,
      propertyImage: property.image,
      userEmail: user.email,
      userName: user.displayName,
      rating: newReview.rating,
      text: newReview.text,
      createdAt: new Date(),
    };

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        setReviews([...reviews, reviewData]);
        setNewReview({ rating: 0, text: "" });
        toast.success("Review added successfully!");
      } else {
        toast.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Error adding review");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return <div>Property not found</div>;
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
                <strong>Price:</strong> ${property.price}
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
                <strong>Name:</strong> {property.userName}
              </p>
              <p>
                <strong>Email:</strong> {property.userEmail}
              </p>
            </div>
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>

          {/* Add Review Form */}
          {user && (
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
                    required
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
          )}

          {/* Existing Reviews */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{review.userName}</h4>
                  <span className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
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
