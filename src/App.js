import './App.css';
import Navbar from './Navigation/Navbar'
import Desktop from './Desktop'
import React, { useState } from 'react';
import Portfolio from './Pages/Portfolio';


function App(props) {
  const [port, openPort] = useState(false);
  const [about, openAbout] = useState(false);
  const [experience, openExperience] = useState(false);
  const [contact, openContactPage] = useState(false);
  const [tab, setTab] = useState('')

  const openContact = () => {

    openContactPage(!contact)
    if (tab !== 'Contact') {
      setTab('Contact');
    }
    else {
      setTab('');
    }
  }


  const openPortfolio = () => {
    openPort(!port);
    if (tab !== 'Portfolio') {
      setTab('Portfolio');
    } else {
      setTab('');
    }

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
      <Navbar tab={tab} openPortfolio={openPortfolio} openAbout={openAboutMe} openExp={openExp} openContact={openContact} ></Navbar>
      <Desktop port={port} about={about} exp={experience} contact={contact} openAbout={openAboutMe} openExp={openExp} openContact={openContact} openPort={openPortfolio}></Desktop>
    </div>
  );
}

export default App;
