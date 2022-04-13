import React, { useState, useRef } from "react";
import './Desktop.css'
import gitHub from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import Portfolio from "./Pages/Portfolio";
import eventBus from "./EventBus";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Info from './Pages/Info';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFocus } from './Redux/windowSlice';

const Desktop = (props) => {
    const window = useSelector((state) => state.window.value);
    const windowStates = useSelector((state) => state.window);
    const focusWindow = useRef(null);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(toggleFocus('about'))
        console.log(e.target)
        focusWindow.current.focus();
        console.log('focus')
    }


    return (<div>
        <div className="container_icon">
            <div className='desktop-item'>
                <img className="desktop-img" src={gitHub} alt='GitHub'></img>
                <div>
                    <a href="https://github.com/arusnac?tab=repositories" target="_blank" rel="noreferrer noopener">GitHub</a>
                </div>
            </div>

            <div className='desktop-item'>
                <img className="desktop-img" src={linkedIn} alt='LinkedIn'></img>
                <div>
                    <a href="https://www.linkedin.com/in/arusnac/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                </div>
            </div>

        </div>

        <div className='container-desktop'>
            <div className='container-modal'>
                <Info />
            </div>
            {window.windows[0].isOpen &&

                <div onClick={handleClick} value='about' ref={focusWindow} className='container-modal'><About openAbout={props.openAbout} />
                </div>
            }
            {window.windows[1].isOpen &&

                <div className='container-modal-2'>
                    < Portfolio onFocus={() => { console.log('test') }} openPort={props.openPort} />
                </div>
            }
            {window.windows[2].isOpen &&

                <div onClick={handleClick} className='container-modal'>
                    <Experience openExp={props.openExp} />
                </div>
            }
            {window.windows[3].isOpen &&

                <div className='container-modal'>
                    <Contact openContact={props.openContact} />
                </div>
            }

        </div>
    </div>
    );
}

export default Desktop;