import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from './Portfolio.module.css'
import { toggleFocus, toggleOpen } from "../Redux/windowSlice";

const Portfolio = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('portfolio'))
    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }


    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>

            <div onClick={handleClick} ref={nodeRef} className='portfolio' style={{ zIndex: window.windows[1].isFocus && 1 }} >
                <div id='handle' className='portfolio-header'
                    style={{ backgroundColor: window.windows[1].isFocus && '#000080' }}>
                    <img className='contact-icon' src={portfolioIcon} alt='icon' />Portfolio
                    <button
                        onClick={closeWindow}
                        value='portfolio'
                        className='portfolio-button'>
                        X
                    </button>
                </div>
                <div className={styles.portfolio_wrapper}>
                    <div className={styles.navigation}>
                        <button className={styles.navigation_link}>Portfolio Website</button>
                        <button className={styles.navigation_link}>House Price Predictor</button>
                    </div>
                    <div className={styles.main}>

                        <div className={styles.portfolio_inner}>
                            <h4>Desktop-like Site</h4>
                            <p>This is my latest project which is a work in progress.
                                My hopes are to turn this into a more fully featured desktop (simulating Windows 95
                                more or less.) I'd like to add additional applications that you can run such as a music
                                player for example.<br /><br />

                                This was done using React with Redux for state management.<br /><br />
                                <b>Some Todo's:</b>
                            </p>
                            <form>
                                <input type='checkbox' checked />Add Socials<br />
                                <input type='checkbox' />Make Site Mobile Friendly<br />
                                <input type='checkbox' />Add "Screensaver"<br />
                                <input type='checkbox' />Add Calender<br />
                                <input type='checkbox' />Add Applications (calculator, emulators)<br />
                            </form>
                            {/* <img className={styles.portfolio_image} src={test} alt='test' /> */}

                        </div>
                    </div>
                </div>

            </div>
        </Draggable >

    )
};

export default Portfolio;