import React from 'react';
import './coverBackground.css';

const CoverBackground = (props) => {
  return(
    <div onClick={(e) => e.target === document.getElementById('myModal')
      ? props.onRouteChange('main')
      : ''} id="CoverBackground" className="coverBackground">
      {props.children}
    </div>
  );
}
export default CoverBackground;
