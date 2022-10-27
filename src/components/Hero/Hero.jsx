import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import {motion} from 'framer-motion'
const Hero = () => {
    const transition = {type : 'spring', duration: 3}
    return (
    <div className='hero'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial = {{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>The Best fitness in the town.</span>
            </div>
            {/* hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                        Ideal Body</span>
                </div>
                    <div className='span'>
                        In here we will help you to shape and build your ideal body and live up your life to fullest.
                    </div>
            </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span><span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span><span>members joined</span>
                </div>
                <div>
                    <span>+50</span><span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join now</button>
            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart rate</span><span>116 bmp</span>
            </div>
            {/* hero image */}
            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image-back' />
            {/* the calories div */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span><span>220 Kcal</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero
