import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import BestSeller from "../components/home/BestSeller";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <BestSeller />
    </>
  );
};

export default Home;