import { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";

const MyRatings = () => {
  useTitle("My Ratings");
  const { user } = useContext(AuthContext);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your ratings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Ratings</h1>
          {reviews.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              You haven't given any ratings yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={review.propertyImage}
                    alt={review.propertyName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {review.propertyName}
                    </h3>
                    <div className="mb-2">
                      <ReactStars
                        count={5}
                        value={review.rating}
                        edit={false}
                        size={20}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Review:</strong> {review.text}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Date:</strong>{" "}
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Reviewer:</strong> {review.userName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRatings;
