import React from 'react'
import aboutImg from "../../../images/about.jpg";
import missionImg from '../../../images/mission.jpg';
import AboutImages from './AboutImages/AboutImages';
import './AboutMission.css'

export default function AboutMission() {
  return (
        <div className='about-mission'>
            <div className='motive'>
                <h1>DISCOVER THE WORLD OF BUSINESS</h1>
                <hr className='bar'></hr>
                <p>We Consider all the drivers of change from the <br></br> ground up and we'll motivate you to make the <br></br>change</p>
            </div>
            <div className='flex justify-center gap-12'>
                <AboutImages aboutImg = {aboutImg} about='About Company'></AboutImages>
                <AboutImages aboutImg = {missionImg} about='Our Mission'></AboutImages>
            </div>
        </div>
  )
}
