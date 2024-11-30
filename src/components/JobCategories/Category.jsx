import React from "react";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className=" space-y-5 bg-gray-100 p-5 rounded-md ">
      <img className="w-20" src={logo} alt="" />
      <h1 className=" font-semibold">{category_name}</h1>
      <p className=" text-gray-400">{availability}</p>
    </div>
  );
};

export default Category;
