import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved,faArrowRight, faHouse, faRocket, faFan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const WeHelpWith = () => {
    const navigate = useNavigate()

    return (
        <div   className='mt-32'>
            <h1 className='text-4xl text-center font-bold '>What Can We Help You With?</h1>

            <div className='lg:w-3/4 mx-auto mt-12'>
                <div className='lg:flex justify-around '>
                    <div>
                        <div data-aos-delay="300" data-aos="fade-right" className='text-center'>
                            <p className='flex w-[100px] mx-auto rounded-full py-5 justify-center bg-[#ffe2db] text-5xl'><FontAwesomeIcon className='text-[#ec6042]' icon={faFireFlameCurved} /></p>
                            <p className='text-xl font-bold my-4 ' >Energy</p>
                            <p className='w-3/4 mx-auto'>See our energy products and services available to you.</p>
                        </div>
                        <div data-aos-delay="300" data-aos="fade-up" className='text-center mt-12'>
                            <p className='flex w-[100px] mx-auto rounded-full py-5 justify-center bg-[#e5faf5] text-5xl'> <FontAwesomeIcon className='text-[#3fd2a8]' icon={faHouse} /></p>
                            <p className='text-xl font-bold my-4 ' >Home Services</p>
                            <p className='w-3/4 mx-auto'>Protect your boiler, heating, appliances, electricals, plumbing and drains.</p>
                        </div>
                    </div>
                    <div data-aos-delay="1000" data-aos="zoom-in">
                        <img src="https://previewthemes.com/drupal/castron/sites/default/files/gbb-uploads/image-1.png" alt="" />

                    </div>
                    <div>
                        <div data-aos-delay="200" data-aos="fade-up" className='text-center'>
                            <p className='flex w-[100px] mx-auto rounded-full py-5 justify-center bg-[#eaf0fe] text-5xl'><FontAwesomeIcon className='text-[#597ef0]' icon={faRocket} /></p>
                            <p className='text-xl font-bold my-4 ' >Smart Homes
                            </p>
                            <p className='w-3/4 mx-auto'>Enjoy the benefits of smart meters and find out more about smart products.

                            </p>
                        </div>
                        <div data-aos-delay="300" data-aos="fade-left" className='text-center mt-12'>
                            <p className='flex w-[100px] mx-auto rounded-full py-5 justify-center bg-[#fff4de] text-5xl'> <FontAwesomeIcon className='text-[#efb959]' icon={faFan} /></p>
                            <p className='text-xl font-bold my-4 ' >Help & Support
                            </p>
                            <p className='w-3/4 mx-auto'> Choose a category to find the best way to contact us.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffe700] py-12'>
               <div className='lg:flex justify-between w-3/4  mx-auto'>
               <p data-aos-delay="300" data-aos="fade-right" className='text-2xl font-semibold'>Looking For A Qulity And Afffordable For Your Next Trouble?</p>
               <button onClick={()=>navigate('/blog')} data-aos-delay="300" data-aos="fade-left" class="text-white hover:bg-blue-500 font-bold px-8 py-2 bg-blue-600 border-0"><span>Reed More</span> <FontAwesomeIcon className=' ml-3 font-bold' icon={faArrowRight} /> </button>

               </div>
            </div>
        </div>
    );
};

export default WeHelpWith;