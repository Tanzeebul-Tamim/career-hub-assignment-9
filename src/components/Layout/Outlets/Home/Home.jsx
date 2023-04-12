import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Category/Category";
import './Home.css';
import JobCard from "./JobCard/JobCard";

const Home = () => {
  const { categoryData, jobsData } = useLoaderData();
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-800">Job Category List</h1>
        <h1 className="cat-des description">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {
            categoryData.map((catCard) => (
              <Category key={catCard._id} catCard={catCard}></Category>
            ))
        }
      </div>

      <div className="text-center mt-32">
        <h1 className="text-5xl font-bold text-slate-800">Featured Jobs</h1>
        <h1 className="cat-des description">
          Some of the most in-demand job openings currently available on our platform, handpicked by our team for their competitive salaries, unique perks, and overall appeal. Check out these top job opportunities to take your career to the next level!"
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        {
            jobsData.map((jobCard => <JobCard key={jobCard.id} jobCard={jobCard}></JobCard>))
        }
      </div>
      <Link to="/applied" className="btn-container flex justify-center">
          <button className="primary-btn">See All Jobs</button>
      </Link>
    </div>
  );
};

export default Home;
