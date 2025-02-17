import React from "react";
import Calendar from "../../../assets/schedule.png";
import location from "../../../assets/placeholder.png";
import phone from "../../../assets/phone.png";

const Status = () => {
  return (
    <div className="px-5 md:px-10">
        <div className="container mx-auto bg-[#151515] rounded p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-6">
            <div className="flex items-center gap-4">
              <img className="h-11 w-11" src={Calendar} alt="Calendar" />
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  We are open Monday-Friday
                </p>
                <p className="text-white font-bold text-lg md:text-xl">
                  7:00 am - 9:00 pm
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img className="h-11 w-11" src={phone} alt="Phone" />
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  Have a question?
                </p>
                <p className="text-white font-bold text-lg md:text-xl">
                  +2546 251 2658
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img className="h-11 w-11" src={location} alt="Location" />
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  Need a repair? Our address
                </p>
                <p className="text-white font-bold text-lg md:text-xl">
                  Liza Street, New York
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Status;
