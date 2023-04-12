import React from 'react';
import { Link } from 'react-router-dom';
import AppliedJobCard from './AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {
    const getJob = JSON.parse(localStorage.getItem("appliedJob"));

    if (getJob === null) {
        return (
            <div className='my-40 flex flex-col items-center gap-14'>
                <h1 className='text-7xl font-bold text-center text-slate-600'>No jobs applied yet!</h1>
                <Link to="/" className="btn-container">
                    <button className="primary-btn">
                      Back To Homepage
                    </button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className='mt-28'>
                {
                    getJob.map(singleAppliedCard => <AppliedJobCard card={singleAppliedCard} key={singleAppliedCard.id} />)
                }
            </div>
        );
    }
};

export default AppliedJobs;
