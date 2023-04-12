import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const jobDetail = useLoaderData();
    return (
        <div>
            <h1>THis is job detail <img src={jobDetail.logo} alt="" /></h1>
        </div>
    );
};

export default JobDetail;