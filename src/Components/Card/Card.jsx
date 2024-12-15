import { FaArrowRightLong } from "react-icons/fa6";
import image from "../../assets/1JktzC9GrA_l4yz0cCy8a5Q.jpg"

const Card = () => {
  return (
    <div>
      <div className="">
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col p-2 border rounded-md">
            <img
              src={image}
              className="object-cover border rounded-lg w-full h-48"
              alt="#"
            />
            <div className="card-body ml-[-28px] mt-[-20px] flex">
              {/* Rating Section */}
              <p className="text-xl  font-bold text-[#444444]">
                Engine Diagnostics
              </p>

              <div className="mb-[-30px] flex items-center">
                <p className=" text-[#FF3811] text-lg font-semibold">
                  Price: $20:00
                </p>
                <a href="#">
                  <FaArrowRightLong className="text-[#FF3811]" />
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
