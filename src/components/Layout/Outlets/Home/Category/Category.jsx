import React from 'react';
import './Category.css';

const Category = ({catCard}) => {
    return (
        <div className='cat-card'>
            <img className='icon' src={catCard.logo} alt="" />
            <h1 className='mt-8 mb-2 font-bold text-2xl text-slate-700'>{catCard.name}</h1>
            <h1 className='text-slate-500 text-lg'>{catCard.available}</h1>
        </div>
    );
};

export default Category;