import Banner from "../Components/HomePage/Banner";
import ChooseUs from "../Components/HomePage/ChooseUs";
import Featured from "../Components/HomePage/Featured";
import Focus from "../Components/HomePage/Focus";
import Testimonial from "../Components/HomePage/Testimonial";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Banner />
      <Focus />
      <Featured />
      <ChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
