import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status, statusText} = useRouteError();
    return (
        <div className='my-40 mx-80 flex flex-col items-center gap-6 border-4 p-9 rounded-3xl border-violet-400'>
            <h1 className='text-9xl font-bold text-center text-red-600'>{status}</h1>
            <h1 className='text-7xl font-bold text-center text-slate-600'>😵 {statusText} 🤕</h1>
            <p className='text-4xl font-medium text-center text-amber-400'>{error.message}</p>
            <Link to="/" className="btn-container">
                <button className="primary-btn">
                  Back To Homepage
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;