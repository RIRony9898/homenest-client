import {
  Calendar,
  Edit,
  HousePlus,
  Key,
  LogOut,
  Mail,
  Package,
  Shield,
  Star,
  Trophy,
  User,
} from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const UserProfile = () => {
  useTitle("Profile");
  const { user, signOutUser } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to sign out. Please try again.");
      });
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
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div
            className={`rounded-2xl shadow-2xl p-8 mb-8 ${
              isDarkMode
                ? "bg-slate-800/50 backdrop-blur-sm border border-purple-700/30"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full ring-4 ring-purple-400/30 overflow-hidden">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <HousePlus className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mr-3">
                    {user.displayName || "User"}
                  </h1>
                  <div className="flex items-center space-x-1 bg-purple-600/20 px-3 py-1 rounded-full">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-purple-300 text-sm font-medium">
                      Pro User
                    </span>
                  </div>
                </div>
                <p
                  className={`text-xl mb-4 flex items-center justify-center md:justify-start ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Mail className="w-5 h-5 mr-2 text-purple-400" />
                  {user.email}
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                      isDarkMode ? "bg-slate-700/50" : "bg-gray-100"
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Joined{" "}
                      {new Date(
                        user.metadata?.creationTime
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                      isDarkMode ? "bg-green-600/20" : "bg-green-100"
                    }`}
                  >
                    <Shield className="w-4 h-4 text-green-400" />
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-green-300" : "text-green-600"
                      }`}
                    >
                      {user.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Account Information */}
            <div
              className={`rounded-2xl shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-slate-800/50 backdrop-blur-sm border border-purple-700/30"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-purple-400 mr-3" />
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Account Information
                </h2>
              </div>
              <div className="space-y-4">
                <div
                  className={`rounded-lg p-4 ${
                    isDarkMode ? "bg-slate-700/30" : "bg-gray-100"
                  }`}
                >
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Email Address
                  </label>
                  <p
                    className={`text-lg flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Mail className="w-4 h-4 mr-2 text-purple-400" />
                    {user.email}
                  </p>
                </div>

                <div
                  className={`rounded-lg p-4 ${
                    isDarkMode ? "bg-slate-700/30" : "bg-gray-100"
                  }`}
                >
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Account Status
                  </label>
                  <div className="flex items-center">
                    {user.emailVerified ? (
                      <>
                        <Shield className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold">
                          Verified Account
                        </span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 text-red-400 mr-2" />
                        <span className="text-red-400 font-semibold">
                          Unverified Account
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={`rounded-lg p-4 ${
                    isDarkMode ? "bg-slate-700/30" : "bg-gray-100"
                  }`}
                >
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Member Since
                  </label>
                  <p
                    className={`text-lg flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    {new Date(user.metadata?.creationTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className={`rounded-2xl shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-slate-800/50 backdrop-blur-sm border border-purple-700/30"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-purple-400 mr-3" />
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Actions
                </h2>
              </div>
              <div className="space-y-4">
                <button
                  className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-purple-500/25"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                  onClick={() => navigate("/profileUpdate")}
                >
                  <Edit className="w-5 h-5 mr-2" />
                  Edit Profile
                </button>

                <button
                  className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 border flex items-center justify-center ${
                    isDarkMode
                      ? "bg-slate-700/50 hover:bg-slate-600/50 text-white border-purple-600/30"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300"
                  }`}
                  onClick={() => navigate("/passwordChange")}
                >
                  <Key className="w-5 h-5 mr-2" />
                  Change Password
                </button>

                <button
                  className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center ${
                    isDarkMode
                      ? "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white hover:shadow-yellow-500/25"
                      : "bg-yellow-600 hover:bg-yellow-700 text-white"
                  }`}
                  onClick={() => navigate("/installed")}
                >
                  <Package className="w-5 h-5 mr-2" />
                  Favorite Packages
                </button>

                <button
                  className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center ${
                    isDarkMode
                      ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:shadow-red-500/25"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                  onClick={handleSignOut}
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
