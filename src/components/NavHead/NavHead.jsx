import React from "react";

const NavHead = ({ title, description }) => {
  return (
    <div>
      <center className="mb-10 mt-40">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </center>
    </div>
  );
};

export default NavHead;
