import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'

const JobCard = ({jobCard}) => {
    return (
        <div>
            <img src={jobCard.logo} alt="" />
            <h1 className='text-2xl font-bold text-slate-800'>{jobCard.jobTitle}</h1>
            <h1 className='description'>{jobCard.companyName}</h1>
            <div className='flex gap-4'>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-4 py-2 rounded-md'>{jobCard.remote ? "Remote" : "Onsite"}</h1>
                <h1 className='border-2 border-violet-400 text-violet-500 font-medium px-4 py-2 rounded-md'>{jobCard.fullTime ? "Full Time" : "Part Time"}</h1>
            </div>
            <div className='flex'>
                <div>
                    <h1>{jobCard.location}</h1>
                </div>
                <div>
                    <h1>{jobCard.salary}</h1>
                </div>
            </div>
            <Link to="/applied" className="job-btn-container">
              <button className="job-btn">View Details</button>
            </Link>
        </div>
    );
};

export default JobCard;