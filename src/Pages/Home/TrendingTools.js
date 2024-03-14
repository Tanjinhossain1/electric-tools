import React from 'react';

const TrendingTools = () => {
    return (
        <div className='my-32'>
            <h1 className='text-center  font-bold text-[#26264a] text-5xl'>Trending Tools</h1>
            <div   className='grid w-3/4 mx-auto mt-8 lg:grid-cols-4 text-center text-xl'>
                <div data-aos-delay="800" data-aos="fade-right" className='m-4'>
                    <img className='border' src="https://image.made-in-china.com/318f0j00BQUYNEmMhDbo/video.jpg" alt="" />
                        <p className='text-[#161f2e]'>115mm machine</p>
                </div>
                <div  data-aos-delay="500" data-aos="fade-right" className='m-4'>
                    <img className='border' src="https://5.imimg.com/data5/SELLER/Default/2022/1/IX/RA/MN/106623609/20mm-demolition-hammer-500x500.jpg" alt="" />
                        <p className='text-[#161f2e]'>Electric Drill</p>
                </div>
                <div  data-aos-delay="500" data-aos="fade-left" className='m-4'>
                    <img className='border' src="https://static-01.daraz.com.bd/p/dbcb3f8c9fdb5d1bccb2fb0e06b37d85.jpg" alt="" />
                        <p className='text-[#161f2e]'>Soldering Iron</p>
                </div>
                <div  data-aos-delay="800" data-aos="fade-left" className='m-4'>
                    <img className='border' src="https://image.made-in-china.com/318f0j00WEIfCLmhgDki/FHBN1006-Ali-mp4.jpg" alt="" />
                        <p className='text-[#161f2e]'>Bent nose Plier</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingTools;