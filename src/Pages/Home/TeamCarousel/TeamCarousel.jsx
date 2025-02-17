import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Smith",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Charlie Davis",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Diana Prince",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
];

const TeamCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="text-center p-4 bg-white shadow-lg rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-300"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
