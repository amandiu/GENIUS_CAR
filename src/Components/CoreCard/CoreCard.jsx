import React from "react";

const CoreCard = ({ Title, image, extraStyle }) => {
  return (
    <div
      className={`${extraStyle} p-10 h-[180px] w-[180px] flex flex-col justify-center items-center
         rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 `}
    >
      <img
        className="rounded h-[80px] w-[60px] mb-4"
        src={image}
        alt="100% Guarantee"
      />
      <p className="font-bold text-lg text-[#444444]">{Title}</p>
    </div>
  );
};

export default CoreCard;
