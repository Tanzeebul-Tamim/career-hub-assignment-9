import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category/Category";
import './Home.css';

const Home = () => {
  const { categoryData, jobsData } = useLoaderData();
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <h1 className="cat-des">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {categoryData.map((catCard) => (
          <Category key={catCard._id} catCard={catCard}></Category>
        ))}
      </div>
    </div>
  );
};

export default Home;
