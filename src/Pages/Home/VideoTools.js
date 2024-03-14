import { faBolt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const VideoTools = () => {
    return (
        <div>
            <div className='my-32 lg:flex justify-between w-3/4 mx-auto '>
                <div data-aos-delay="300" data-aos="fade-right">
                <iframe className='lg:w-[550px]' height="315" src="https://www.youtube.com/embed/rBYI10QeoRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls allowfullscreen></iframe>
                </div>
                <div data-aos-delay="300" data-aos="fade-left" className='ml-12'>
                    <p className='text-[#545454]'>All of our Services are backed by 100% satisfaction guarantee.Our electronics can do anything from new security lighting for you outdoors to a whole home generator that will keep your appliances working during a power outage. Our Installation service are always done promptly and safely.</p>
                    <p className='mt-6 mb-2'> <FontAwesomeIcon className='text-xl text-orange-600 mr-6' icon={faCheck} /> Full service electrical layout design </p>
                    <p className='mb-2'> <FontAwesomeIcon className='text-xl text-orange-600 mr-6' icon={faCheck} /> Wiring and installation/upgrades</p>
                    <p className='mb-2'> <FontAwesomeIcon className='text-xl text-orange-600 mr-6' icon={faCheck} /> Emergency Power solutions </p>
                    <p className='mb-2'> <FontAwesomeIcon className='text-xl text-orange-600 mr-6' icon={faCheck} /> Virtually any electronic Tools need you have - just ask</p>
                    <button className='mt-4 bg-orange-600 px-6 rounded-lg py-2 text-white font-bold'><FontAwesomeIcon className='text-xl text-white mr-2' icon={faBolt} />Know More</button>
                </div>
            </div>
        </div>
    );
};

export default VideoTools;