import React from "react";
import Slider from "react-slick";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook.png";
import team1 from "../../../assets/Team/a21464b852f0428fa73ef175786dc9e7.jpeg";
import team2 from "../../../assets/Team/two-girls-mechanics-fixing-automobile_7502-4402.jpg";
import team3 from "../../../assets/Team/GettyImages-522272311-5949bdc15f9b58d58a035319.jpg";
import team4 from "../../../assets/Team/attractive-girl-short-shorts-top-260nw-1028862829.jpg";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-15px] transform -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-lg bg-[#ff6411] hover:bg-[#FF3811] transition-all duration-300"
    onClick={onClick}
  >
    <MdNavigateNext className="text-white text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 top-1/2 left-[-15px] transform -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-lg bg-[#FF3811] hover:bg-blue-600 transition-all duration-300"
    onClick={onClick}
  >
    <GrFormPrevious className="text-white text-xl" />
  </div>
);

const teamMembers = [
  { img: team1, name: "Car Engine Plug", role: "Engine Expert" },
  { img: team2, name: "Auto Specialist", role: "Repair Expert" },
  { img: team3, name: "Vehicle Mechanic", role: "Diagnostics Expert" },
  { img: team4, name: "Tire Technician", role: "Wheel Expert" },
];

const OurTeam = ({ slidesToShow = 3 }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-16 shadow-[0px_4px_6px_rgba(128,0,128,0.3)] mb-10 container mx-auto text-center bg-gradient-to-r from-blue-100 via-teal-200 to-pink-100 rounded-lg sm:px-2">
      <HeadLine
        className="mt-10"
        title="Team"
        subTitle="Meet Our Team"
        extraStyle="lg:mx-40"
        paragraph="The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable."
      />
      <div className="slider-container px-4 mt-8">
        <Slider {...settings} className="transition-all duration-500">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-1">
              <div className="flex flex-col items-center bg-white border-2 border-[#FF3811] rounded-md py-3 px-2 transform hover:scale-105 transition-all duration-300 shadow-md mb-4">
                <img
                  className="h-[200px] w-full rounded-lg mb-4 shadow-lg"
                  src={member.img}
                  alt={member.name}
                />
                <h3 className="text-[#444444] mt-2 text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#444444] text-xl font-semibold mb-3">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4 mb-2">
                  {[facebook, twitter, linkedin, instagram].map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="Social Icon"
                      className="h-8 w-8 hover:scale-110 transition-all duration-300 shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurTeam;
