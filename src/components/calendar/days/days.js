import React from 'react';
import '../calendar.css';

const Days = ({date, month, year, index}) => {
  const weekendOrNot = () => {
    var today = new Date();
    if (today.getFullYear() === year && today.getMonth() + 1 === month && today.getDate() === date ) {
      return <div className="days grow-large today">{date}</div>;
    } else if ( index===5 || index===6 ) {
      return <div className="days grow-large weekend">{date}</div>;
    } else if (typeof(date) === "string") {
      return <div className="days grow-large dayName">{date}</div>;
    } else if (date < 1){
      return <div className="days grow-large emptyDay">{date}</div>;
    } else {
      return <div className="days grow-large">{date}</div>;
    }
  }

  return(
    <div className="day-container">{weekendOrNot()}</div>
  );
}

export default Days;
