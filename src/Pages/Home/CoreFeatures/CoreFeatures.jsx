import React from "react";
import Clock from "../../../assets/clock.png";
import Delivery from "../../../assets/Delivery.png";
import Guranty from "../../../assets/Guranty.png";
import Wrench from "../../../assets/Wrench.png";
import LeaderShip from "../../../assets/leadership.png";
import Hours from "../../../assets/Group.png";
import CoreCard from "../../../Components/CoreCard/CoreCard";

const CoreFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white py-16">
      <section>
        <div className="container mx-auto px-6 items-center text-center md:mb-12">
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
          <div className="mt-8 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
            <CoreCard Title={"Expert Team"} image={LeaderShip} />
            <CoreCard
              Title={"Timely Delivery"}
              image={Clock}
              extraStyle={`bg-[#ff3811]`}
            />
            <CoreCard Title={"24/7 Support"} image={Hours} />
            <CoreCard Title={"Best Equipment"} image={Wrench} />
            <CoreCard Title={"100% Guarantee"} image={Guranty} />
            <CoreCard Title={" Timely Delivery"} image={Delivery} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;
