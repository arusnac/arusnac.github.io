import React, { useEffect, useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from './Portfolio.module.css'
import { toggleFocus, toggleOpen } from "../Redux/windowSlice";
import Website from "./Inner/Website";
import House from './Inner/House';
import Schedule from "./Inner/Schedule";

const Portfolio = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const [page, setPage] = useState('website');

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('portfolio'))
    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }

    const showPage = (e) => {
        setPage(e.target.value)
    }

    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>

            <div onClick={handleClick} ref={nodeRef} className='portfolio' style={{ zIndex: window.windows[1].isFocus && 1 }} >
                <div id='handle' className='portfolio-header'
                    style={{ backgroundColor: window.windows[1].isFocus && '#000080' }}>
                    <img className='contact-icon' src={portfolioIcon} alt='icon' />Portfolio.exe
                    <button
                        onClick={closeWindow}
                        value='portfolio'
                        className='portfolio-button'>
                        X
                    </button>
                </div>
                <div className={styles.portfolio_wrapper}>
                    <div className={styles.navigation}>
                        <button value='website' onClick={showPage} className={styles.navigation_link}>
                            Portfolio Website
                        </button>
                        <button value='house' onClick={showPage} className={styles.navigation_link}>
                            House Price Predictor
                        </button>
                        <button value='schedule' onClick={showPage} className={styles.navigation_link}>
                            Appointment Scheduler
                        </button>
                    </div>
                    <div className={styles.main}>

                        {page === 'website' && <Website />}
                        {page === 'house' && <House />}
                        {page === 'schedule' && <Schedule />}
                    </div>
                </div>

            </div>
        </Draggable >

    )
};

export default Portfolio;