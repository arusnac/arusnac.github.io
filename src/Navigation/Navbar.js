import React, { useState, useContext, createContext, useEffect } from "react";
import './Navbar.css'
import Menu from './Menu'
import useDate from "./Date";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import { MenuContext } from "./MenuContext";
import styles from './Tab.module.css'
import emailIcon from '../assets/Portfolio/email_icon.png';
import portfolioIcon from '../assets/Portfolio/portfolio.png';
import experienceIcon from '../assets/Portfolio/experienceIcon.png';
import aboutIcon from '../assets/Portfolio/aboutIcon.png';
import startIcon from '../assets/startIcon.png';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenHandler = (e) => {
        if (isOpen === false) {
            setIsOpen(true);

        }
        if (isOpen === true) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            isOpenHandler();
        }
    }, [props]);

    let d = useDate();

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-button'>
                    <button className={styles.tab_start} style={{ borderStyle: isOpen ? 'inset' : 'outset' }} onClick={isOpenHandler}>
                        <img className={styles.tab_icon} src={startIcon} alt='icon' />Start</button>
                    <div>
                        {props.tab && <button className={styles.tab}>
                            <img className={styles.tab_icon}
                                src={props.tab === 'Contact' ? emailIcon :
                                    props.tab === 'Portfolio' ? portfolioIcon :
                                        props.tab === 'About' ? aboutIcon :
                                            experienceIcon
                                } alt='email icon' />
                            {props.tab}
                        </button>}
                    </div>
                    <div className='time'>
                        <img className='navbar-image' src={fb} alt='Facebook logo' />
                        <img className='navbar-image' src={insta} alt='Instagram logo' />
                        <button className='time-button'>{d.time}</button>
                    </div>

                </div>

            </div>
            {isOpen && <Menu onOpenMenu={isOpenHandler} openPortfolio={props.openPortfolio}
                openAbout={props.openAbout} openExp={props.openExp} openContact={props.openContact} />}
        </div >

    );
}

export default Navbar;