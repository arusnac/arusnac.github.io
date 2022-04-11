import './Menu.css'
import eventBus from '../EventBus';
import { MenuContext } from "./MenuContext";
import { createContext, useState, useContext } from 'react';
import emailIcon from '../assets/Portfolio/email_icon.png';
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import startIcon from '../assets/startIcon.png';


const Menu = (props) => {

    return (

        <div className="menu">
            <div className='menuInner'>

                <button onClick={props.openPortfolio} value='portfolio' className='menu-items'>
                    <img className='contact-icon' src={portfolioIcon} alt='icon' />
                    &nbsp; Portfolio</button>
                <button onClick={props.openExp} value='experience' className='menu-items'>
                    <img className='contact-icon' src={experienceIcon} alt='icon' />
                    &nbsp; Experience</button>

                <button onClick={props.openAbout} className='menu-items sec-last-item'>
                    <img className='contact-icon' src={aboutIcon} alt='icon' />&nbsp; About
                </button>
                <button onClick={props.openContact} className='menu-items last-item'>
                    <img className='contact-icon' src={emailIcon} alt='icon' />
                    &nbsp; Contact</button>

            </div>

        </div >

    );
}

export default Menu;