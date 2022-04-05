import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'

const Portfolio = () => {

    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <p className="portfolio-header">Portfolio
                    <button className="portfolio-button">X</button></p>
            </div>
            <div className='portfolio-content'>
                <div className='portfolio-content-inner'>
                    <h4>Todo Application</h4>
                    <img className='portfolio' src={test} alt='test' />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;