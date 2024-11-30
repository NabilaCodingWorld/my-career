import React, { useEffect, useState } from "react";
import NavHead from "../NavHead/NavHead";
import Jobs from "./Jobs";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div>
      <NavHead
        title="Featured Jobs"
        description="Explore thousands of job opportunities with all the information you need. Its your future"
      ></NavHead>
      <div className="grid md:grid-cols-2 gap-10 mx-20">
        {features.slice(0, dataLength).map((feature) => (
          <Jobs key={feature.id} feature={feature}></Jobs>
        ))}
      </div>{" "}
      <br />
      <center className={dataLength === features.length && "hidden"}>
        <button
          onClick={() => setDataLength(features.length)}
          className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold py-2 px-4 my-6 rounded-lg "
        >
          See All Jobs
        </button>
        <br />
      </center>
    </div>
  );
};

export default FeaturedJobs;
