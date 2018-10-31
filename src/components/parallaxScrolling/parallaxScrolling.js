import React from 'react';
import './parallaxScrolling.css';

const ParallaxScrolling = () => {
  return (
    <div className="parallax">
      <div className="parallax-img"></div>      
      <div id="clock">h1</div>
      <div className="br-pill pl2 pr2" id='photoby'>
        <a href='https://unsplash.com/@danesduet10?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge'
          style={{color: 'white'}}
          target="_blank"
          rel="noopener noreferrer">
          Photo by Daniel Olah on Unsplash
        </a>
      </div>
    </div>);
}


export default ParallaxScrolling;
