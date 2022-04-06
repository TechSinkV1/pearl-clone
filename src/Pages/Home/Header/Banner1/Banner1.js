import React from 'react';
import slide1 from '../../../../images/revslide1.jpg'
import './Banner1.css'

const Banner1 = () => {
    return (
        <div className="banner1">
            {console.log('banner1 rendered')}
            <img className='h-full' src={slide1} alt="" />
            <div className="slider-content">
                <h1>DISCOVER THE WORLD <br /> OF BUSINESS</h1>
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

export default Banner1;