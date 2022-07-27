import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div style={{backgroundImage: `url(https://images.ctfassets.net/pdf29us7flmy/20NgjYWSwwe4XchRGphJNY/c6f69c946501e636d15dd9a5385e6c4f/Soft-Skills-final-August-02.jpg)`,
    backgroundAttachment: 'fixed',
}} name='skills' className='w-full   bg-no-repeat h-screen 
    ..0'>       
      {/* Container */}
      <div  className='max-w-[1000px] pt-72 sm:pt-0 mx-auto px-4  flex bg-fixed flex-col justify-center w-full h-full bg-no-repeat'>
          <div>
              <a href='https://drive.google.com/file/d/1b1qpkaw3z0Lo2OhcDKDxzSJhs9G5p6nI/view?usp=sharing' target='_blank' rel='noreferrer' className='text-4xl font-bold text-center border-2 py-2 px-8 rounded-lg border-blue-600 bg-white hover:bg-blue-600 hover:text-white'>CV</a>
              <p className='text-4xl font-bold text-center text-white'>Skills</p>
             
          </div>
    <h1 className='text-3xl font-bold text-white mt-12'>Expertise:</h1>
          <div className='w-full font-bold  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' rounded-lg shadow-[#081647] bg-[#0ce3eb] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 rounded-full mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtp_eNNg-91xIe_s7Q8dv02ITvx3MnKMTMA&usqp=CAU' alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#b7eb0c] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 mx-auto' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#eb770c] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 rounded-full mx-auto' src='https://st2.depositphotos.com/16030310/43050/v/450/depositphotos_430508750-stock-illustration-letter-logo-hexagon-shape-colorful.jpg?forcejpeg=true' alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#8e0cf7] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#a213d1] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#f70c95] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 rounded-full mx-auto' src='https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg' alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#0cf78e] shadow-2xl hover:scale-150 duration-500'>
                  <img className='w-28 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#e4f70c] shadow-2xl hover:shadow-pink-700 hover:scale-150 duration-500'>
                  <img className='w-48 mx-auto' src='https://i.ibb.co/D7P7MqQ/fire-removebg-preview.png' alt="HTML icon" />
                  <p className='my-4'>AUTHENTICATION</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#0ce3eb] shadow-2xl hover:shadow-pink-700 hover:scale-150 duration-500'>
                  <img className='w-40 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' alt="HTML icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#eb770c] shadow-2xl hover:shadow-pink-700 hover:scale-150 duration-500'>
                  <img className='w-32 mx-auto rounded-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0b8v--1wbUgqINPmE3zVju1MQeWGNKuiQA&usqp=CAU' alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#8e0cf7] shadow-2xl hover:shadow-pink-700 hover:scale-150 duration-500'>
                  <img className='w-32 mx-auto rounded-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpu-nhPGstgqSKrk7US7lh2plfU_vY0RpsmLThNk4v3AMPPoYej-EZ-TDX8LgR_ep0UEw&usqp=CAU' alt="HTML icon" />
                  <p className='my-4'>React Query</p>
              </div>
              <div className='rounded-lg shadow-[#081647] bg-[#f70c95] shadow-2xl hover:shadow-pink-700 hover:scale-150 duration-500'>
                  <img className='w-32 mx-auto rounded-full ' src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' alt="HTML icon" />
                  <p className='my-4'>Express.js</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
