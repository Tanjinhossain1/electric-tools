import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faComputer, faFlag, faUsers } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div className='my-12 '>
            <div>
                <h1 className='text-5xl text-center  text-[#09afb5] font-bold'>MILLIONS BUSINESS TRUST US</h1>
                <h3 className='text-2xl mt-2 text-blue-900 font-semibold text-center'>TRY TO UNDERSTAND USERS EXPECTATION</h3>
                <div className='grid md:grid-cols-2 text-center mt-12 lg:grid-cols-4'>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-[#099ab0]' icon={faFlag} />
                        <p className='text-3xl font-semibold text-blue-900 my-2'>120</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Countries</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-[#099ab0]' icon={faComputer} />
                        <p className='text-3xl font-semibold text-blue-900 my-2'>1000+</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Compleat Projects</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-[#099ab0]' icon={faUsers} />
                        <p className='text-3xl font-semibold text-blue-900 my-2'>746+</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>Happy Clients</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-7xl text-[#099ab0]' icon={faComments} />
                        <p className='text-3xl font-semibold text-blue-900 my-2'>902+</p>
                        <p className='text-xl font-semibold text-[#1bb0b3]'>FeedBacks</p>
                    </div>
                </div>
                <div className='w-3/4 mx-auto shadow-2xl mt-8 p-6 lg:flex justify-between items-center'>
                    <div className='lg:w-3/4'>
                        <h1 className='text-4xl text-[#09afb5]'>Have any question about us or get a product request?</h1>
                        <p className='text-xl text-blue-900'>Don't hesitated to Contact us</p>
                    </div>
                    <div className='flex '>
                        <button class="btn mr-4 rounded-lg bg-[#1bb0b3] border-0 btn-xs sm:btn-sm md:btn-md lg:btn-md">Request For Quote</button>
                        <button class="btn  rounded-lg bg-blue-900 btn-xs border-0 sm:btn-sm md:btn-md lg:btn-md">Contact Us</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;