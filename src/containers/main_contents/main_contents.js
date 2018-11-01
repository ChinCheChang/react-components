import React, { Component } from 'react';
import './main_contents.css';
import Sidenav from '../../components/sidenav/sidenav';
import Calendar from '../../components/calendar/calendar';

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
      <div className="relative main_contents">
        <Sidenav sidenav={this.state.sidenav} onIconClick={this.onIconClick}/>
        <Calendar />
      </div>
    );
  }
}

export default MainContents;
