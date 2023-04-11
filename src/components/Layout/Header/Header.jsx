import React from "react";
import { Link, useLocation } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="mx-24">
      <div
        style={{
          backgroundImage:
            location.pathname === "/applied" || location.pathname === "/blog"
              ? 'url("/public/images/Vector.png")'
              : "",
        }}
      >
        <div className="navbar flex justify-between mt-8 items-center">
          <Link to="/">
            <div className="text-4xl font-bold brand-name">HireSphere</div>
          </Link>
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
      </div>

      {location.pathname === "/" && (
        <div className="home-header flex justify-between items-center mt-20">
          <div className="flex flex-col gap-7">
            <h1 className="title text-8xl font-bold text-slate-800">
              <p>Turn Your</p>
              <p>Dream Career</p>
              <p className="title-purple">into Reality</p>
            </h1>
            <p className="banner-des">
              Welcome to <strong>HireSphere</strong>, your go-to destination for finding
              your dream job. Join our community of job seekers today
              and take the next step in your career journey.
            </p>
            <Link to="/applied" className="btn-container">
              <button className="primary-btn">Get Started</button>
            </Link>
          </div>

          <div>
            <img src="/public/images/P3OLGJ1 copy 1.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
