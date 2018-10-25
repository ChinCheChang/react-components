import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import Toggler from './navbar-toggler/navbar-toggler'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg o-80 shadow-2 navbar-light bg-light" style={{ 'backgroundColor':'#e3f2fd'}}>
      <a className="navbar-brand grow" href="#">
        <FontAwesomeIcon icon="ghost" />
        <span className="ma2">ChinChe</span>
      </a>
      <Toggler />
      <div className="flex-grow flex items-center">
        <a className="f5 link dib black dim mr3 mr4-ns" href="#0">Sign In</a>
        <a className="f5 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20" href="#0">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
