import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:mx-24 mx-5">
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
            <div className="md:text-4xl text-xl font-bold brand-name">HireSphere</div>
          </Link>
            <div className="md:hidden order-2 md:order-1" style={{color: "#7d7d7d"}} onClick={() => setOpen(!open)}>
              <span>
                {open === true ? <FontAwesomeIcon icon={faClose} /> 
                : <FontAwesomeIcon icon={faBars} />}
                </span>
            </div>
          <div className={`active-link duration-500 flex md:static absolute flex-col md:flex-row ${open ? 'top-6 bg-violet-300 py-2 rounded-lg bg-opacity-90' : '-top-48'}`}>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/applied">Applied Jobs</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>
          </div>
          <div className="order-1 md:order-2">
            <Link to="/applied" className="btn-container">
              <button className="primary-btn md:ml-0 ml-24">Start Applying</button>
            </Link>
          </div>
        </div>
      </div>

      {location.pathname === "/" && (
        <div className="home-header flex flex-col md:flex-row md:justify-between items-center mt-20">
          <div className="flex flex-col gap-8">
            <h1 className="title flex md:flex-col text-5xl md:text-8xl font-bold text-slate-800">
              <p>Turn Your Dream Career <br />
              <span className="title-purple">into Reality</span></p>
            </h1>
            <p className="w-4/5 description">
              Welcome to <strong>HireSphere</strong>, your go-to destination for finding
              your dream job. Join our community of job seekers today
              and take the next step in your career journey.
            </p>
            <Link to="/applied" className="btn-container">
              <button className="primary-btn">Get Started</button>
            </Link>
          </div>

          <div>
            <img src="https://i.ibb.co/wgTyzLH/recruitment-concept-job-search-flat-vector-people-workers-business-metaphor-employees-looking-jobs-g.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
