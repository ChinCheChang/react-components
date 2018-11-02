import React from 'react';
import './calendar.css';
import Days from './days/days';
import PhotoBy from '../photoby/photoby';

const Calendar = () => {
  const daysHandeler = () => {
    var date = 1;
    var today = new Date();
    var Maxdays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    var dayRow = [['Mon','Tue','Wed','Thu','Fri','Sat','Sun']];
    var dayCol = [];
    while ( date <= Maxdays ) {
      dayCol.push( date );
      if( date%7 === 0 || date === Maxdays) {
        dayRow.push(dayCol);
        dayCol = [];
      }
      date++;
    }
    return dayRow;
  }

  return(
    <div id="month" className="month shadow-5 row">
      <div className="month-title">November<br/>2018<br/></div>
      {
        daysHandeler().map(( value, index ) => {
          return (
            <div  key={index} className="weekdays">
              {
                value.map(( value, index ) => {
                  return <Days  key={value} date={value}/>
                })
              }
            </div>
          );
        })
      }
      <PhotoBy imgHref="https://unsplash.com/@chrislawton?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
      content="Photo by Chris Lawton on Unsplash"/>
    </div>
  );
}

export default Calendar;
