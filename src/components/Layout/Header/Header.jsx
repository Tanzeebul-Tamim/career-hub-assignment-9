import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="mx-24">
      <div className="flex justify-between mt-8 items-center">
        <div className="text-3xl font-bold">HireSphere</div>
        <div className="active-link">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/applied">Applied Jobs</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/blog">Blogs</ActiveLink>
        </div>
        <div>
          <Link to="/applied" className="btn-container">
            <button className="primary-btn">Start Applying</button>
          </Link>
        </div>
      </div>

      <div className="home-header flex justify-between items-center mt-20">
        <div>
          <h1 className="title text-8xl font-bold">
            <p>One Step</p>
            <p>Closer To Your</p>
            <p className="title-purple">Dream Job</p>
          </h1>
          <p className="banner-des">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
        </div>

        <div>
            <img src="/public/images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
