import React from "react";
import './Desktop.css'
import gitHub from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import Portfolio from "./Pages/Portfolio";

const Desktop = () => {
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
            <div className='container-modal'><Portfolio /></div>
        </div>
    </div>
    );
}

export default Desktop;