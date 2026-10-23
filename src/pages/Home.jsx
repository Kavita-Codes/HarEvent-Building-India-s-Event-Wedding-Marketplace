import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandsAndPartners from "../components/BrandsAndPartners";
import FeaturedServiceCategories from "../components/FeaturedServiceCategories";
import Events from "../components/Events";
import FindRightVendor from "../components/FindRightVendor";
import HowItWorks from "../components/HowItWorks";
import PopularVendors from "../components/PopularVendors";
import WhyChooseHarEvent from "../components/WhyChooseHarEvent";
import VendorRegistrationBanner from "../components/VendorRegistrationBanner";
import CustomerAssistance from "../components/CustomerAssistance";
import LatestBlogs from "../components/LatestBlogs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsAndPartners />
      <FeaturedServiceCategories />
      <HowItWorks />
      <Events />
      <FindRightVendor />
      <PopularVendors />
      <WhyChooseHarEvent />
      <VendorRegistrationBanner />
      <CustomerAssistance />
      <LatestBlogs />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
