import React, { useState } from "react";
import test from '../assets/Portfolio/todo2.jpg'
import './Portfolio.css'
import './Experience.css'
import Usps from "./Inner/Usps";
import Shiro from "./Inner/Shiro";
import Intel from './Inner/Intel';
import Rusnac from "./Inner/Rusnac";
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFocus, toggleOpen } from "../Redux/windowSlice";


const Experience = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('experience'))

    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }

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
        <Draggable handle='#handle' nodeRef={nodeRef}>
            <div
                onClick={handleClick}
                ref={nodeRef}
                className='portfolio'
                style={{ zIndex: window.windows[2].isFocus && 1 }}
            >
                <div id='handle' className='portfolio-header'>
                    <p className="portfolio-header"
                        style={{ backgroundColor: window.windows[2].isFocus && '#000080' }}>
                        <img className='contact-icon' src={experienceIcon} alt='icon' />
                        Work Experience
                        <button onClick={closeWindow}
                            value='experience'
                            className="portfolio-button">
                            X
                        </button>
                    </p>
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
        </Draggable>
    )
};

export default Experience;
