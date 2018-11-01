import React from 'react';
import '../calendar.css';

const Days = ({date}) => {
  const weekendOrNot = () => {
    var today  = new Date().getDate();
    if ( today === date ) {
      return <div className="days grow-large today">{date}</div>;
    } else if ( date%7===0 || date%7===6 ) {
      return <div className="days grow-large weekend">{date}</div>;
    } else if (typeof(date) === "string") {
      return <div className="days grow-large dayName">{date}</div>;
    } else {
      return <div className="days grow-large">{date}</div>;
    }
  }

  return(
    <div className="day-container">{weekendOrNot()}</div>
  );
}

export default Days;
