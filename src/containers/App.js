import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './App.css';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import { setRoute } from '../actions';

library.add(faGhost)

const mapStateToProps = (state) => {
  return {
    route: state.route.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere))
  }
}

class App extends Component {
  render() {
    const { route, onRouteChange } = this.props;
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {/* <Carousel/> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
