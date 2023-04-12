import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faIdCard, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const JobDetail = () => {
    const jobDetail = useLoaderData();
    return (
        <div id='detail' className='mt-32 description2'>
            <div className='grid gap-4'>
                <h1 className='text-4xl text-center'><strong>{jobDetail.companyName}</strong></h1>
                <h1>
                    <strong>Job Description:</strong><br /><span>{jobDetail.description}</span>
                </h1>
                <h1>
                    <strong>Job Responsibility:</strong><br /><span>{jobDetail.responsibility}</span>
                </h1>
                <h1>
                    <strong>Educational Requirements:</strong><br /><span>{jobDetail.educationalRequirements}</span>
                </h1>
                <h1>
                    <strong>Experiences:</strong><br /><span>{jobDetail.experiences}</span>
                </h1>
            </div>
            <div>
                <div className='grid gap-4 job-detail mb-6'>
                    <div className='flex justify-center'>
                        <img src={jobDetail.logo} alt="" />
                    </div>
                    <h1 className='text-2xl border-b pb-5 border-violet-300'>
                        <strong>Job Details</strong>
                    </h1>
                    <h1>
                        <FontAwesomeIcon className='mr-3 text-violet-400' icon={faSackDollar} />
                        <strong>Salary:</strong> <span className='font-medium'>{jobDetail.salary} (per month)</span> 
                    </h1>
                    <h1>
                        <FontAwesomeIcon className='mr-3 text-violet-400' icon={faIdCard} />
                        <strong>Job Title:</strong> <span className='font-medium'>{jobDetail.jobTitle}</span>
                    </h1>
                    <h1 className='text-2xl mt-5 border-b pb-5 border-violet-300'>
                        <strong>Contact Information</strong>
                    </h1>
                    <h1>
                        <FontAwesomeIcon className='mr-3 text-violet-400' icon={faPhone} />
                        <strong>Phone:</strong> <span className='font-medium'>{jobDetail.phone}</span>
                    </h1>
                    <h1>
                        <FontAwesomeIcon className='mr-3 text-violet-400' icon={faEnvelope} />
                        <strong>Email:</strong> <span className='font-medium'>{jobDetail.email}</span>
                    </h1>
                    <h1>
                        <FontAwesomeIcon className='mr-3 text-violet-400' icon={faMapMarkerAlt} />
                        <strong>Address:</strong> <span className='font-medium'>{jobDetail.address}</span>
                    </h1>
                </div>
                <Link to="/applied" className="btn-container">
                <button className="primary-btn w-full">
                  Start Applying
                </button>
              </Link>
            </div>
        </div>
    );
};

export default JobDetail;