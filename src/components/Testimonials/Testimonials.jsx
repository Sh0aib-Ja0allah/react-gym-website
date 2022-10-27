import React from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react'
import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const [selected, setSelected] = useState(1);
    const tLength = testimonialsData.length;

    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img 
                        onClick={() => {
                            selected === 0 ? setSelected(tLength - 1):
                            setSelected((Prev) => Prev - 1)
                        }}
                        src={LeftArrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1 ? setSelected(0):
                            setSelected((Prev) => Prev + 1)
                    }}
                    src={RightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials