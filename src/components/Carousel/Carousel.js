import React from 'react';
import './Carousel.css'

const Carousel = ({children, onCalenderChange, calendar}) => {

  const onClickLeft = () => {
    if (calendar.calendarMonth === 1 ) {
      onCalenderChange({
        calendarYear: calendar.calendarYear -1,
        calendarMonth: 12
      })
    } else {
      onCalenderChange({
        calendarYear: calendar.calendarYear,
        calendarMonth: calendar.calendarMonth - 1
      })
    }
  }

  const onClickRight = () => {
    if (calendar.calendarMonth === 12) {
      onCalenderChange({
        calendarYear: calendar.calendarYear + 1,
        calendarMonth: 1
      })
    } else {
      onCalenderChange({
        calendarYear: calendar.calendarYear,
        calendarMonth: calendar.calendarMonth + 1
      })
    }
  }

  return(
    <div id="carousel" className="carousel-container carousel">
      <div id="angle" className="angle grow-large left-icon" onClick={onClickLeft}>
        <i className="fas fa-angle-left angle-icon shadow-5 angle" />
      </div>
      <div className="carousel-content">
        {children}
      </div>
      <div id="angle" className="angle grow-large right-icon" onClick={onClickRight}>
        <i className="fas fa-angle-right angle-icon shadow-5 angle" />
      </div>
    </div>
  );
}

export default Carousel;
