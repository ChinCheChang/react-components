import React from 'react';
import './coverBackground.css';

const CoverBackground = ({ children, onRouteChange}) => {
  const bgClick = (e) => {
    if (e.target === document.getElementById('CoverBackground')) {
      onRouteChange('main');
    }
  }

  return (
    < div onClick = { bgClick }
    id = "CoverBackground"
    className = "coverBackground" >
    { children }
    </div>
  );
}
export default CoverBackground;
