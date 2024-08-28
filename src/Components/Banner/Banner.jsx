import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="container mx-auto py-3">
      <div
        className="rounded-lg  hero h-[450px] w-auto"
        style={{
          borderRadius: "15px",
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/04/60/44/42/360_F_460444211_E7j3njYE705Rk1guKz9LKh58gFgiTybV.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60  rounded-xl"></div>
        <div className="hero-content  text-neutral-content text-justify">
          <div className="ml-[-600px] text-white">
            <h1 className="mb-5 text-4xl font-bold">
              Affordable<br></br> Price For Car <br></br>Servicing
            </h1>
            <p className="mb-5 text-lg font-normal">
              There are many variations of passages of available, but <br></br>{" "}
              the majority have suffered alteration in some form
            </p>
            <div className="font-semibold gap-4 grid-rows-2 flex text-white text-lg">
              <button className=" rounded-md px-2 py-1 bg-[#FF3811]">
                Discover More
              </button>
              <button className="border rounded-md py-1 px-2 border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 mt-[300px] ml-[1100px]">
          <div className="h-[40px] w-[40px] rounded-[20px] items-center flex text-white justify-center bg-[#868585]">
            <FaArrowLeft />
          </div>
          <div className="h-[40px] w-[40px] rounded-[20px] items-center flex text-white justify-center bg-[#FF3811]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
