import React from "react";
import Clock from "../../../assets/clock.png";
import Delivery from "../../../assets/Delivery.png";
import Guranty from "../../../assets/Guranty.png";
import Wrench from "../../../assets/Wrench.png";
import LeaderShip from "../../../assets/leadership.png";
import Hours from "../../../assets/Group.png";

const CoreFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white py-16">
      <section>
        <div className="container mx-auto px-6 sm:text-center md:mb-12">
          <div className="max-w-xl mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="text-[#FF3811] font-bold text-xl">Core Features</p>
            </div>
            <h2 className="max-w-lg mb-6 mt-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Why Choose Us
            </h2>
            <p className="mt-4 px-10 text-lg text-[#878787]">
              The Majority Have Suffered Alteration In Some Form, By Injected
              Humour, Or Randomised Words Which Don't Look Even Slightly
              Believable.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-4 pl-[2%] lg:pl-[5%]">
            <div className="bg-white h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-full h-[70px] w-[70px] mb-4"
                src={LeaderShip}
                alt="Expert Team"
              />
              <p className="font-bold text-lg text-[#444444]">Expert Team</p>
            </div>
            <div className="bg-[#FF3811] h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-full h-[70px] w-[70px] mb-4"
                src={Clock}
                alt="Timely Delivery"
              />
              <p className="font-bold text-lg text-white">Timely Delivery</p>
            </div>
            <div className="bg-white h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-full h-[70px] w-[70px] mb-4"
                src={Hours}
                alt="24/7 Support"
              />
              <p className="font-bold text-lg text-[#444444]">24/7 Support</p>
            </div>
            <div className="bg-white h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-full h-[70px] w-[70px] mb-4"
                src={Wrench}
                alt="Best Equipment"
              />
              <p className="font-bold text-lg text-[#444444]">Best Equipment</p>
            </div>
            <div className="bg-white h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded h-[80px] w-[60px] mb-4"
                src={Guranty}
                alt="100% Guarantee"
              />
              <p className="font-bold text-lg text-[#444444]">100% Guarantee</p>
            </div>
            <div className="bg-white h-[250px] w-[250px] flex flex-col justify-center items-center rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded h-[80px] w-[60px] mb-4"
                src={Delivery}
                alt="Timely Delivery"
              />
              <p className="font-bold text-lg text-[#444444]">Timely Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;
