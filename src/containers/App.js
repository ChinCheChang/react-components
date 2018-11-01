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
import { setRoute, addClockList, setZIndex, setSignIn } from '../actions/actions';
import { startTime } from '../functions/time';
import { ZIndehandler } from '../functions/zIndexs';
import Calendar from '../components/calendar/calendar'



const mapStateToProps = (state) => {
  return {
    route: state.route.route,
    clockList: state.clockList.clockList,
    zIndex: state.zIndex.ZIndexs,
    signin: state.signin.signin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere)),
    onAddClockList: (elementName) => dispatch(addClockList(elementName)),
    onZIndexChange: (indexs) => dispatch(setZIndex(indexs)),
    onSignin: (state) => dispatch(setSignIn(state))
  }
}

class App extends Component {
  componentDidMount() {
    const { onTimeChange, zIndex, onAddClockList, } = this.props;
    onAddClockList("clock");
    onAddClockList("timer");
    ZIndehandler(zIndex);
  }

  componentDidUpdate() {
    const { clockList } = this.props;
    startTime(clockList);
  }

  route() {
    const { route, onRouteChange, onSignin, zIndex  } = this.props;
    switch (route) {
      case "signin":
        return (
          <CoverBackground onRouteChange={onRouteChange}>
            <Signin onSignin={onSignin} onRouteChange={onRouteChange} zIndex={zIndex}/>
          </CoverBackground>
        );
      case "signup":
        return  (
          <CoverBackground onRouteChange={onRouteChange}>
            <Signup onSignin={onSignin} onRouteChange={onRouteChange} zIndex={zIndex}/>
          </CoverBackground>
        );
      default:
        break;
    }
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange} />
        <IconBar />
        {this.route()}
        <ParallaxScrolling/>
        <MainContents>
          <Calendar/>
        </MainContents>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
