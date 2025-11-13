import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const UpdateProfile = () => {
  useTitle("Update Profile");
  const { user, updateUserProfile } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen py-12 ${
        isDarkMode
          ? "bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900"
          : "bg-gray-50"
      }`}
    >
      <Container>
        <div className="max-w-md mx-auto">
          <div
            className={`rounded-2xl shadow-2xl p-8 ${
              isDarkMode
                ? "bg-slate-800/50 backdrop-blur-sm border border-purple-700/30"
                : "bg-white border border-gray-200"
            }`}
          >
            <h1
              className={`text-3xl font-bold text-center mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Update Profile
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="photoURL"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDarkMode
                      ? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Enter profile picture URL"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-purple-500/25"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>
            <button
              onClick={() => navigate("/profile")}
              className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProfile;
