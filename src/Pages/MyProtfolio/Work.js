import React from 'react';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      backgroundImage: `url(https://wallpaperaccess.com/full/5651990.jpg)`,
      backgroundAttachment: 'fixed'
    }} name='work' className='bg-fixed w-full md:h-screen text-gray-300 bg-[#0a192f] '>

      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold  text-center text-white'>
            Work
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78yzSGOZfnk1z0-oFIRqTJT1Qi1cfM70vYWKBEfzJJfrZn6xJ2HjdYPqtDpos1ofCZ_E&usqp=CAU)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}

            {/* electric tool  */}

            <div className='hover:scale-150 rounded-lg group-hover:bg-[#f50ace] duration-500 ease-in-out w-full h-full opacity-0  group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Electric-tools
              </span>
              <div className='pt-8 text-center'>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a target='_blank' rel="noreferrer" href="https://tools-a576c.web.app/">Live</a>
                  </button>
                </a>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a target='_blank' rel="noreferrer" href="https://github.com/Tanjinhossain1/electric-tools">Code</a>
                  </button>
                </a>


                <button onClick={() => navigate('/electric')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More
                </button>

              </div>
            </div>
          </div>



          {/* books  */}
          <div
            style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAwGoPynfA6QpBHLkWXd2qs07Do492DpCOA&usqp=CAU)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' hover:scale-150 rounded-lg group-hover:bg-[#f50ace] duration-500 ease-in-out w-full h-full opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Book Warehouse

              </span>
              <div className='pt-8 text-center'>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a target='_blank' rel="noreferrer" href="https://books-warehouse-edfd7.web.app/">Live</a>
                  </button>
                </a>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>

                    <a target='_blank' rel="noreferrer" href="https://github.com/Tanjinhossain1/book-warehouse-managemant">Code</a>
                  </button>
                </a>
                <button onClick={()=>navigate('/books')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More</button>
              </div>
            </div>
          </div>
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJSGSCj-ZUbOhTVWCxlGV8-33FtamWo_86Cc8de7NIV5D8uGxoz_lFo4pXmx_GwapnXQ&usqp=CAU)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}

            <div className=' hover:scale-150 rounded-lg group-hover:bg-[#f50ace] duration-500 ease-in-out w-full h-full opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Personal Gym-Trainer
              </span>
              
              <div className='pt-8 text-center'>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a target='_blank' rel="noreferrer" href="https://gym-trainer-a4e7b.web.app/">Live</a>
                  </button>
                </a>
                <a target='_blank' rel="noreferrer" href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a target='_blank' rel="noreferrer" href="https://github.com/Tanjinhossain1/specital-gym-trainer">Code </a>
                  </button>
                </a>          
                  <button onClick={()=>navigate('/gym')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
