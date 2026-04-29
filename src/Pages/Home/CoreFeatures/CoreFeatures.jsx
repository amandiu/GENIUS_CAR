import React from "react";
import Clock from "../../../assets/clock.png";
import Delivery from "../../../assets/Delivery.png";
import Guranty from "../../../assets/Guranty.png";
import Wrench from "../../../assets/Wrench.png";
import LeaderShip from "../../../assets/leadership.png";
import Hours from "../../../assets/Group.png";
import CoreCard from "../../../Components/CoreCard/CoreCard";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const CoreFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white py-16">
      <section>
        <div className="container mx-auto px-6 items-center text-center md:mb-12">
          <div className="max-w-xl mt-16 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <HeadLine
              title={`Core Features`}
              subTitle={` Why Choose Us`}
              paragraph={` The Majority Have Suffered Alteration In Some Form, By Injected
              Humour, Or Randomised Words Which Don't Look Even Slightly
              Believable.`}
            />
          </div>

          <div className="flex justify-center w-full">
            <div
              className="mt-8 grid place-items-center w-full 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 xl:grid-cols-6 gap-6"
            >
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
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;
