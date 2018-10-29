import React from 'react';
import './parallaxScrolling.css';

const ParallaxScrolling = () => {
  return (
    <div className="parallax">
      <div className="parallax-img"></div>
      <div id="clock">h1</div>
      <a href='https://unsplash.com/@danesduet10?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge'
         id='photoby'
         style={{color: 'white'}}
         target="_blank">
         Photo by Daniel Olah on Unsplash
      </a>
    </div>
  );
}


export default ParallaxScrolling;
