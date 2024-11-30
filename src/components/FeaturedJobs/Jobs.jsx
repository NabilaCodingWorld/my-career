import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Jobs = ({ feature }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = feature;
  return (
    <div className="border-2 rounded-lg p-10 space-y-4">
      <img src={logo} alt="" />
      <p className=" font-semibold">{job_title}</p>
      <p className="text-gray-500">{company_name}</p>
      <div>
        <button className="btn btn-outline btn-info mr-6">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline btn-info">{job_type}</button>
      </div>
      <div className="flex gap-10">
        <p className="flex items-center gap-1">
          <CiLocationOn className="text-2xl" /> {location}
        </p>
        <p className="flex items-center gap-1">
          <CiDollar className="text-2xl" /> {salary}
        </p>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold py-2 px-4 my-6 rounded-lg ">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Jobs;
