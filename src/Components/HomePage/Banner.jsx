import { useEffect, useState } from "react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "../../Contexts/ThemeContext";
import Container from "../Container";

const Banner = () => {
  const { isDarkMode } = useTheme();
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/slides.json")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error loading slides:", error));
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={slides.length >= 3}
        className="h-[60vh] md:h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
              <Container>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Link
                      to={"/property"}
                      className={`btn ${
                        isDarkMode
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-purple-500 hover:bg-purple-600"
                      } text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-purple-500/25`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
