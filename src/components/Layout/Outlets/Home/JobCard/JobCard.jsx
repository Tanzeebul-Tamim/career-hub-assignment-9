import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({jobCard}) => {
    return (
        <div className='border border-slate-300 rounded-md p-10'>
            <img className='mb-8' src={jobCard.logo} alt="" />
            <h1 className='text-2xl font-bold text-slate-800 mb-2'>{jobCard.jobTitle}</h1>
            <h1 className='description mb-4'>{jobCard.companyName}</h1>
            <div className='flex gap-4 mb-4'>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-4 py-2 rounded-md'>{jobCard.remote ? "Remote" : "Onsite"}</h1>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-4 py-2 rounded-md'>{jobCard.fullTime ? "Full Time" : "Part Time"}</h1>
            </div>
            <div className='flex description gap-6 mb-6'>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h1>{jobCard.location}</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faSackDollar} />
                    <h1>Salary: {jobCard.salary}</h1>
                </div>
            </div>
            <Link to="/applied" className="job-btn-container">
              <button className="job-btn">View Details</button>
            </Link>
        </div>
    );
};

export default JobCard;