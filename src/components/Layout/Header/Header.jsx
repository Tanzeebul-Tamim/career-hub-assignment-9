import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-8 mx-12'>
            <div className='text-3xl font-bold'>HireSphere</div>
            <div>
                <Link to="/" className='mr-10 font-medium text-slate-500'>Home</Link>
                <Link to="/applied" className='mr-10 font-medium text-slate-500'>Applied Jobs</Link>
                <Link to="/statistics" className='mr-10 font-medium text-slate-500'>Statistics</Link>
                <Link to="/blog" className='font-medium text-slate-500'>Blogs</Link>
            </div>
            <div>
                <Link className='btn-container'>
                    <button className='primary-btn'>Start Applying</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;