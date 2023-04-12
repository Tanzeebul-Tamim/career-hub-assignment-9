import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Category/Category";
import './Home.css';
import JobCard from "./JobCard/JobCard";

const Home = () => {
  const { categoryData, jobsData } = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const jobs = showAll ? jobsData : jobsData.slice(0, 4);
  return (
    <div className="md:mt-32 mt-14">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-bold text-slate-800">Job Category List</h1>
        <h1 className="cat-des description">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h1>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        {
            categoryData.map((catCard) => (
              <Category key={catCard._id} catCard={catCard}></Category>
            ))
        }
      </div>

      <div className="text-center md:mt-32 mt-14">
        <h1 className="md:text-5xl text-3xl font-bold text-slate-800">Featured Jobs</h1>
        <h1 className="cat-des description">
          Some of the most in-demand job openings currently available on our platform, handpicked by our team for their competitive salaries, unique perks, and overall appeal. Check out these top job opportunities to take your career to the next level!"
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-10">
        {
            jobs.map((jobCard => <JobCard key={jobCard.id} jobCard={jobCard}></JobCard>))
        }
      </div>
      {
        jobsData.length > 4 && (
          <Link className="btn-container flex justify-center">
            <button onClick={() => setShowAll(!showAll)} className="primary-btn">
            {showAll ? 'See Less Jobs' : 'See All Jobs'}
            </button>
          </Link>
        )
      }
    </div>
  );
};

export default Home;
