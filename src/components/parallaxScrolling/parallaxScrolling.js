import React from 'react';
import './parallaxScrolling.css';
import PhotoBy from '../photoby/photoby';

const ParallaxScrolling = () => {
  return (
    <div className="parallax">
      <div id="parallax-img" className="parallax-img"></div>
      <div id="clock">h1</div>
      <PhotoBy imgHref="https://unsplash.com/@danesduet10?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
      content="Photo by Daniel Olah on Unsplash"/>
    </div>);
}

export default ParallaxScrolling;
