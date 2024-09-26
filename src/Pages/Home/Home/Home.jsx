import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
        </div>
    );
};

export default Home;