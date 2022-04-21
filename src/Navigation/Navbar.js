import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css'
import Menu from './Menu'
import useDate from "./Date";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import styles from './Tab.module.css'
import emailIcon from '../assets/Portfolio/email_icon.png';
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import startIcon from '../assets/startIcon.png';
import { toggleFocus, toggleMenu } from '../Redux/windowSlice';

const Navbar = (props) => {
    const dispatch = useDispatch();

    const window = useSelector((state) => state.window.value);
    const isOpenHandler = () => {
        dispatch(toggleMenu())
    }

    const handleTabClick = (e) => {
        dispatch(toggleFocus(e.target.value))
    }

    // const isOpenHandler = (e) => {
    //     if (isOpen === false) {
    //         setIsOpen(true);

    //     }
    //     if (isOpen === true) {
    //         setIsOpen(false);
    //     }
    // }


    let d = useDate();

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-button'>
                    <button className={styles.tab_start} style={{ borderStyle: window.navbar[0].isOpen ? 'inset' : 'outset' }} onClick={isOpenHandler}>
                        <img className={styles.tab_icon} src={startIcon} alt='icon' />Start</button>
                    <div>{window.windows.map(tabs => (tabs.isOpen &&
                        <button className={styles.tab}
                            value={tabs.id}
                            onClick={handleTabClick}
                            style={{ borderStyle: tabs.isFocus ? 'inset' : 'outset' }}>
                            <img className={styles.tab_icon}
                                src={tabs.id === 'contact' ? emailIcon :
                                    tabs.id === 'portfolio' ? portfolioIcon :
                                        tabs.id === 'about' ? aboutIcon :
                                            experienceIcon
                                } alt={tabs.id} />{tabs.id}</button>))}
                        {/* {window.windows[0].isOpen && <button className={styles.tab}>
                            <img className={styles.tab_icon}
                                src={props.tab === 'Contact' ? emailIcon :
                                    props.tab === 'Portfolio' ? portfolioIcon :
                                        props.tab === 'About' ? aboutIcon :
                                            experienceIcon
                                } alt='email icon' />
                            {window.windows[0].id}
                            </button>}*/}
                    </div>
                    <div className='time'>
                        <a href='https://www.facebook.com/arusnac' target="_blank" rel="noreferrer noopener">
                            <img className={styles.tab_icon} src={fb} alt='Facebook logo' />
                        </a>
                        <a href='https://www.facebook.com/arusnac' target="_blank" rel="noreferrer noopener">
                            <img className={styles.tab_icon} src={insta} alt='Instagram logo' />
                        </a>
                        <button className='time-button'>{d.time}</button>
                    </div>

                </div>

            </div>
            {
                window.navbar[0].isOpen && <Menu onOpenMenu={isOpenHandler} openPortfolio={props.openPortfolio}
                    openAbout={props.openAbout} openExp={props.openExp} openContact={props.openContact} />
            }
        </div >

    );
}

export default Navbar;