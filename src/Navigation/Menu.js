import './Menu.css'
import eventBus from '../EventBus';
import { MenuContext } from "./MenuContext";
import { createContext, useState, useContext } from 'react';
import emailIcon from '../assets/Portfolio/email_icon.png';
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import startIcon from '../assets/startIcon.png';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../features/windowSlice';

const Menu = (props) => {
    const dispatch = useDispatch();

    const updateWindow = (e) => {

        dispatch(changeStatus({ window: { [e.target.value]: { isOpen: true, isFocus: false } } }))
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
                    onClick={props.openExp}
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
                    onClick={props.openContact}
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