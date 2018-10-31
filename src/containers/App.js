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
import { setRoute, setTime, setZIndex, setSignIn } from '../actions/actions';
import { startTime } from '../functions/time';
import {ZIndehandler } from '../functions/zIndexs';


const mapStateToProps = (state) => {
  return {
    route: state.route.route,
    now: state.time.now,
    zIndex: state.zIndex.ZIndexs,
    signin: state.signin.signin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere)),
    onTimeChange: (today) => dispatch(setTime(today)),
    onZIndexChange: (indexs) => dispatch(setZIndex(indexs)),
    onSignin: (state) => dispatch(setSignIn(state))
  }
}

class App extends Component {
  componentDidMount() {
    const { onTimeChange, zIndex } = this.props;
    //startTime(onTimeChange);
    ZIndehandler(zIndex);
  }

  render() {
    const { route, onRouteChange, now, onSignin } = this.props;
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
                    <Signin onSignin={onSignin} onRouteChange={onRouteChange}/>
                  </CoverBackground>
                );
              case "signup":
                return  (
                  <CoverBackground onRouteChange={onRouteChange}>
                    <Signup onSignin={onSignin} onRouteChange={onRouteChange}/>
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
