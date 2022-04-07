import React, { useState, useContext, createContext, useEffect } from "react";
import './Navbar.css'
import Menu from './Menu'
import useDate from "./Date";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import { MenuContext } from "./MenuContext";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortOpen, setPortOpen] = useState(false);

    const isOpenHandler = () => {
        if (isOpen === false) {
            setIsOpen(true);

        }
        if (isOpen === true) {
            setIsOpen(false);
            console.log(props.closeMenu['close'])
        }

    }

    useEffect(() => {
        setIsOpen(false);
    }, [props.openPortfolio]);

    // if (props.closeMenu['close'] === false) {
    //     setIsOpen(true);
    //     console.log('hello');
    // }

    if (props.closeMenu['close'] === true) {
        setIsOpen(false);
    }



    let d = useDate();

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-button'>
                    <button className='navbar-button__start' onClick={isOpenHandler}>Start</button>

                    <div className='time'>
                        <img className='navbar-image' src={fb} alt='Facebook logo' />
                        <img className='navbar-image' src={insta} alt='Instagram logo' />
                        <button className='time-button'>{d.time}</button>
                    </div>

                </div>

            </div>
            {isOpen && <Menu openPortfolio={() => props.openPortfolio(isOpenHandler)} openAbout={props.openAbout}
                openExp={props.openExp} openContact={props.openContact} />}
        </div >

    );
}

export default Navbar;