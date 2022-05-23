import React from 'react';

const Banner = () => {
    return (
        <div className='text-white '>
            <div className="hero min-h-screen bg-[#050326] pb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='Electric tools' src="https://i.ibb.co/RDqxhrH/alltools.webp" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-2/4'>
                        <h1 className="text-5xl font-bold">Simple & Modern Electric <span className='text-yellow-500'>Hand Tools</span></h1>
                        <p className="py-6 w-3/4">Electric Hand tools is most important in our life. When using hand tools then easy to Electric works So if you want Electric hand tools then get it.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;