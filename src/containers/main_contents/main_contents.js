import React, { Component } from 'react';
import './main_contents.css';
import Sidenav from '../../components/sidenav/sidenav';
import IconBar from '../../components/iconBar/iconBar';

const initialState = {
  sidenav: "right"
};

class MainContents extends Component{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onIconClick = (state) => {
    this.setState({sidenav: state})
  }

  render() {
    return (
      <div className="container-fluid relative main_contents">
        <Sidenav sidenav={this.state.sidenav} onIconClick={this.onIconClick}/>
        <IconBar />
      </div>
    );
  }

}

export default MainContents;
