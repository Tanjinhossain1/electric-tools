import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <div className='py-52'>
           
            <div className='bg-[#1a1e2d] py-48  '>
                <p className='text-3xl font-bold text-center text-white'>Contact Us</p>
            </div>
            <div>
                <div className=''>
                <div className='bg-[#008afa] mt-[-100px] lg:mt-[-500px] number1 text-white w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3'>
                        <div className='hover:bg-blue-900 text-center border-r border-b lg:border-b-0 py-12'>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faMapLocation} /></p>
                            </p>
                            <p className='mt-6'>Our Location</p>
                            <p>Dhaka,Narayanganj, Bangladesh </p>
                        </div>
                        <div className='hover:bg-blue-900 text-center border-r border-b lg:border-b-0  py-12'>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faEnvelope} /></p>
                            </p>
                            <p className='mt-6'>OUR MAIL</p>
                            <p>Tanjinhossain2003@gmail.com</p>
                        </div>
                        <div className='hover:bg-blue-900 text-center border-r border-b lg:border-b-0 py-12 '>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faPhone} /></p>
                            </p>
                            <p className='mt-6'>OUR PHONE</p>
                            <p>+880 1861557343</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#008afa] mt-[70px] number1 text-white w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3'>
                        <div className='text-center hover:bg-blue-900  border-r border-b lg:border-b-0 py-12 '>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faFacebook} /></p>
                            </p>
                            <p className='mt-6'>Facebook</p>
                            <a className='underline' target='_blank'  rel="noreferrer" href="https://www.facebook.com/iloveyou.tanjin/">Click and Connect with Facebook</a>
                        </div>
                        <div className='hover:bg-blue-900 text-center border-r border-b lg:border-b-0  py-12'>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faLinkedinIn} /></p>
                            </p>
                            <p className='mt-6'>Linkedin</p>
                            <a className='underline' target='_blank'  rel="noreferrer" href="https://www.linkedin.com/in/tanjin-hossain-56765123b/">Click and come to my Linkedin profile</a>
                         
                        </div>
                        <div className='hover:bg-blue-900 text-center border-r border-b lg:border-b-0 py-12 '>
                            <p className='rounded-full border w-[120px] p-2  mx-auto'>
                                <p className='rounded-full bg-[#006ec8] w-[100px] py-6 mx-auto'><FontAwesomeIcon className='text-[#ffe700] text-4xl' icon={faInstagram} /></p>
                            </p>
                            <p className='mt-6'>Instagram </p>
                           
                            <a className='underline' target='_blank'  rel="noreferrer" href="https://www.instagram.com/sktanjin/">Click and talk with me</a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ContactUs;