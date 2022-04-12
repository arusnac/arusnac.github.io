import React from "react";
import Draggable from "react-draggable";
import infoIcon from "../assets/infoIcon.png"
import styles from "./Info.module.css"
import catGif from '../assets/cat.gif'

const Info = (props) => {
    const nodeRef = React.useRef(null);

    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>
            <div ref={nodeRef} className='portfolio'>
                <div id='handle' className='portfolio-header'>

                    <p className="portfolio-header"><img className='contact-icon' src={infoIcon} alt='icon' />info.txt
                        <button onClick={props.openContact} className="portfolio-button">X</button></p>
                </div>
                <div className={styles.info_container}>
                    <p>Welcome!<br /><br />
                        You can check out my socials with the "desktop icons"<br />
                        or in the tray on the bottom right. Hit the start button<br />
                        to check out more about me :)</p>
                    <div className={styles.info}>
                        <img src={catGif} alt='cat' />
                    </div>
                </div>
            </div >
        </Draggable>
    )
};

export default Info;