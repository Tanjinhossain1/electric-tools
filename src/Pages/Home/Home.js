import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Category from './Category';
import SpecialOffers from './SpecialOffers';
import TrendingTools from './TrendingTools';
import UserReviews from './UserReviews';
import WeHelpWith from './WeHelpWith';
import Workflow from './Workflow';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BusinessSummary />
            <Tools />
            <WeHelpWith />
            <TrendingTools />
            <SpecialOffers />
            <Workflow />
            <UserReviews />
        </div>
    );
};

export default Home;