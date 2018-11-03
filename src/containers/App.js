import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from '../components/navbar/navbar';
import ParallaxScrolling from '../components/parallaxScrolling/parallaxScrolling';
import CoverBackground from '../components/coverBackground/coverBackground';
import Footer from '../components/footer/footer';
import IconBar from '../components/iconBar/iconBar';
import SideFixPanel from '../components/sideFixPanel/sideFixPanel';
import Calendar from '../components/calendar/calendar'
import Carousel from '../components/Carousel/Carousel'

import MainContents from './main_contents/main_contents'
import Signin from './signin/signin';
import Signup from './signup/signup';

import { startTime } from '../functions/time';
import { ZIndehandler } from '../functions/zIndexs';

import { setRoute, addClockList, setZIndex, setSignIn, setCalendarShow, setCalendar } from '../actions/actions';



const mapStateToProps = (state) => {
  return {
    route: state.route.route,
    clockList: state.clockList.clockList,
    zIndex: state.zIndex.ZIndexs,
    signin: state.signin.signin,
    calendarShow: state.calendarShow.calendarShow,
    calendar: state.calendar.calendar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere)),
    onAddClockList: (elementName) => dispatch(addClockList(elementName)),
    onZIndexChange: (indexs) => dispatch(setZIndex(indexs)),
    onSignin: (state) => dispatch(setSignIn(state)),
    onCalendarShowChange: (state) => dispatch(setCalendarShow(state)),
    onCalenderChange: (month) => dispatch(setCalendar(month))
  }
}

class App extends Component {
  componentDidMount() {
    const { onTimeChange, onAddClockList } = this.props;
    onAddClockList("clock");
    onAddClockList("timer");
  }

  componentDidUpdate() {
    const {  zIndex, clockList } = this.props;
    startTime(clockList);
    ZIndehandler(zIndex);
  }

  route() {
    const { route, onRouteChange, onSignin, zIndex } = this.props;
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

  calendarShow() {
    const { calendarShow, calendar, onCalenderChange } = this.props;
    if ( calendarShow === "show" ) {
      return (
        <SideFixPanel>
          <Carousel onCalenderChange={onCalenderChange} calendar={calendar}>
            <Calendar year={calendar.calendarYear} month={calendar.calendarMonth } />
          </Carousel>
        </SideFixPanel>
      );
    }
  }

  render() {
    const { onRouteChange, onCalendarShowChange, calendar, calendarShow } = this.props;
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange} />
        <IconBar onCalendarShowChange={onCalendarShowChange} calendar={calendarShow}/>
        {this.calendarShow()}
        {this.route()}
        <ParallaxScrolling/>
        <MainContents>
          <Calendar year={calendar.calendarYear} month={calendar.calendarMonth}/>
        </MainContents>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
