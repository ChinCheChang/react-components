import React from 'react';
import './footer.css';
import img from './me.JPG';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <img className = "imgme" src = 'https://robohash.org/chinchechang' alt = "Generic placeholder image" />
        Made by ChinChe, Chang
      </div>
    </footer>
  );
}

export default Footer;
