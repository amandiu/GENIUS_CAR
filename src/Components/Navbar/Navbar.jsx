import logo from "../../assets/svgviewer-png-output.png";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const navbar = (
  <>
    <div className="flex text-lg font-semibold text-[#444444]">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  </>
);

const Navbar = () => {
  return (
    <div className=" container mx-auto px-14 bg-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <div className=" justify-center text-center">
            <a href="/">
              <img className=" ml-5 h-8 w-11" src={logo} alt="Genius Car" />
            </a>
            <h1 className=" font-bold text-[#444444] text-lg">Car Doctor</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3 text-2xl text-[#444444]  mr-4">
            <IoBagHandleOutline />
            <CiSearch />
          </div>
          <button className="bg-white font-semibold text-lg text-[#FF3811] border px-4 py-2 border-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
