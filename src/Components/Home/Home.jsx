import About from "../About/About";
import Banner from "../Banner/Banner"
import Services from "../Service/Services";

const Home = () => {
  return (
    <div className=" container bg-white">
      <Banner/>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
