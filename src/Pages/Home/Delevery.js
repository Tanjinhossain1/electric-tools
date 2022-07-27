import React from 'react';

const Delevery = () => {
    return (
        <div    className='  shadow-2xl lg:w-3/4 mx-auto px-12 mb-32 py-12'>
            <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div data-aos-delay="300" data-aos="fade-right"  className='flex justify-between items-center gap-5'>
                    <img className='w-[70px] h-[40px]' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-shopioauto-home1-icon1.png?v=1645158589" alt="" />
                    <p className='font-semibold text-xl  '>Free delivery on all
                        orders over $50</p>
                </div>

                
                <div data-aos-delay="300" data-aos="fade-in"  className='flex justify-between '>
                    <img className='w-[70px] h-[50px]' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-shopioauto-home1-icon2.png?v=1645158589" alt="" />
                    <p className='font-semibold text-xl  ml-4 '>One stop shopping
                        for all your needs</p>
                </div>
                <div data-aos-delay="300" data-aos="fade-up"  className='flex justify-between '>
                    <img className='w-[70px] h-[50px]' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-shopioauto-home1-icon3.png?v=1645158589" alt="" />
                    <p className='font-semibold text-xl  ml-4 '>Selected partners
                        and suppliers</p>
                </div>
                <div data-aos-delay="300" data-aos="fade-left"  className='flex justify-between gap-5'>
                    <img className='w-[70px] h-[50px]' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-shopioauto-home1-icon4.png?v=1645158589" alt="" />
                    <p className='font-semibold text-xl '>Fast and secured
                        payment solutions</p>
                </div>
            </div>
        </div>
    );
};

export default Delevery;