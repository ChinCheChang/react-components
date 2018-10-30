import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from '../components/navbar/navbar';
import ParallaxScrolling from '../components/parallaxScrolling/parallaxScrolling';
import CoverBackground from '../components/coverBackground/coverBackground';
import Footer from '../components/footer/footer';
import Signin from './signin/signin';
import Signup from './signup/signup';
import MainContents from './main_contents/main_contents'
import { setRoute } from '../actions/routeActions';

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
    //where to add clock
    var clocklist = document.getElementById('clock');
    const startTime = () => {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      clocklist.innerHTML =
      h + ":" + m + ":" + s;
      setTimeout(startTime, 500)
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
                return (
                  <CoverBackground onRouteChange={onRouteChange}>
                    <Signin onRouteChange={onRouteChange}/>
                  </CoverBackground>
                );
              case "signup":
                return  (
                  <CoverBackground onRouteChange={onRouteChange}>
                    <Signup onRouteChange={onRouteChange}/>
                  </CoverBackground>
                );
              default:
                break;
            }
          })()
        }
      <ParallaxScrolling />
      <MainContents />
      <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
