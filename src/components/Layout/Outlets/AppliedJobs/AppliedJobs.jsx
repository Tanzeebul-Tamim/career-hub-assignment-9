import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppliedJobCard from "./AppliedJobCard/AppliedJobCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const AppliedJobs = () => {
  const getJob = JSON.parse(localStorage.getItem("appliedJob"));
  const [filter, setFilter] = useState("");

  const filteredJobs = filter === "onsite" ? getJob.filter(job => !job.remote) : getJob;

  if (getJob === null) {
    return (
      <div className="my-40 flex flex-col items-center gap-14">
        <h1 className="text-7xl font-bold text-center text-slate-600">
          No jobs applied yet!
        </h1>
        <Link to="/" className="btn-container">
          <button className="primary-btn">Back To Homepage</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="mt-28">
        <div className="flex justify-end gap-5 mb-8">
          <button
            className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-md text-stone-700"
            onClick={() => setFilter(filter === "onsite" ? "" : "onsite")}
          >
            Filter Onsite Jobs <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        {filteredJobs.map((singleAppliedCard) => (
          <AppliedJobCard card={singleAppliedCard} key={singleAppliedCard.id} />
        ))}
      </div>
    );
  }
};

export default AppliedJobs;
