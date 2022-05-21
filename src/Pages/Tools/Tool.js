import React from 'react';

const Tool = ({ tool }) => {
    const { name, description, price, img, minimumQuantity, availableQuantity } = tool;
    return (
        <div className='rounded-lg shadow-lg p-4 m-6'>
            <img className='w-full' src={img} alt="" />
            <div>
                <h1 className='text-xl'>Name: {name}</h1>
                <h1>Price: <span className='text-pink-500 font-bold'>{price}$</span></h1>
               <div className='flex justify-between'>
               <h1>MinimumQuantity: <span className='text-pink-600 font-bold'>{minimumQuantity}</span></h1>
                <h1>availableQuantity: <span className='text-pink-600 font-bold'>{availableQuantity}</span></h1>
               </div>
                <h1><small>Description: {description}</small></h1>
            </div>
        </div>
    );
};

export default Tool;