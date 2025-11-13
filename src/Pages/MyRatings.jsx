import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";

const MyRatings = () => {
  useTitle("My Ratings");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-reviews?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching reviews:", err);
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
        const response = await fetch(`http://localhost:3000/reviews/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setReviews(reviews.filter((review) => review._id !== id));
          toast.success("Review deleted successfully!");
        } else {
          toast.error("Failed to delete review");
        }
      } catch (error) {
        console.error("Error deleting review:", error);
        toast.error("Error deleting review");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading your ratings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Ratings
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-white">
                No ratings found
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                You haven't given any ratings yet. Start by rating properties to
                see them here.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => navigate("/property")}
                  className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Browse Properties
                </button>
              </div>
            </div>
          ) : (
            reviews.map((review) => (
              <div
                key={review._id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-700/30 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/25 transition-all duration-300"
              >
                <img
                  src={review.propertyImage}
                  alt={review.propertyName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {review.propertyName}
                  </h3>
                  <div className="mb-3">
                    <ReactStars
                      count={5}
                      value={review.rating}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-purple-400">Review:</strong>{" "}
                    {review.text}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-purple-400">Date:</strong>{" "}
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    <strong className="text-purple-400">Reviewer:</strong>{" "}
                    {review.userName}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-500/25"
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

export default MyRatings;
