import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Category from './Category';
import UserReviews from './UserReviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BusinessSummary />
            <Tools />
            <UserReviews />
        </div>
    );
};

export default Home;