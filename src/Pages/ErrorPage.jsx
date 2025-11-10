import useTitle from "../Hooks/useTitle";

const ErrorPage = () => {
  useTitle("404 - Page Not Found");
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Go Home
          </a>
          <br />
          <a
            href="/contact"
            className="inline-block text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
