import React from "react";
import photo from "../../assets/user.png";

const Banner = () => {
  return (
    <div>
      <div className="m-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-5xl font-bold space-y-5">
            <p>One Step</p> <p>Closer To Your</p>
            <p className="text-[#7E90FE]">Dream Job</p>
          </div>

          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold py-2 px-4 my-6 rounded-lg ">
            Our Started
          </button>
        </div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
