import { Check, Eye, EyeOff, X } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const ChangePassword = () => {
  useTitle("Change Password");
  const { changePassword } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    setPasswordError("");
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await changePassword(newPassword);
      toast.success("Password changed successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error(
        error.message || "Failed to change password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const passwordRequirements = [
    { test: newPassword.length >= 6, text: "At least 6 characters" },
    { test: /[A-Z]/.test(newPassword), text: "One uppercase letter" },
    { test: /[a-z]/.test(newPassword), text: "One lowercase letter" },
  ];

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
              Change Password
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="newPassword"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-200 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-purple-400"
                        : "text-gray-500 hover:text-purple-600"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Requirements */}
                {newPassword && (
                  <div className="mt-3 space-y-2">
                    {passwordRequirements.map((req, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm"
                      >
                        {req.test ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400" />
                        )}
                        <span
                          className={
                            req.test ? "text-green-400" : "text-red-400"
                          }
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-200 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-purple-400"
                        : "text-gray-500 hover:text-purple-600"
                    }`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {passwordError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{passwordError}</p>
                </div>
              )}

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
                {loading ? "Changing..." : "Change Password"}
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

export default ChangePassword;
