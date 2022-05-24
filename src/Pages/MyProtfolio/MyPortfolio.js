import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='text-3xl mb-6'>
                <h1>Name: Tanjin Hossain</h1>
                <p>email: tanjinhossain2003@gmail.com</p>
            </div>
            <div>
                <p className='text-xl mb-4'>Education: Diploma (computer)</p>
            </div>
            <div ><span className='text-xl font-bold'>Skill:</span>
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
            1. <a className='underline text-blue-600' target='_blank' rel='noreferrer'  href="https://books-warehouse-edfd7.web.app/">Books-Warehouse </a> <br />
            2. <a className='underline text-blue-600' target='_blank' rel='noreferrer'  href="https://gym-trainer-a4e7b.web.app/">Gym Trainer </a> <br />
            2. <a className='underline text-blue-600' target='_blank' rel='noreferrer'  href="https://tools-a576c.web.app/">Electric Tools</a>
        </div>
            </div>
        </div>
    );
};

export default MyPortfolio;