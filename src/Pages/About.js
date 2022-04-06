import React, { useState } from "react";
import test from '../assets/Portfolio/me.jpg'
import './Portfolio.css'
import './About.css'

const About = (props) => {
    const [isOpen, setClosed] = useState('true')

    const closePage = () => {
        setClosed(!isOpen);
    }

    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <p className="portfolio-header">About
                    <button onClick={props.openAbout} className="portfolio-button">X</button></p>
            </div>
            <div className='about-content'>
                <div className='about-item'> <img src={test} alt='test' /></div>
                <div className='about-item'> <p>Heyo, i'm just making a website</p>
                </div>
            </div>
        </div>
    )
};

export default About;