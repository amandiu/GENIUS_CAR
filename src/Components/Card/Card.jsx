import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Card = ({title,image,price}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20; // Adjust tilt intensity
    const y = ((clientY - top) / height - 0.5) * -20;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="flex justify-center items-center bg-[#0A0A0A] p-6">
      <div
        className="relative w-80 sm:w-96 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/10 transition-all duration-500 ease-out hover:shadow-2xl"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <a href="/" aria-label="View Item" className="block group">
          {/* Glowing Border */}
          <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#FF3811] transition-all duration-300"></div>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={image}
              className="object-cover w-full h-60 rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
              alt="Engine Diagnostics"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-2xl font-extrabold text-white tracking-wide transition-all duration-300 group-hover:text-[#FF3811]">
             {title}
            </h3>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold text-gray-200 transition-colors duration-300 group-hover:text-[#FF3811]">
                Price: ${price}.00
              </p>
              <a href="#" className="transition-all duration-300">
                <FaArrowRightLong className="text-2xl text-gray-200 group-hover:text-[#FF3811] group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
