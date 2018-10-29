import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';

const Navbar = ({onRouteChange}) => {
  const onSignClick = (text) => {
    var toggler = document.getElementsByClassName('collapse')[0];
    toggler.classList.remove("show");
    onRouteChange(text);
  }
  return (
    <nav className="justify-content-between navbar fixed-top navbar-expand-lg o-80 shadow-2 navbar-light bg-light" style={{ 'backgroundColor':'#e3f2fd'}}>
      <a onClick={() => onRouteChange('main')} className="navbar-brand grow" href="#">
        <FontAwesomeIcon icon="ghost" />
        <span className="ma2">ChinChe</span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Demo</a>
          </li>
          <li onClick={() => onSignClick('signin')} className="nav-item mobile">
            <a className="nav-link" href="#">Sign In</a>
          </li>
          <li onClick={() => onSignClick('signup')} className="nav-item mobile">
            <a className="nav-link" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
      <div className="items-center normalviewport">
        <a onClick={() => onRouteChange('signin')} className="f5 link dib black dim mr3 mr4-ns" href="#0">Sign In</a>
        <a onClick={() => onRouteChange('signup')} className="f5 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20" href="#0">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
