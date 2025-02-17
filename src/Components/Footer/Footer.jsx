import logo from "../../assets/svgviewer-png-output.png";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black  text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {/* Logo and Info Section */}
        <div className="flex flex-col items-center lg:items-start lg:pl-20">
          <img src={logo} className="h-16 mb-4  transition-transform transform hover:scale-110" alt="Car Doctor" />
          <h2 className="text-3xl font-semibold mb-3 text-shadow-md">Car Doctor</h2>
          <p className="text-base mb-4 opacity-80">
            Edwin Diaz is a software and web technologies engineer, a life coach, and a serial trainer.
          </p>
          <div className="flex justify-center gap-4 text-3xl mb-4">
            <a href="#" className="hover:text-gray-400 transition transform hover:scale-125">
              <AiFillGoogleCircle />
            </a>
            <a href="#" className="hover:text-gray-400 transition transform hover:scale-125">
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-gray-400 transition transform hover:scale-125">
              <FaTwitterSquare />
            </a>
            <a href="#" className="hover:text-gray-400 transition transform hover:scale-125">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="text-lg mt-10 text-center lg:text-left lg:ml-16">
          <h3 className="font-bold text-xl mb-4 hover:underline">About</h3>
          <ul>
            <li className="mb-3 hover:text-gray-400">
              <a href="/">Home</a>
            </li>
            <li className="mb-3 hover:text-gray-400">
              <a href="#">Services</a>
            </li>
            <li className="mb-3 hover:text-gray-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-lg mt-10 text-center lg:text-left">
          <h3 className="font-bold text-xl mb-4 hover:underline">Company</h3>
          <ul>
            <li className="mb-3 hover:text-gray-400">
              <a href="/">Why Car Doctor</a>
            </li>
            <li className="mb-3 hover:text-gray-400">
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-lg mt-10 text-center lg:text-left">
          <h3 className="font-bold text-xl mb-4 hover:underline">Support</h3>
          <ul>
            <li className="mb-3 hover:text-gray-400">
              <a href="/">Support Center</a>
            </li>
            <li className="mb-3 hover:text-gray-400">
              <a href="#">Feedback</a>
            </li>
            <li className="mb-3 hover:text-gray-400">
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
        <p>&copy; 2025 Car Doctor. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
