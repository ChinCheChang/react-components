import React from 'react';
import './sidenav.css';

const Sidenav = ({onIconClick, sidenav}) => {
  const retateIcon = () => {
    if (sidenav === 'right') {
      document.getElementById("mySidenav").style.width = "175px";
      document.getElementById("main").style.marginLeft = "175px";
      document.getElementsByClassName("closebtn")[0].classList.add("revers-rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("rotate");
      onIconClick("left");
    } else {
      document.getElementById("mySidenav").style.width = "5px";
      document.getElementById("main").style.marginLeft = "5px";
      document.getElementsByClassName("closebtn")[0].classList.add("rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("revers-rotate");
      onIconClick("right");
    }
  }

  return (<div className="container-fluid relative main-content">
    <div id="mySidenav" className="br2 sidenav shadow-5">
      <a >About</a>
      <a >Services</a>
      <a >Clients</a>
      <a >Contact</a>
    </div>
    <div id="main">
      <div className="closeside">
        <div className="closeContainer br--right shadow-5">
          <i className="fas fa-angle-left rotate closebtn" onClick={retateIcon}></i>
        </div>
      </div>
    </div>
  </div>);
}

export default Sidenav;
