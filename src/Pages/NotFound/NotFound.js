import React from 'react';

const NotFound = () => {
    return (
        <div>
                <div className='flex justify-center my-32'>
                    <div>
                        <img className='lg:w-3/4' src="https://i.ibb.co/FhzQvWh/ops-removebg-preview.png" alt="" />
                        <h1 className='text-6xl font-bold text-gray-500'>PAGE NOT FOUND</h1>
                       <div className='lg:flex justify-between'>
                       <p className='text-gray-600 font-semibold text-xl text-center'>Why You Looking For It.</p>
                        <p className='text-gray-600 font-semibold text-xl text-center'>Sorry We Don't find It.</p>
                       </div>
                    </div>
                </div>
        </div>
    );
};

export default NotFound;