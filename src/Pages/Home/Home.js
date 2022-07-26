import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Category from './Category';
import SpecialOffers from './SpecialOffers';
import TrendingTools from './TrendingTools';
import UserReviews from './UserReviews';
import Workflow from './Workflow';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BusinessSummary />
            <Tools />
            <SpecialOffers />
            <TrendingTools />
            <Workflow />
            <UserReviews />
        </div>
    );
};

export default Home;