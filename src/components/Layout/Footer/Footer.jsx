import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container text-white md:px-20 px-10 md:py-32 py-16">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-14 md:gap-20 border-b border-stone-600 pb-12 mb-12 text-center md:text-left">
        <div>
          <h1 className="font-medium text-3xl">HireSphere</h1>
          <h1 className="text-stone-400 my-5 text-lg">
            Our mission is to connect job seekers with their dream careers,
            while helping employers find the right talent to drive their
            business forward. Join our community today and take the first step
            towards your next big opportunity!
          </h1>
          <a href="" className="flex justify-center md:justify-start"><img src="https://i.ibb.co/RyV3Pz7/Group-9969.png" alt="" /></a>
        </div>
        <div className=" flex flex-col md:gap-6 gap-2">
            <h1 className="text-2xl">Company</h1>
            <Link className="text-stone-400 text-lg">About Us</Link>
            <Link className="text-stone-400 text-lg">Work</Link>
            <Link className="text-stone-400 text-lg">Latest News</Link>
            <Link className="text-stone-400 text-lg">Careers</Link>
        </div>
        <div className=" flex flex-col md:gap-6 gap-2">
            <h1 className="text-2xl">Product</h1>
            <Link className="text-stone-400 text-lg">Prototype</Link>
            <Link className="text-stone-400 text-lg">Plans & Pricing</Link>
            <Link className="text-stone-400 text-lg">Customers</Link>
            <Link className="text-stone-400 text-lg">Integrations</Link>
        </div>
        <div className=" flex flex-col md:gap-6 gap-2">
            <h1 className="text-2xl">Support</h1>
            <Link className="text-stone-400 text-lg">Help Desk</Link>
            <Link className="text-stone-400 text-lg">Sales</Link>
            <Link className="text-stone-400 text-lg">Become a Partner</Link>
            <Link className="text-stone-400 text-lg">Developers</Link>
        </div>
        <div className=" flex flex-col md:gap-6 gap-2">
            <h1 className="text-2xl">Contact</h1>
            <p className="text-stone-400 text-lg">524 Broadway , NYC</p>
            <p className="text-stone-400 text-lg">+1 777 - 978 - 5570</p>
        </div>
      </div>

      <div className="flex md:justify-between md:flex-row flex-col">
        <h1 className="text-sm text-center md:text-lg text-stone-500">
            @2023 HireSphere. All Rights Reserved
        </h1>
        <h1 className="text-sm text-center md:text-lg text-stone-500">
            Powered by <strong>HireSphere</strong>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
