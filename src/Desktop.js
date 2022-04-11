import React, { useState } from "react";
import './Desktop.css'
import gitHub from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import Portfolio from "./Pages/Portfolio";
import eventBus from "./EventBus";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Draggable from 'react-draggable';

const Desktop = (props) => {


    return (<div>
        <div className="container_icon">
            <div className='desktop-item'>
                <img className="desktop-img" src={gitHub} alt='GitHub'></img>
                <div>
                    <a href="https://github.com/arusnac?tab=repositories">GitHub</a>
                </div>
            </div>

            <div className='desktop-item'>
                <img className="desktop-img" src={linkedIn} alt='LinkedIn'></img>
                <div>
                    <a href="https://www.linkedin.com/in/arusnac/">LinkedIn</a>
                </div>
            </div>

        </div>
        <div className='container-desktop'>
            {props.about &&

                <div className='container-modal'><About openAbout={props.openAbout} />
                </div>
            }
            {props.port &&
                <Draggable>
                    <div className='container-modal-2'>
                        <Portfolio openPort={props.openPort} />
                    </div>
                </Draggable>}
            {props.exp &&
                <Draggable>
                    <div className='container-modal'>
                        <Experience openExp={props.openExp} />
                    </div>
                </Draggable>}
            {props.contact &&
                <Draggable>
                    <div className='container-modal'>
                        <Contact openContact={props.openContact} />
                    </div>
                </Draggable>}

        </div>
    </div>
    );
}

export default Desktop;