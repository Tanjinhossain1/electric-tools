import React from 'react';

const TrendingTools = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center  font-bold text-[#26264a] text-5xl'>Trending Tools</h1>
            <div className='grid w-3/4 mx-auto mt-8 lg:grid-cols-4 text-center text-xl'>
                <div className='m-4'>
                    <img className='border' src="https://image.made-in-china.com/318f0j00BQUYNEmMhDbo/video.jpg" alt="" />
                    <p>115mm machine</p>
                </div>
                <div className='m-4'>
                    <img className='border' src="https://www.technobuffalo.com/sites/technobuffalo.com/files/field/image/2020/02/worx-wx176l-switchdriver.jpg?itok=WgVTOjlY" alt="" />
                    <p>Electric Drill</p>
                </div>
                <div className='m-4'>
                    <img className='border' src="https://static-01.daraz.com.bd/p/dbcb3f8c9fdb5d1bccb2fb0e06b37d85.jpg" alt="" />
                    <p>Soldering Iron</p>
                </div>
                <div className='m-4'>
                    <img className='border' src="https://image.made-in-china.com/318f0j00WEIfCLmhgDki/FHBN1006-Ali-mp4.jpg" alt="" />
                    <p>Bent nose Plier</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingTools;