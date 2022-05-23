import React from 'react';

const Category = () => {
    return (
        <div>
            <div className='border -mt-20 bg-white  w-3/4 mx-auto'>
                <div>
                    <div className='text-center '>
                        <h1 className='text-5xl font-bold'>Tools Category</h1>
                        <p className='text-3xl'><small>There you see some different tools category </small></p>
                    </div>
                    <div className='grid lg:grid-cols-4'>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://i.ibb.co/rGGxV8s/download.jpg" alt="" />
                            <p className='text-center absolute ml-8 text-white  -mt-12 '>Power Harden Plus</p>
                            <p className='text-center absolute ml-[60px] text-white  -mt-6 '>Purchase Now</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4snyudizVGAZwCrOAay6fp_IYrLREJY-Lg&usqp=CAU" alt="" />
                            <p className='text-center absolute ml-8 text-white  -mt-12 '>Shanghai Harden</p>
                            <p className='text-center absolute ml-[50px] text-white  -mt-6 '>Purchase Now</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT635pN10m3C2nrkpFWhnEJCOiPP00hVoOGkCl5q-wN77rRHlR6Z1E0AMjofi6ML_Ml9rU&usqp=CAU" alt="" />
                            <p className='text-center absolute ml-14 text-white  -mt-12 '>screw Driver</p>
                            <p className='text-center absolute ml-[60px] text-white  -mt-6 '>Purchase Now</p>
                        </div>
                        <div className=' m-5'>
                            <img className='w-full relative rounded-lg' src="https://thetoolstop.pk/wp-content/uploads/2020/10/A-106007b.jpg" alt="" />
                            <p className='text-center absolute ml-8 text-white  -mt-12 '>Repairing Tool Set</p>
                            <p className='text-center absolute ml-[60px] text-white  -mt-6 '>Purchase Now</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex w-3/4 mx-auto mt-8 justify-between border bg-yellow-500 items-center p-6'>
                <div>
                    <h1 className='text-3xl text-[#04054a] font-bold'>LIMITED EDITION GET UP TO 50% OFF.</h1>
                    <p className='text-xl'>Suggestion offer work some day</p>
                </div>
                <div>
                    <button className="btn btn-outline">Explore Me</button>
                </div>
            </div>
        </div>
    );
};

export default Category;