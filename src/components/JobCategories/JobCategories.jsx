import React, { useEffect, useState } from "react";
import NavHead from "../NavHead/NavHead";
import Category from "./Category";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <NavHead
        title="Job Category List"
        description="Explore thousands of job opportunities with all the information you need. Its your future"
      ></NavHead>

      <div className="grid md:grid-cols-4 md:gap-10 gap-3 mx-20">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
