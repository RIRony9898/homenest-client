import { ArrowLeft, Home, Mail } from "lucide-react";
import { Link } from "react-router";
import useTitle from "../Hooks/useTitle";

const ErrorPage = () => {
  useTitle("404 - Page Not Found");
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Oops! It looks like the page you're looking for has moved or doesn't
            exist. Don't worry, let's get you back on track.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <br />
          <Link
            to="/contact"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-700">
          <Link
            to="/property"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
