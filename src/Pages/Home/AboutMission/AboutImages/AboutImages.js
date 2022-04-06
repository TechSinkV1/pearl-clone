import React from 'react'
import './AboutImages.css'

export default function AboutImages(props) {
    const {aboutImg, about} = props;
  return (
    <div className='company-detail flex justify-center items-center my-10'>
        <div className='about-section'>
            <img className='about-img pr-10' src={aboutImg} alt="" />
            <div className='about-detail text-white px-12 py-6'>
                <h3 className='text-2xl pb-4'>{about}</h3>
                <p className='text-xl pb-4'>17 years of experience helping <br/> people to find the best solutions.</p>
                <a className='text-xl' href='/'>Read More</a>
            </div>
        </div>
    </div>
  )
}
