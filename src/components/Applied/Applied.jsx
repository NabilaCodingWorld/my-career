import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import NavHeaderDetail from "../NavHeaderDetail/NavHeaderDetail";
import AppliedJob from "./AppliedJob";

const Applied = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied); // Fix: updating displayJobs instead of setDesplayJobs
    }
  }, [jobs]); // Added jobs as a dependency to the useEffect

  const handleSelectChange = (event) => {
    const selectedFilter = event.target.value;
    handleJobsFilter(selectedFilter);
  };

  return (
    <div>
      <NavHeaderDetail header="Applied Jobs"></NavHeaderDetail>

      <div>
        <select
          className="select select-bordered w-full max-w-xs ml-96"
          onChange={handleSelectChange} // Use onChange instead of onClick
        >
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>

        {displayJobs.map(
          (
            appliedJob // Use displayJobs here
          ) => (
            <AppliedJob
              key={appliedJob.id}
              appliedJob={appliedJob}
            ></AppliedJob>
          )
        )}
      </div>
    </div>
  );
};

export default Applied;
