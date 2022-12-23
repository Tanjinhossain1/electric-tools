import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Review from './Review'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const UserReviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch(`https://electric-tools.onrender.com/reviews`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }
    return (
        <div className='mb-12 '>
            <h1 className='text-4xl  text-center text-blue-900 font-bold mb-5'>Reviews</h1>
            <div className='w-3/4  mx-auto   rounded-lg'>
                <Swiper
                
                    spaceBetween={50}
                    // slidesPerView={3}
                    breakpoints={{
                        576: {
                            //   width: 576,
                            slidesPerView: 1,
                        },
                       
                        1401: {
                            //   width: 768,
                            slidesPerView: 3,
                        },
                    }}
                    //    navigation
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                    <div className='grid lg:grid-cols-3 p-5 lg:w-3/4 mx-auto'>
                        {
                            reviews.map(review =>
                                <SwiperSlide>
                                <div className='bg-gradient-to-br from-gray-300 via-red-100 to-white text-center shadow-2xl rounded-full p-4 border  m-2'>
                                    <p title={review.description}>{review.description.slice(0,130) }</p>
                                    <p className='font-bold'>Rating: <span className='text-pink-600 font-bold'>{review.rate}<FontAwesomeIcon className='text-yellow-500' icon={faStar} /></span></p>
                                </div>

                            </SwiperSlide>
                            )
                        }
                    </div>
                    {/* {
                        reviews.map(review => <Review key={review._id} review={review} />)
                    } */}

                </Swiper>
            </div>


        </div>
    );
};

export default UserReviews;