import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import BestSeller from "../components/home/BestSeller";
import OrganicBenefits from "../components/home/OrganicBenefits";
import VideoSection from "../components/home/VideoSection";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <BestSeller />
      <OrganicBenefits />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;