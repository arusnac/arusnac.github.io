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
    const [openWindow, setWindowOpen] = useState(false);

    const isOpenHandler = () => {

        if (isOpen === false) {
            setIsOpen(true);

        }
        if (isOpen === true) {
            setIsOpen(false);
            console.log(props.openTab());
        }
    }

    const testF = (event) => {
        console.log('test')
    }

    if (props.openTab() === 'Portfolio') {
        console.log('PORT');
    }


    useEffect(() => {
        if (isOpen) {
            isOpenHandler();
        }
    }, [props.openPortfolio]);

    let d = useDate();

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-button'>
                    <button className='navbar-button__start' onClick={isOpenHandler}>Start</button>
                    {props.closeMenu > 0 && <button>test</button>}
                    <div className='time'>
                        <img className='navbar-image' src={fb} alt='Facebook logo' />
                        <img className='navbar-image' src={insta} alt='Instagram logo' />
                        <button className='time-button'>{d.time}</button>
                    </div>

                </div>

            </div>
            {isOpen && <Menu openTab={testF} onOpenMenu={isOpenHandler} openPortfolio={props.openPortfolio} openAbout={props.openAbout}
                openExp={props.openExp} openContact={props.openContact} />}
        </div >

    );
}

export default Navbar;