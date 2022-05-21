import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Tools />
        </div>
    );
};

export default Home;