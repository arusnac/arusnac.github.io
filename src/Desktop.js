import React, { useState, useRef } from "react";
import './Desktop.css'
import gitHub from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Info from './Pages/Info';
import Text from './assets/text.png'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFocus, toggleOpen } from './Redux/windowSlice';
import NewAbout from "./Pages/NewAbout";


const Desktop = (props) => {
    const window = useSelector((state) => state.window.value);
    const windowStates = useSelector((state) => state.window);
    const focusWindow = useRef(null);
    const dispatch = useDispatch();

    const updateWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
        dispatch(toggleFocus(e.target.value))
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

            <div className='desktop-item-info'>
                <img className="desktop-img-info" src={Text} alt='LinkedIn'></img>
                <div>
                    <button className='desktop_link' onClick={updateWindow} value='info'>info.txt</button>
                </div>
            </div>

        </div>

        <div className='container-desktop'>

            {
                window.windows[4].isOpen && <Info />
            }

            {
                window.windows[0].isOpen &&
                <About />
            }
            {
                window.windows[1].isOpen &&
                < Portfolio />
            }
            {window.windows[2].isOpen &&
                <Experience openExp={props.openExp} />
            }
            {window.windows[3].isOpen &&
                <Contact openContact={props.openContact} />
            }

        </div>
    </div >
    );
}

export default Desktop;