import React, { useState } from "react";
import './Desktop.css'
import gitHub from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import Portfolio from "./Pages/Portfolio";
import eventBus from "./EventBus";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";

const Desktop = (props) => {


    return (<div>
        <div className='container-desktop'>
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
            <div className='container-modal'>
                {props.about && <About openAbout={props.openAbout} />}
                {props.port && <Portfolio openPort={props.openPort} />}
                {props.exp && <Experience openExp={props.openExp} />}
                {props.contact && <Contact openContact={props.openContact} />}
            </div>
        </div>
    </div>
    );
}

export default Desktop;