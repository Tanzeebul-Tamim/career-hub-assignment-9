import React from "react";
import { useLoaderData } from "react-router-dom";
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

      <div className="grid grid-cols-2 gap-6">
        {
            jobsData.map((jobCard => <JobCard key={jobCard.id} jobCard={jobCard}></JobCard>))
        }
      </div>
    </div>
  );
};

export default Home;
