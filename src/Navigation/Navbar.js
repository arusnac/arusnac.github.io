import React, { useState } from "react";
import './Navbar.css'
import Menu from './Menu'
import useDate from "./Date";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenHandler = () => {
        if (isOpen === false) {
            setIsOpen(true);
        }
        if (isOpen === true) {
            setIsOpen(false);
        }

        console.log('true')
    }

    let d = useDate();

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-button'>
                    <button className='navbar-button__start' onClick={isOpenHandler}>Start</button>
                    <div className='time'><button className='time-button'>{d.time}</button></div>

                </div>

            </div>
            {isOpen && <Menu />}
        </div >
    );
}

export default Navbar;