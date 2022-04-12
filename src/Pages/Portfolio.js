import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import Draggable from "react-draggable";

const Portfolio = (props) => {
    const nodeRef = React.useRef(null);

    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>
            <div ref={nodeRef} className='portfolio'>
                <div id='handle' className='portfolio-header'>
                    <img className='contact-icon' src={portfolioIcon} alt='icon' />Portfolio
                    <button onClick={props.openPort} className="portfolio-button">X</button>
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