import React from 'react';
import slide3 from '../../../../images/slide3-1.jpg'
import './Banner3.css'

const Banner3 = () => {
    return (
        <div className="banner3">
            {console.log('banner3 rendered')}
            <img className='h-full' src={slide3} alt="" />
            <div className="slider-content">
                <h1>CONSULTING AND AUDIT FOR <br /> SMALL BUSINESS</h1>
                <p>Experience, accountability and innovation - all of which is reflected in the quality of our results</p>
                <div className='banner-btns'>
                <button className="read-more-btn">
                Read More
                </button>
                <button className='contact-us-btn'>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Banner3;