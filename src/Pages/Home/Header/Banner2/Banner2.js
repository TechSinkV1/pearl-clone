import React from 'react';
import slide2 from '../../../../images/revslide2.jpg'
import './Banner2.css'

const Banner2 = () => {
    return (
        <div className="banner2">
            {console.log('banner2 rendered')}
            <img className='h-full' src={slide2} alt="" />
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

export default Banner2;