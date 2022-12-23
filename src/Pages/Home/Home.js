import React from "react";
import Tools from "../Tools/Tools";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Category from "./Category";
import Delevery from "./Delevery";
import SpecialOffers from "./SpecialOffers";
import TrendingTools from "./TrendingTools";
import UserReviews from "./UserReviews";
import VideoTools from "./VideoTools";
import WeHelpWith from "./WeHelpWith";
import Workflow from "./Workflow";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BusinessSummary />
      <Delevery />
      <Tools />
      <WeHelpWith />
      <TrendingTools />
      <SpecialOffers />
      <Workflow />
      <UserReviews />
      <VideoTools />
    </div>
  );
};

export default Home;
