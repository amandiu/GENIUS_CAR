import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import About from "../About/About";

const Home = () => {
  return (
    <div className=" container px-14 bg-white">
      <Navbar></Navbar>
      <Banner />
      <About/>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Home;
