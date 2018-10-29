import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './App.css';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import ParallaxScrolling from '../components/parallaxScrolling/parallaxScrolling';
import Signin from './signin/signin';
import Signup from './signup/signup';
import { setRoute } from '../actions/routeActions';

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
  componentDidMount() {
    const startTime = () => {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      console.log(today);
      document.getElementById('clock').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
    }
    const checkTime = (i) => {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    startTime();
  }

  render() {
    const { route, onRouteChange } = this.props;
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {
          (() => {
            switch (route) {
              case "signin":
                return <Signin onRouteChange={onRouteChange}/>;
              case "signup":
                return <Signup onRouteChange={onRouteChange}/>;
              default:
                break;
            }
          })()
        }
      <ParallaxScrolling />
      {/* <Carousel/> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
