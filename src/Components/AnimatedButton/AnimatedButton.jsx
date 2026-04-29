import { useState } from "react";

const AnimatedButton = ({
  text = "More Products",
  //   href = "/products",
  href = "/",
  primaryColor = "#FF3811",
  secondaryColor = "#FFFFFF",
  hoverEffect = true,
  rounded = true,
  extraClasses = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`text-center ${
        extraClasses ? "m-0" : "lg:mt-5"
      } ${extraClasses}`}
    >
      <a
        href={href}
        className={`relative inline-block px-6 lg:py-3 py-1 text-lg font-semibold border-2 transition-all duration-300 
          ${rounded ? "rounded-lg" : "rounded-md"} 
          ${hoverEffect ? "transform hover:scale-105" : ""}
          shadow-lg ${hovered ? "animate-pulse" : ""} ${extraClasses}`}
        style={{
          color: primaryColor,
          backgroundColor: secondaryColor,
          borderColor: primaryColor,
        }} 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
        {/* Glowing Effect */}
        {hoverEffect && (
          <span
            className="absolute inset-0 opacity-20 rounded-full blur-xl scale-110 transition-all duration-500"
            style={{ backgroundColor: primaryColor }}
          ></span>
        )}
      </a>
    </div>
  );
};

export default AnimatedButton;
