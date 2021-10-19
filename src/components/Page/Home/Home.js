import React from 'react';
import SectionTwo from './section2/SectionTwo.js';
import Slider from './Slider/Slider';
import Services from './services/Services'
import Specialists from './specialists/Specialists.js';
import DownloadApp from './DownloadApp/DownloadApp.js';
import Articles from './Articles/Articles.js';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <SectionTwo></SectionTwo>
           <Services></Services>
           <Specialists></Specialists>
           <DownloadApp></DownloadApp>
           <Articles></Articles>
        </div>
    );
};

export default Home;