import Banner from "../Components/HomePage/Banner";
import ChooseUs from "../Components/HomePage/ChooseUs";
import Featured from "../Components/HomePage/Featured";
import Focus from "../Components/HomePage/Focus";
import Testimonial from "../Components/HomePage/Testimonial";
import { useTheme } from "../Contexts/ThemeContext";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          : "bg-gray-50"
      }`}
    >
      <Banner />
      <Focus />
      <Featured />
      <ChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
