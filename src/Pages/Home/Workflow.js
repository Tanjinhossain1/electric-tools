import React from 'react';

const Workflow = () => {
    return (
        <div className='w-[300px] my-32 lg:w-3/4 mx-auto' >
            <div className='text-center mb-12'>
                <p>PROCESS WORKFLOW</p>
                <h1 className='text-3xl font-bold'>How It Works</h1>
            </div>
            <div className='grid gap-12 grid-cols-1  lg:grid-cols-3'>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img className='mb-4' src="https://previewthemes.com/drupal/castron/sites/default/files/gbb-uploads/icon-time.png" alt="" />
                    </div>
                        <p className='text-xl'>Pick A Time</p>
                        <p>We're available 7am-11pm and you can easily reschedule online.</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'> 
                    <img className='mb-4' src="https://previewthemes.com/drupal/castron/sites/default/files/gbb-uploads/icon-phone.png" alt="" />
                    </div>
                    <p className='text-xl'>Book Instantly</p>
                    <p>We'll confirm your appointment and take care of payment electronically and securely.</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                    <img className='mb-4' src="https://previewthemes.com/drupal/castron/sites/default/files/gbb-uploads/icon-pro.png" alt="" />
                    </div>
                    <p className='text-xl'>Your Pro Arrives</p>
                    <p>An experienced, fully-equipped professional will show up on time at your doorstep!</p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;