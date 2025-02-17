import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Banner = () => {
  return (
    <div className="container mx-auto py-4 mt-4 px-4 md:px-6 lg:px-8">
      <div
        className="rounded-lg hero h-[450px] w-full bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/04/60/44/42/360_F_460444211_E7j3njYE705Rk1guKz9LKh58gFgiTybV.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute inset-0 rounded-lg"></div>
        <div className="hero-content text-neutral-content text-center z-10 px-4 md:px-8 lg:px-12">
          <div className="text-white max-w-2xl mx-auto">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5 text-sm md:text-lg font-normal">
              There are many variations of passages available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="font-semibold flex flex-col md:flex-row gap-4 text-white text-lg justify-center">
              <AnimatedButton
                text="Discover More"
                primaryColor="#ffffff"
                secondaryColor="#FF3811"
              />
              <AnimatedButton
                text="Discover More"
                primaryColor="#ffffff"
                secondaryColor="#fff0"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex gap-4">
          <div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#868585] cursor-pointer hover:bg-gray-700 transition">
            <FaArrowLeft />
          </div>
          <div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#FF3811] cursor-pointer hover:bg-red-600 transition">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
