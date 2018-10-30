import React, { Component } from 'react';
import './main_contents.css'

const initialState = {
  sidenav: "right"
};

class MainContents extends Component{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  openNav = () => {

  }

  Sidenav = () => {
    console.log(this.state.sidenav);
    if (this.state.sidenav === 'right') {
      document.getElementById("mySidenav").style.width = "175px";
      document.getElementById("main").style.marginLeft = "175px";
      document.getElementsByClassName("closebtn")[0].classList.add("revers-rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("rotate");
      this.setState({sidenav: "left"})
    } else {
      document.getElementById("mySidenav").style.width = "5px";
      document.getElementById("main").style.marginLeft= "5px";
      document.getElementsByClassName("closebtn")[0].classList.add("rotate");
      document.getElementsByClassName("closebtn")[0].classList.remove("revers-rotate");
      this.setState({sidenav: "right"})
    }
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
            <div className="closeContainer br--right shadow-5">
              <i className="fas fa-angle-left rotate closebtn" onClick={this.Sidenav}></i>
            </div>
          </div>
        </div>
        <div className="container-fluid">

        </div>
      </div>
    );
  }

}

export default MainContents;
