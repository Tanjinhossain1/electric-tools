import React from 'react';

const SpecialOffers = () => {
    return (
        <div className='bg-no-repeat h-[600px] bg-fixed ' style={{backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/005/390/356/non_2x/two-different-color-backgrounds-blue-and-yellow-vector.jpg)`,
     }} >
            <div className='lg:w-2/4 my-32 pt-32  mx-auto items-center'>
                <div>
                    <h1 className='text-5xl font-bold text-[#6b1dd1]'>SPECIAL </h1>
                    <h1 className='text-5xl font-bold text-[#e00b99]'>OFFER</h1>
                </div>
                <div  className='lg:w-2/4 mx-auto text-white font-bold' >
                    <p>SAMPLE TEXT. CLICK TO SELECT THE TEXT BOX. CLICK AGAIN OR DOUBLE CLICK TO START EDITING THE TEXT</p>
                    <button className='border-4 ease-in-out duration-700 border-blue-500 font-bold px-8 py-2 bg-transparent hover:bg-blue-500 text-pink-600 mt-8'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;