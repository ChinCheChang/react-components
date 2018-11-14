import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from '../components/navbar/navbar';
import ParallaxScrolling from '../components/parallaxScrolling/parallaxScrolling';
import CoverBackground from '../components/UIs/coverBackground/coverBackground';
import Footer from '../components/footer/footer';
import IconBar from '../components/iconBar/iconBar';
import SideFixPanel from '../components/UIs/sideFixPanel/sideFixPanel';
import Calendar from '../components/calendar/calendar';
import Carousel from '../components/UIs/Carousel/Carousel';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';

import MainContents from '../components/main_contents/main_contents'
import Signin from '../components/signin/signin';
import Signup from '../components/signup/signup';

import { startTime } from '../functions/time';
import { ZIndehandler } from '../functions/zIndexs';

import { setRoute, addClockList, setZIndex, setSignIn, setCalendarShow, setCalendar } from '../actions/actions';
import { setSearchField,requestRobots } from '../actions/robotsActions';



const mapStateToProps = (state) => {
  return {
    route: state.route.route,
    clockList: state.clockList.clockList,
    zIndex: state.zIndex.ZIndexs,
    signin: state.signin.signin,
    calendarShow: state.calendarShow.calendarShow,
    calendar: state.calendar.calendar,
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (toWhere) => dispatch(setRoute(toWhere)),
    onAddClockList: (elementName) => dispatch(addClockList(elementName)),
    onZIndexChange: (indexs) => dispatch(setZIndex(indexs)),
    onSignin: (state) => dispatch(setSignIn(state)),
    onCalendarShowChange: (state) => dispatch(setCalendarShow(state)),
    onCalenderChange: (month) => dispatch(setCalendar(month)),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    const { onAddClockList, onRequestRobots } = this.props;
    onRequestRobots();
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
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange} />
        <IconBar onCalendarShowChange={onCalendarShowChange} calendar={calendarShow}/>
        {this.calendarShow()}
        {this.route()}
        <ParallaxScrolling/>
        <MainContents>
          <div className="container main_contents_panel">
            <Calendar year={calendar.calendarYear} month={calendar.calendarMonth}/>
          </div>
          <hr/>
          <SearchBox searchChange={onSearchChange}/>
          <div className="container main_contents_panel">
            <CardList robots={filteredRobots}/>
          </div>
        </MainContents>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
