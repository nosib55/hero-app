import React from 'react';
import bannerImage from '../assets/hero.png';
import playStore from '../assets/playstore.png'
import appStore from '../assets/appstore.png'
import Stat from './Stat';



const HeroBanner = () => {
    return (
        <div>
            <div>
                <div className='text-center mt-10'>
                    <h1 className='text-5xl font-semibold '>We Build</h1>
                    <h1 className='text-5xl font-bold '><span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='mt-4'>At HERO-APP.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='mt-4'> <button className='mr-4'><span className='flex items-center gap-1'><img src={playStore} alt="Google Play" className='h-5'/>  <a href="https://play.google.com/store/games?hl=en">Google Play</a></span></button>
                    <button><span className='flex items-center'><img src={appStore} alt="App Store" className='h-5'/> <a href="https://www.apple.com/app-store/">App Store</a></span></button></div>
                </div>
                   <div className='flex justify-center mt-5'>
                   <img src={bannerImage} alt="Hero Banner" />
                  </div>

                 

            </div> 
            <Stat></Stat> 
        </div>
    );
};

export default HeroBanner;