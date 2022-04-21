import React from "react";
import Draggable from "react-draggable";
import infoIcon from "../assets/infoIcon.png";
import styles from "./Info.module.css";
import catGif from '../assets/cat.gif';
import { useSelector, useDispatch } from "react-redux";
import { toggleFocus, toggleOpen } from '../Redux/windowSlice';

const Info = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('about'))
    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }


    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>
            <div ref={nodeRef} className='portfolio' style={{ zIndex: window.windows[4].isFocus && 1 }}>
                <div id='handle' className='portfolio-header'
                    style={{ backgroundColor: window.windows[4].isFocus && '#000080' }}>

                    <p className="portfolio-header" style={{ backgroundColor: window.windows[4].isFocus && '#000080' }}>
                        <img className='contact-icon' src={infoIcon} alt='icon' />info.txt
                        <button value='info' onClick={closeWindow} className="portfolio-button">X</button></p>
                </div>
                <div className={styles.info_container}>
                    <p>Welcome!<br /><br />
                        This website was built to simulate the look and feel<br />
                        of a Windows 95 desktop.
                        <br /><br />
                        You can check out my socials with the "desktop icons"<br />
                        or in the tray on the bottom right. Hit the start button<br />
                        to check out more about me :)
                        <br /><br />
                        *Note this is a work in progress, it's buggy and incomplete!</p>
                    <div className={styles.info}>
                        <img src={catGif} alt='cat' />
                    </div>
                </div>
            </div >
        </Draggable>
    )
};

export default Info;