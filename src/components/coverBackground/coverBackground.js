import React from 'react';
import './coverBackground.css';

const CoverBackground = (props) => {
  console.log(props);

  return(
    <div onClick={(e) => e.target === document.getElementById('myModal')
      ? props.onRouteChange('main')
      : ''} id="myModal" className="coverBackground">
      {props.children}
    </div>
  );
}
export default CoverBackground;
