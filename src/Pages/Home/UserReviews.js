import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Review from './Review'

const UserReviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch(`https://mighty-ridge-59560.herokuapp.com/reviews`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }
    return (
        <div className='mb-12'>
            <h1 className='text-4xl text-center text-blue-900 font-bold mb-5'>Reviews</h1>
            <div className='grid lg:grid-cols-3 lg:w-3/4 mx-auto'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>

        </div>
    );
};

export default UserReviews;