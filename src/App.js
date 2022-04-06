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

  const openContact = () => {
    if (about) {
      openAbout(false);
    }
    if (port) {
      openPort(false);
    }
    if (experience) {
      openExperience(false);
    }
    openContactPage(!contact)
  }

  let closeMenu = {
    close: false
  };

  const openPortfolio = () => {
    if (about) {
      openAbout(false);
    }
    if (contact) {
      openContact(false);
    }
    if (experience) {
      openExperience(false);
    }
    openPort(!port);
    closeMenu = { close: true }
    console.log(closeMenu['close'])
  }

  //Trigger About Me page
  const openAboutMe = () => {
    if (contact) {
      openContact(false);
    }
    if (port) {
      openPort(false);
    }
    if (experience) {
      openExperience(false);
    }
    openAbout(!about);
  }

  const openExp = () => {
    if (about) {
      openAbout(false);
    }
    if (port) {
      openPort(false);
    }
    if (contact) {
      openContact(false);
    }
    openExperience(!experience)
  }

  return (
    <div>
      <Navbar closeMenu={closeMenu} openPortfolio={openPortfolio} openAbout={openAboutMe} openExp={openExp} openContact={openContact} ></Navbar>
      <Desktop port={port} about={about} exp={experience} contact={contact} openAbout={openAboutMe} openExp={openExp} openContact={openContact} openPort={openPortfolio}></Desktop>
    </div>
  );
}

export default App;
