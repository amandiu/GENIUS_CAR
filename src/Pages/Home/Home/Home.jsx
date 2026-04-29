import About from "../../../Components/About/About";
import Banner from "../../../Components/Banner/Banner";
import Services from "../Service/Services";
import Status from "../Status/Status";
import Populerproducts from "../Popularproducts/Populerproducts";
import Ourteam from "../OurTeam/Ourteam";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel";

const Home = () => {
  return (
    <div className="container bg-white">
      <Banner />
      <About />
      <Services />
      {/* Status Section */}
      <Status />
      {/* Popular Products Section */}
      <Populerproducts />
      {/* Our Team Section Start */}
      <Ourteam />
      {/* Core Features */}
      <CoreFeatures />
      <TestimonialCarousel/>
    </div>
  );
};

export default Home;
