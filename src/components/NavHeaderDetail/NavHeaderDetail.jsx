import React from "react";
import img from "../../assets/bg1.png";

const NavHeaderDetail = ({ header }) => {
  return (
    <div>
      <div
        className="hero w-full my-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className=" "></div>
        <div>
          <center className="text-3xl font-semibold my-10">{header}</center>
        </div>
      </div>
    </div>
  );
};

export default NavHeaderDetail;
