import React, { Component } from 'react';
import Sidenav from '../../components/sidenav/sidenav';


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
      <div className="container-fluid">
        <Sidenav sidenav={this.state.sidenav} onIconClick={this.onIconClick}/>        
      </div>
    );
  }

}

export default MainContents;
