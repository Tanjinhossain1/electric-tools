import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const review = ({review}) => {
    const {rate,description} = review;

    return (
        <div className='shadow-2xl p-4 border  m-2'>
            <p>Rating: <span className='text-pink-600 font-bold'>{rate} <FontAwesomeIcon className='text-yellow-500'  icon={faStar}/></span></p>
            <p>{description}</p>
        </div>
    );
};

export default review;