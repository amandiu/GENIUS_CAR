import React from "react";

const HeadLine = ({ title, subTitle, paragraph }) => {
  return (
    <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="text-[#FF3811] font-bold text-2xl lg:text-4xl">{title}</p>
      </div>
      <h2 className="max-w-lg mb-6 mt-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {subTitle}
      </h2>
      <p className="mt-4 px-10 text-lg text-[#878787]">{paragraph}</p>
    </div>
  );
};

export default HeadLine;
