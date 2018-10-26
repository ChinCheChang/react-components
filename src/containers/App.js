import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './App.css';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import { setViewport } from '../actions';

library.add(faGhost)

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class App extends Component {
  render() {
    const { onResize, viewportState} = this.props;
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
