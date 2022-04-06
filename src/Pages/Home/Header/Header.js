import React, { Component } from 'react'
import logo from '../../../images/logo-png.png'
import Banner1 from './Banner1/Banner1';
import Banner2 from './Banner2/Banner2';
import Banner3 from './Banner3/Banner3';
import Delayed from './Delayed';
import './Header.css'


export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            firstBannerTimer: 0,
            secondBannerTimer: 6000,
            thirdBannerTimer: 12000
        }
    }
  render() {
      const {firstBannerTimer, secondBannerTimer, thirdBannerTimer} = this.state;
    return (
        <header>
        <div className='slider'>
            <Delayed waitBeforeShow={firstBannerTimer}>
                <Banner1/>
            </Delayed>
            <Delayed waitBeforeShow={secondBannerTimer}>
                <Banner2/>
            </Delayed>
            <Delayed waitBeforeShow={thirdBannerTimer}>
                <Banner3/>
            </Delayed>
        </div>

        <nav className='flex justify-around items-center'>
            <div className="logo">
                <a className='' href="/">
                    <img className='logo-img' src={logo} alt="" />
                </a>
            </div>
            <div className="allPages">
                <ul className="pages flex gap-10">
                    <li className="page text-2xl">Home</li>
                    <li className="page text-2xl">Events</li>
                    <li className="page text-2xl">Services</li>
                    <li className="page text-2xl">Cases</li>
                    <li className="page text-2xl">News</li>
                </ul>
            </div>
        </nav>
        <div className='space-cover'></div>
    </header>
    )
  }
}