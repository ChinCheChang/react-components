import React from 'react';
import './sidenav.css';

const Sidenav = ({onIconClick, sidenav}) => {
  const retateIcon = () => {
    if (sidenav === 'right') {
      document.getElementById("mySidenav").style.width = "9rem";
      document.getElementById("main").style.marginLeft = "8.7rem";
      document.getElementsByClassName("closebtn")[0].classList.add("revers-rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("rotate");
      onIconClick("left");
    } else {
      document.getElementById("mySidenav").style.width = "0.5rem";
      document.getElementById("main").style.marginLeft = "0.3rem";
      document.getElementsByClassName("closebtn")[0].classList.add("rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("revers-rotate");
      onIconClick("right");
    }
  }

  return (
  <div id="Sidenav" className="h-100 sidenav-container Sidenav">
    <div id="mySidenav" className="br2 sidenav shadow-5">
      <a className="grow-large">About</a>
      <a className="grow-large">gallery</a>
    </div>
    <div id="main" className="br--right shadow-5 bg-white closeContainer">
      <i className="fas fa-angle-left rotate closebtn " onClick={retateIcon}></i>
    </div>
  </div>);
}

export default Sidenav;
