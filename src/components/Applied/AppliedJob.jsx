import React from "react";

const AppliedJob = ({ appliedJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="grid md:grid-cols-2  items-center gap-10 p-10 m-20 border-2 rounded-lg">
      <div className="flex gap-20">
        <img className="bg-gray-100 p-10 rounded-lg" src={logo} alt="" />
        <div className="space-y-3">
          <p className="font-semibold">{job_title}</p>
          <p className="text-gray-500">{company_name}</p>

          <button className="btn btn-outline btn-primary mr-4">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-primary">{job_type}</button>

          <div className="flex gap-5 text-gray-400">
            <p>{location}</p>
            <p>Salary: {salary}</p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary w-40 md:ml-96">View Details</button>
    </div>
  );
};

export default AppliedJob;
