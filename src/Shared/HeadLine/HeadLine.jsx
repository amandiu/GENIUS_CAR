import React from "react";

const HeadLine = ({
  className,
  title,
  subTitle,
  paragraph,
  extraStyle,
  extraclass,
}) => {
  return (
    <div className={`${className}`}>
      <div>
        <p className="text-[#FF3811] font-extrabold -mt-20 text-2xl lg:text-4xl">
          {title}
        </p>
      </div>
      <h2
        className={`text-center mb-2 mt-2 font-sans text-3xl 
          font-semibold text-gray-900 sm:text-4xl md:mx-auto ${extraStyle}`}
      >
        {subTitle}
      </h2>
      <p className={`mt-4 text-lg mb-5 text-[#878787] ${extraStyle}`}>
        {paragraph}
      </p>
    </div>
  );
};

export default HeadLine;
