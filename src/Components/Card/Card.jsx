import { FaArrowRightLong } from "react-icons/fa6";

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
              src="https://images.autods.com/OfficialSite/New/20231009123226/20-Best-Selling-Auto-Parts-To-Start-Dropshipping-Today.png"
              className="object-cover border rounded-lg w-full h-48"
              alt=""
            />
            <div className="card-body ml-[-28px] mt-[-20px] flex">
              {/* Rating Section */}
              <p className="text-xl  font-bold text-[#444444]">
                Engine Diagnostics
              </p>

              <div className="mb-[-30px] flex">
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
