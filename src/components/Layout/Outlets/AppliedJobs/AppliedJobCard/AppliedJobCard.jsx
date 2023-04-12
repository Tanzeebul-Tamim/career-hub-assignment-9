import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './AppliedJobCard.css';

const AppliedJobCard = ({ card }) => {
  return (
    <div>
        <div className="flex items-center justify-between border border-stone-200 gap-8 rounded-md mb-6 p-6">
      <div className="flex items-center gap-8">
        <div className="bg-stone-100 rounded-md w-40 h-40 flex items-center justify-center p-4">
            <img src={card.logo} alt="" />
        </div>
        <div>
            <h1 className="text-xl font-bold text-stone-600">{card.jobTitle}</h1>
            <h1 className="description3 mt-2 mb-4">{card.companyName}</h1>
            <div className='flex gap-4 mb-4'>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-3 py-1 text-sm rounded-md'>{card.remote ? "Remote" : "Onsite"}</h1>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-3 py-1 text-sm rounded-md'>{card.fullTime ? "Full Time" : "Part Time"}</h1>
            </div>
            <div className='flex description2 gap-6 mb-6'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h1 className=''>{card.location}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faSackDollar} />
                    <h1 className=''>Salary: {card.salary}</h1>
                </div>
            </div>
        </div>
      </div>
            <div>
                <Link key={card.id} to={`/jobs/${card.id}`} className="job-btn-container">
                    <button className="job-btn">View Details</button>
                </Link>
            </div>
    </div>
    </div>
  );
};

export default AppliedJobCard;
