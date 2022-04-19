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

            <Info />

            {window.windows[0].isOpen &&

                // <div value='about' className='container-modal'
                //     style={{ zIndex: window.windows[0].isFocus && 1 }}>
                <About openAbout={props.openAbout} />
                // </div>
            }
            {window.windows[1].isOpen &&

                // <div className='container-modal-2'
                //     style={{ zIndex: window.windows[1].isFocus && 1 }}>
                < Portfolio openPort={props.openPort} />
                // </div>
            }
            {window.windows[2].isOpen &&

                // <div className='container-modal'
                //     style={{ zIndex: window.windows[2].isFocus && 1 }}>
                <Experience openExp={props.openExp} />
                // </div>
            }
            {window.windows[3].isOpen &&

                // <div className='container-modal'>
                <Contact openContact={props.openContact} />
                // </div>
            }

        </div>
    </div>
    );
}

export default Desktop;