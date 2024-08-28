import logo from "../../assets/svgviewer-png-output.png";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container mx-auto pb-20 pt-24">
      <div className="flex grid-cols-4 gap-5 justify-around">
        <div className=" justify-center items-center">
          <img src={logo} className="h-8 ml-6" alt="Car Doctor" />
          <span className="self-center py-2 text-2xl font-semibold whitespace-nowrap dark:text-white">
            Car Doctor
          </span>

          <p className="self-center mt-3 py-2  text-base whitespace-nowrap dark:text-white">
            Edwin Diaz is a software and web<br></br>technologies engineer.a
            life coach<br></br> trainer who is also a serial
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <AiFillGoogleCircle />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaLinkedin />
          </div>
        </div>
        <div className=" text-white">
          <p className="font-bold text-xl">About</p>
          <ul className="mt-7 font-normal text-base ">
            <li className="mt-4">
              <a href="/">Home</a>
            </li>
            <li className="mt-4">
              <a href="">Service</a>
            </li>
            <li className="mt-4">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className=" text-white">
          <p className="font-bold text-xl">Company</p>
          <ul className="mt-7 font-normal text-base ">
            <li className="mt-4">
              <a href="/">Why Car Doctor</a>
            </li>
            <li className="mt-4">
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className=" text-white">
          <p className="font-bold text-xl">Support</p>
          <ul className="mt-7 font-normal text-base ">
            <li className="mt-4">
              <a href="/">Support Center</a>
            </li>
            <li className="mt-4">
              <a href="">Feedback</a>
            </li>
            <li className="mt-4">
              <a href="">Accesbility</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
