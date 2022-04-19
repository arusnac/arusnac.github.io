import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import test from '../assets/Portfolio/me.jpg'
import './Portfolio.css'
import './About.css'
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import Draggable from "react-draggable";
import { toggleFocus, toggleOpen } from '../Redux/windowSlice'



const About = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('about'))
    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }



    return (
        <Draggable handle='#handle' nodeRef={nodeRef} >

            <div onClick={handleClick} ref={nodeRef} className='portfolio' style={{ zIndex: window.windows[0].isFocus && 1 }}>
                <div id='handle' className='portfolio-header' >

                    <p className="portfolio-header" style={{ backgroundColor: window.windows[0].isFocus && '#000080' }}>
                        <img className='contact-icon' src={aboutIcon} alt='icon' />
                        About
                        <button
                            onClick={closeWindow}
                            value='about'
                            className='portfolio-button'>
                            X
                        </button>
                    </p>
                </div>
                <div className='about-content' >
                    <img className='about-image' src={test} alt='test' />
                    <div className='about-item about-info'> <p className='about-item'>Hello, I'm Andrew!
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
        </Draggable >

    )
};

export default About;