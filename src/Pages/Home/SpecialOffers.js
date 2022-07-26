import React, { useState } from 'react';

const SpecialOffers = () => {
    const [click, setClick] = useState(false)
    return (
        <div className='bg-no-repeat h-[600px] bg-fixed ' style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/005/390/356/non_2x/two-different-color-backgrounds-blue-and-yellow-vector.jpg)`,
        }} >
            <div className='lg:w-2/4 my-32 pt-32  mx-auto items-center'>
              {
                click&&  <marquee className='text-red-500 text-xl font-bold' behavior="" direction="">Congratulations! <span className='text-pink-600'>Congratulations!</span> <span className='text-[#6b1dd1]'>Congratulations!</span> You Get 70% Discount </marquee>
              }
                <div>
                    <h1 className='text-5xl font-bold text-[#6b1dd1]'>SPECIAL </h1>
                    <h1 className='text-5xl font-bold text-[#e00b99]'>OFFER</h1>
                </div>
                <div className='lg:w-2/4 mx-auto text-white font-bold' >
                    {
                        click? <p>Wow Nice, Thank's for click it your ar the lucky est person on this website that's why we will give you a beautiful gift like a 70% Discount. Wow congratulations </p> : <p>SAMPLE TEXT. CLICK TO SELECT THE TEXT BOX. CLICK AGAIN OR DOUBLE CLICK TO START EDITING THE TEXT</p>
                    }
                    <button onClick={() => setClick(!click)} className='border-4 ease-in-out duration-700 border-blue-500 font-bold px-8 py-2 bg-transparent hover:bg-blue-500 text-pink-600 mt-8'>{click? 'Back':'READ MORE'}</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;