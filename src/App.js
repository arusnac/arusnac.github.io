import './App.css';
import Navbar from './Navigation/Navbar'
import Desktop from './Desktop'
import React, { useState } from 'react';
import Portfolio from './Pages/Portfolio';

let startingState = [{ element: 'Portfolio', isFocus: false, isOpen: false },
{ element: 'About', isFocus: false, isOpen: false },
{ element: 'Experience', isFocus: false, isOpen: false },
{ element: 'Contact', isFocus: false, isOpen: false }]

function App(props) {
  const [port, openPort] = useState(false);
  const [about, openAbout] = useState(false);
  const [experience, openExperience] = useState(false);
  const [contact, openContactPage] = useState(false);
  const [tab, setTab] = useState('')
  const [windowStatus, setWindowStatus] = useState(startingState);

  const openContact = (status) => {
    openContactPage(!contact)
    if (tab !== 'Contact') {
      setTab('Contact');

      console.log(status)
    }
  }



  const openPortfolio = (status) => {
    openPort(!port);
    if (tab !== 'Portfolio') {
      setTab('Portfolio');

      setWindowStatus(startingState[0].isOpen = true)
      console.log(startingState)
    }
  }


  const focusPort = () => {
    setWindowStatus(startingState[0].isFocus = true);
    console.log(startingState);
  }

  //Trigger About Me page
  const openAboutMe = () => {
    openAbout(!about);
    if (tab !== 'About') {
      setTab('About');
    }
    else {
      setTab('');
    }
  }

  const openExp = () => {

    openExperience(!experience)
    if (tab !== 'Experience') {
      setTab('Experience');
    }
    else {
      setTab('');
    }
  }


  return (
    <div>
      <Navbar tab={tab} focusPort={focusPort} openPortfolio={openPortfolio} openAbout={openAboutMe} openExp={openExp} openContact={openContact} ></Navbar>
      <Desktop port={port} about={about} exp={experience} contact={contact} openAbout={openAboutMe} openExp={openExp} openContact={openContact} openPort={openPortfolio}></Desktop>
    </div>
  );
}

export default App;
