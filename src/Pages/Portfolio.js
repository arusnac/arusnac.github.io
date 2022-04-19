import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
                <div className='portfolio-content'>
                    <h4>Todo Application</h4>


                    <p>This application was developed using Python and Flask</p>
                    <div className='portfolio-content-inner'>


                        <img className='portfolio-image' src={test} alt='test' />

                    </div>
                </div>
            </div>


        </Draggable >

    )
};

export default Portfolio;