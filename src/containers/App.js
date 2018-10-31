import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from '../components/navbar/navbar';
import ParallaxScrolling from '../components/parallaxScrolling/parallaxScrolling';
import CoverBackground from '../components/coverBackground/coverBackground';
import Footer from '../components/footer/footer';
import IconBar from '../components/iconBar/iconBar';
import Signin from './signin/signin';
import Signup from './signup/signup';
import MainContents from './main_contents/main_contents'
import { setRoute, setTime } from '../actions/actions';
import { time2String, checkTime } from '../functions/time';

const mapStateToProps = (state) => {
  return {
    route: state.route.route,
    now: state.time.now
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere)),
    onTimeChange: (today) => dispatch(setTime(today))
  }
}

class App extends Component {
  componentDidMount() {
    const { onTimeChange } = this.props;
    var clock = document.getElementById('clock');

    const startTime = () => {
      var today = new Date();
      onTimeChange(today);
      clock.innerHTML = time2String(today);
      setTimeout(startTime, 500)
    }
    startTime();
  }

  render() {
    const { route, onRouteChange, now } = this.props;
    return (
      <div className="App">
        <Navbar now={now} onRouteChange={onRouteChange}/>
        <IconBar />
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
