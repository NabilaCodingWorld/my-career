import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavHeaderDetail from "../NavHeaderDetail/NavHeaderDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  console.log(job, id);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have apply job successfully");
  };

  return (
    <div>
      <NavHeaderDetail header="Job Details"></NavHeaderDetail>

      <div className="m-20 grid md:grid-cols-2 gap-16">
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Job Description: </span>
            <span className="text-gray-500">{job.job_description}</span>
          </p>
          <p>
            <span className="font-semibold">Job Responsibility: </span>
            <span className="text-gray-500">{job.job_responsibility}</span>
          </p>

          <p className="font-semibold">Educational Requirement: </p>
          <p className="text-gray-500">{job.educational_requirements}</p>
          <p className="font-semibold">Experiences: </p>
          <p className="text-gray-500">{job.experiences}</p>
        </div>
        <div>
          <div className="bg-gray-100 p-10 rounded-lg">
            <p className="font-bold">Job Details:</p>
            <hr className="my-5" />
            <p>
              <span className="font-semibold">Salary: </span>
              <span className="text-gray-500">{job.salary}</span>
            </p>
            <p>
              <span className="font-semibold">Job Title: </span>
              <span className="text-gray-500">{job.job_title}</span>
            </p>
            <p className="font-semibold my-5">Contact Information</p>
            <hr className="my-5" />
            <p>
              <span className="font-semibold">Phone: </span>
              <span className="text-gray-500">
                {job.contact_information.phone}
              </span>
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              <span className="text-gray-500">
                {job.contact_information.email}
              </span>
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              <span className="text-gray-500">
                {job.contact_information.address}
              </span>
            </p>
          </div>
          <button
            onClick={handleApplyJob}
            className="btn btn-primary w-full mt-3"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
