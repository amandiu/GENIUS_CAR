import React from "react";
import Slider from "react-slick";
import team1 from "../../../assets/Team/a21464b852f0428fa73ef175786dc9e7.jpeg";
import team2 from "../../../assets/Team/two-girls-mechanics-fixing-automobile_7502-4402.jpg";
import team3 from "../../../assets/Team/GettyImages-522272311-5949bdc15f9b58d58a035319.jpg";
import team4 from "../../../assets/Team/attractive-girl-short-shorts-top-260nw-1028862829.jpg";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-15px] sm:right-[-30px] transform -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-lg bg-[#ff6411] hover:bg-[#FF3811] transition-all duration-300"
    onClick={onClick}
  >
    <MdNavigateNext className="text-white text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 top-1/2 left-[-15px] sm:left-[-30px] transform -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-lg bg-[#FF3811] hover:bg-blue-600 transition-all duration-300"
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

const TestimonialCarousel = ({ slidesToShow = 2 }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Small tablets
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section
      className="py-16 px-4 md:px-10 container mx-auto text-center bg-gradient-to-r
     from-purple-300 via-pink-200 mt-10 to-orange-100"
    >
      <HeadLine
        className="mt-10"
        title="Testimonial"
        subTitle="What Customer Says"
        extraStyle="lg:mx-40"
        paragraph="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="slider-container px-4 mt-8">
        <Slider {...settings} className="transition-all duration-500">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 md:p-6">
              <div className="flex flex-col bg-white border-2 border-[#FF3811] rounded-md transform hover:scale-105 transition-all duration-300 shadow-md mb-4 p-5">
                <div className="flex items-start gap-4">
                  <img
                    className="h-[100px] w-[100px] rounded-full shadow-lg"
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                  />
                  <div>
                    <h3 className="text-[#444444] mt-2 text-2xl font-bold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#444444] text-xl font-semibold mb-3">
                      {member.role}
                    </p>
                  </div>
                  <img
                    src="/right-quote.png"
                    className="h-14 w-14 ml-10 mt-1 hidden sm:block"
                    alt="Quote"
                  />
                </div>
                <p className="text-start px-5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div className="flex ml-5 mt-3 text-orange-400 text-3xl">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
