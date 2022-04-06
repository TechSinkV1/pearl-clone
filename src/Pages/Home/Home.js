import React from 'react';
import AboutMission from './AboutMission/AboutMission';
import Attribution from './Attribution/Attribution';
import './Home.css';



const Home = () => {
    return (
        <div className='home'>
            <AboutMission></AboutMission>
            <Attribution></Attribution>
        </div>
    );
};

export default Home;