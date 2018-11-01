import React from 'react';
import './photoby.css';

const PhotoBy = ({imgHref, content}) => {
  return(
    <div className="br-pill pl2 pr2" id='photoby'>
      <a href={imgHref}
        style={{color: 'white'}}
        target="_blank"
        rel="noopener noreferrer">
        {content}
      </a>
    </div>
  );
}

export default PhotoBy;
