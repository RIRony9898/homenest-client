import Banner from "../Components/HomePage/Banner";
import ChooseUs from "../Components/HomePage/ChooseUs";
import Featured from "../Components/HomePage/Featured";
import Focus from "../Components/HomePage/Focus";
import Testimonial from "../Components/HomePage/Testimonial";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Focus />
      <Featured />
      <ChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
