import React, { useState } from "react";
import './Portfolio.css';
import { send } from 'emailjs-com';
import './Contact.css';
import emailIcon from '../assets/Portfolio/email_icon.png';
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFocus, toggleOpen } from "../Redux/windowSlice";

const Contact = (props) => {
    const nodeRef = React.useRef(null);
    const window = useSelector((state) => state.window.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFocus('contact'))
    }

    const closeWindow = (e) => {
        dispatch(toggleOpen(e.target.value))
    }

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'serviceID',
            'templateID',
            'Me',
            'userID'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <Draggable handle='#handle' nodeRef={nodeRef}>
            <div onClick={handleClick} ref={nodeRef} className='portfolio'>
                <div id='handle' className='portfolio-header'>

                    <p className="portfolio-header"
                        style={{ backgroundColor: window.windows[3].isFocus && '#7d7d7d' }}>
                        <img className='contact-icon' src={emailIcon} alt='icon' />Contact
                        <button onClick={closeWindow} value='contact' className="portfolio-button">X</button></p>
                </div>
                <div className='contact-container'>
                    <p className='contact-content'>Send me an email and I'll get back to you as soon as I can!</p>


                    <form onSubmit={onSubmit}>
                        <div className='contact-content'>
                            <div className='contact-inputs'>
                                <label for='from_name'>Name:</label>
                            </div>
                            <div className='contact-inputs'>
                                <input className='input-style'
                                    size='40'
                                    type='text'
                                    name='from_name'
                                    placeholder='From name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='contact-inputs'>
                                <label for='message'>Message:</label>
                            </div>
                            <div className='contact-inputs'>
                                <textarea className='input-style'
                                    cols='40'
                                    rows='7'
                                    type='text'
                                    name='message'
                                    placeholder='Your message'
                                    value={toSend.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='contact-inputs'>
                                <label for='reply_to'>Your Email:</label>
                            </div>
                            <div className='contact-inputs'>
                                <input className='input-style'
                                    size='40'
                                    type='text'
                                    name='reply_to'
                                    placeholder='Your email'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                />

                            </div>

                        </div >
                        <div className='contact-submit'>
                            <button type='submit' className='button-style'>Submit</button>
                        </div>
                    </form >
                </div>
            </div >
        </Draggable>
    )
};

export default Contact;