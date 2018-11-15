import React, { Component } from 'react';
import './main_contents.css';
import Sidenav from '../../components/sidenav/sidenav';
import { connect } from 'react-redux';
import {  } from '../../actions/actions';


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

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
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContents);
