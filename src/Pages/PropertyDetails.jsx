import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
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

  const handleUpdate = () => {
    navigate(`/update-property/${id}`, { state: { property } });
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! This will permanently delete the property.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/properties/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Property deleted successfully!");
          navigate("/property");
        } else {
          toast.error("Failed to delete property");
        }
      } catch (error) {
        console.error("Error deleting property:", error);
        toast.error("Error deleting property");
      }
    }
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
            Loading property details...
          </p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div
        className={`min-h-screen py-12 flex justify-center items-center ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gray-50"
        }`}
      >
        <div
          className={`text-center ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p>Property not found</p>
        </div>
      </div>
    );
  }

  const isOwner = user && user.email === property.userEmail;

  return (
    <div
      className={`min-h-screen py-12 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gray-50"
      }`}
    >
      <Container>
        <div
          className={`max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden border ${
            isDarkMode
              ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
              : "bg-white border-gray-200"
          }`}
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {property.name}
            </h1>
            <p
              className={`mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {property.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Price:
                </strong>{" "}
                ${property.price.toLocaleString()}
              </p>
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Location:
                </strong>{" "}
                {property.location}
              </p>
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Category:
                </strong>{" "}
                {property.category}
              </p>
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Posted Date:
                </strong>{" "}
                {new Date(property.postedDate).toLocaleDateString()}
              </p>
            </div>
            <div className="mb-6">
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Posted by:
              </h3>
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Name:
                </strong>{" "}
                {property.userName}
              </p>
              <p className="text-purple-300">
                <strong
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Email:
                </strong>{" "}
                {property.userEmail}
              </p>
            </div>

            {/* Action Buttons for Property Owner */}
            {isOwner && (
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleUpdate}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25"
                >
                  Update Property
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-red-500/25"
                >
                  Delete Property
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div className="max-w-4xl mx-auto mt-8">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ratings & Reviews
          </h2>

          {/* Add Review Form */}
          {user && (
            <div
              className={`shadow-xl rounded-lg p-6 mb-6 border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Add a Review
              </h3>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Rating:
                  </label>
                  <ReactStars
                    count={5}
                    value={newReview.rating}
                    onChange={(rating) =>
                      setNewReview({
                        ...newReview,
                        rating: rating,
                      })
                    }
                    size={30}
                    activeColor="#ffd700"
                    color="#6b7280"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Review:
                  </label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) =>
                      setNewReview({ ...newReview, text: e.target.value })
                    }
                    className={`w-full p-3 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 ${
                      isDarkMode
                        ? "bg-slate-700 border border-purple-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    rows="4"
                    placeholder="Write your review here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25"
                >
                  Submit Review
                </button>
              </form>
            </div>
          )}

          {/* Existing Reviews */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <div
                className={`shadow-xl rounded-lg p-6 border ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <p
                  className={`text-center ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  No reviews yet. Be the first to review this property!
                </p>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className={`shadow-xl rounded-lg p-6 border ${
                    isDarkMode
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-700/30"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {review.userName}
                    </h4>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
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
                  <p
                    className={`mt-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {review.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;
