import './Menu.css'
import eventBus from '../EventBus';
import { MenuContext } from "./MenuContext";
import { createContext, useState, useContext } from 'react';
import emailIcon from '../assets/Portfolio/email_icon.png';
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import startIcon from '../assets/startIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFocus, toggleOpen } from '../Redux/windowSlice';

const Menu = (props) => {
    const dispatch = useDispatch();
    const windows = useSelector((state) => state.window.value)

    const updateWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
        dispatch(toggleFocus(e.target.value))
    }

    return (

        <div className="menu">
            <div className='menuInner'>

                <button
                    onClick={updateWindow}
                    value='portfolio'
                    className='menu-items'>
                    <img
                        className='contact-icon'
                        src={portfolioIcon} alt='icon' />
                    &nbsp; Portfolio</button>
                <button
                    onClick={updateWindow}
                    value='experience'
                    className='menu-items'>
                    <img
                        className='contact-icon'
                        src={experienceIcon} alt='icon' />
                    &nbsp; Experience</button>

                <button
                    onClick={updateWindow}
                    value='about'
                    className='menu-items sec-last-item'>
                    <img
                        className='contact-icon'
                        src={aboutIcon} alt='icon' />
                    &nbsp; About
                </button>
                <button
                    onClick={updateWindow}
                    value='contact'
                    className='menu-items last-item'>
                    <img
                        className='contact-icon'
                        src={emailIcon} alt='icon' />
                    &nbsp; Contact</button>

            </div>

        </div >

    );
}

export default Menu;