import React from 'react';
import Banner from './Banner';
import Audience from './Audience';
import Review from './Review';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner/>
            <Audience/>
            <Review/>
        </div>
    );
};

export default Home;