import React, { useState } from "react";
import './Navbar.css'
import Menu from './Menu'
import useDate from "./Date";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortOpen, setPortOpen] = useState(false);


    const isOpenHandler = () => {
        if (isOpen === false) {
            setIsOpen(true);
            console.log(props.closeMenu['close'])
        }
        if (isOpen === true) {
            setIsOpen(false);
            console.log(props.closeMenu['close'])
        }

    }

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
            {isOpen && <Menu openPortfolio={props.openPortfolio} openAbout={props.openAbout}
                openExp={props.openExp} openContact={props.openContact} />}
        </div >
    );
}

export default Navbar;