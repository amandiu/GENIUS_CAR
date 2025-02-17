import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const Populerproducts = () => {
  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="py-16">
            <HeadLine
              className="mt-16 md:mx-auto text-center lg:max-w-2xl md:mb-12"
              title="Popular Products"
              subTitle=" Browse Our Products"
              paragraph={` The Majority Have Suffered Alteration In Some Form, By Injected
                Humour, Or Randomised Words Which Don't Look Even Slightly
                Believable.`}
            />
            <div className="grid gap-5 row-gap-5 mb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XZh14gz4F7eittEcjP50aR7ioAjcalWYsChwnEtDmKR1zfZPQLzpQPSvhqY9SYBPvm0&usqp=CAU"
                    className="object-cover border rounded-lg w-full h-48"
                    alt="Engine Diagnostics"
                  />
                  <div className="card-body mt-[-20px] flex flex-col items-center text-center">
                    {/* Rating Section */}
                    <div className="rating flex space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className="mask mask-star bg-[#FF3811]"
                        ></span>
                      ))}
                    </div>
                    <p className="text-xl font-bold text-[#444444] mt-2">
                      Engine Diagnostics
                    </p>
                    <p className="text-[#FF3811] text-lg font-semibold mt-1">
                      Price: $20.00
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center">
              <a
                href="/"
                className="bg-white mt-12 mb-3 font-semibold text-lg text-[#FF3811] border px-4 py-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white transition"
              >
                More Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Populerproducts;
