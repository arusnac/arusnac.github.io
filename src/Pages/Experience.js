import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import './Experience.css'
import Usps from "./Inner/Usps";
import Shiro from "./Inner/Shiro";
import Intel from './Inner/Intel';
import Rusnac from "./Inner/Rusnac";

const Experience = (props) => {
    const [page, togglePage] = useState('usps');

    //Toggle the various job pages
    const displayUsps = () => {
        togglePage('usps')
    }

    const displayShiro = () => {
        togglePage('shiro')
    }

    const displayIntel = () => {
        togglePage('intel')
    }

    const displayRusnac = () => {
        togglePage('rusnac')
    }

    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <p className="portfolio-header">Work Experience
                    <button onClick={props.openExp} className="portfolio-button">X</button></p>
            </div>

            <div className="row">
                <div className='column'>
                    <div className='title-column'>
                        <button onClick={displayUsps} className='button-title'>USPS</button>
                        <button onClick={displayShiro} className='button-title'>Shiro</button>
                        <button onClick={displayIntel} className='button-title'>Intel</button>
                        <button onClick={displayRusnac} className='button-title'>Rusnac</button>
                    </div>
                </div>

                <div className='double-column'>
                    <div className="info-column">
                        {(page === 'usps') ? <Usps /> : (page === 'shiro') ? <Shiro /> : (page === 'intel') ? <Intel /> : <Rusnac />}
                        {/* {!shiro && <Shiro />} */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;

{/* <h4>Experience</h4>
                        <h5>USPS</h5>
                        <ul>
                            <li>Organized Letters and packages for efficient delivery</li>
                            <li>Provided top-notch customer service while working 70+ hours/week</li>
                        </ul> */}