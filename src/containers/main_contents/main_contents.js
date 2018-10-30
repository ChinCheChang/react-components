import React, { Component } from 'react';
import './main_contents.css'

const initialState = {};

class MainContents extends Component{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  openNav = () => {
    document.getElementById("mySidenav").style.width = "175px";
    document.getElementById("main").style.marginLeft = "175px";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "10px";
    document.getElementById("main").style.marginLeft= "0px";
  }

  render() {
    return (
      <div className="container-fluid relative main-content">
        <div id="mySidenav" className="br2 sidenav shadow-5">
          <a >About</a>
          <a >Services</a>
          <a >Clients</a>
          <a >Contact</a>
        </div>
        <div id="main">
          <div className="closeside">
            <a className="shadow-5 closebtn" onClick={this.closeNav}>&times;</a>
          </div>
          <i className="fas fa-chevron-circle-right"></i>
          <span style={{cursor:"pointer"}} onClick={this.openNav}>&#9776; open</span>
        </div>
      </div>
    );
  }

}

export default MainContents;
