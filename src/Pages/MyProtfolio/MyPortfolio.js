import React from 'react';
import Skills from './Skill';
import { useNavigate } from 'react-router-dom';
import Work from './Work';

const MyPortfolio = () => {
    const navigate = useNavigate()
    return (
        <div className='py-36'>
            <div className='text-3xl mb-6'>
                <h1 className='text-center text-black'>Name: Tanjin Hossain</h1>
            </div>
           
            <Skills />
            <div className='bg-[#081647] text-white'>
                <h1 onClick={()=>navigate('/contactUs')} className='text-5xl font-bold text-center py-12 underline cursor-pointer'>Contact me</h1>
            </div>
            <div className='text-center'>
                    <h1 className='font-bold text-xl'>Live Projects:</h1>
                    1. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://ema-john-simple-do.web.app/">Ema-john-simple-do</a><br />
                    2. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://books-warehouse-edfd7.web.app/">Books-Warehouse </a> <br />
                    3. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://gym-trainer-a4e7b.web.app/">Gym Trainer </a> <br />
                    4. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://doctor-portal-1de28.web.app/">Doctors</a> <br />
                </div>
            {/* <div ><span className='text-xl font-bold'>Skill:</span>
                <div className='grid lg:grid-cols-2'>
                    <div>
                        1.HTML <br />
                        2.CSS  <br />
                        3.Javascript <br />
                        4.React.js <br />
                        5.Tailwind <br />
                        6.Bootstrap
                        7.DaisyUI <br />
                        8.React Router <br />
                        9.React Query <br />
                    </div>
                    <div>
                        10.firebase <br />
                        11.React firebase hook <br />
                        12.React form hook <br />
                        13.Node.js <br />
                        14.Express.js <br />
                        15.MongoDB <br />
                        16.NodeMailer <br />
                        17.Github <br />
                        18.Fontawesome <br />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Live Projects:</h1>
                    1. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://books-warehouse-edfd7.web.app/">Books-Warehouse </a> <br />
                    2. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://gym-trainer-a4e7b.web.app/">Gym Trainer </a> <br />
                    2. <a className='underline text-blue-600' target='_blank' rel='noreferrer' href="https://tools-a576c.web.app/">Electric Tools</a>
                </div>
            </div> */}
        </div>
    );
};

export default MyPortfolio;