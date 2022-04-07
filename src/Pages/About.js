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
                <div className='about-item'> <img className='about-item' src={test} alt='test' /></div>
                <div className='about-item'> <p className='about-item'>Hello, I'm Andrew!
                    <br /><br />
                    I'm a new Computer Science graduate with an interest in breaking into the world of programming.<br />
                    I've been interested in development since I was in high school, I remember dabbling with Visual Basic<br />
                    in the computer labs trying my hand at making an RPG. In my later years I designed and built a few personal<br />
                    websites and one for the small business I worked at. However, life got in the way and my focus was on simply<br />
                    bringing home a paycheck and coding fell by the wayside. It was only until recently that I decided to chase<br />
                    that dream again. I went back to school and finished up that CS degree I started.<br /><br />

                    Through the process I've learned Computer Science fundamentals, Java, Python, Flask, and JavaScript/React/Node.<br />
                    I'm very open to the where that journey takes me next but have discovered a fondness for web development<br /><br />
                    You can take a look at the handful of projects I've worked on in my Portfolio page.
                </p>
                </div>
            </div>
        </div>
    )
};

export default About;