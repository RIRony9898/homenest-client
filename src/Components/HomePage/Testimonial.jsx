import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import Container from "../Container";

const Testimonial = () => {
  const { isDarkMode } = useTheme();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error loading testimonials:", error));
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "text-yellow-400 fill-current"
            : isDarkMode
            ? "text-gray-300"
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div
      className={`py-16 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-800 to-slate-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Customer Testimonials
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } text-lg max-w-3xl mx-auto`}
          >
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with HomeNest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-700 to-slate-800 border-purple-700 hover:border-purple-500 hover:shadow-purple-500/10"
                  : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-gray-200/50"
              } p-6 rounded-lg border transition-all duration-300 hover:shadow-lg relative`}
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } leading-relaxed mb-6 italic`}
              >
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500"
                />
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div
            className={`${
              isDarkMode
                ? "bg-slate-800 border-purple-700"
                : "bg-white border-gray-200"
            } px-8 py-6 rounded-lg border inline-block`}
          >
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  4.9/5
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Average Rating
                </div>
                <div className="flex justify-center mt-1">{renderStars(5)}</div>
              </div>
              <div
                className={`w-px h-16 ${
                  isDarkMode ? "bg-purple-700" : "bg-gray-300"
                }`}
              ></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  2,500+
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Reviews
                </div>
              </div>
              <div
                className={`w-px h-16 ${
                  isDarkMode ? "bg-purple-700" : "bg-gray-300"
                }`}
              ></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  98%
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
