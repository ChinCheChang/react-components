import React from 'react';
import './calendar.css';
import Days from './days/days';
import PhotoBy from '../photoby/photoby';

const Calendar = ({year ,month }) => {


  var months = ['January ','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var setDate = new Date(year, month - 1);
  var date = 2 - setDate.getDay();

  const daysHandeler = () => {
    var Maxdays = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate();
    var dayRow = [week];
    var dayCol = [];
    while ( date <= Maxdays ) {
      dayCol.push( date );
      if( dayCol.length%7 === 0 || date === Maxdays) {
        dayRow.push(dayCol);
        dayCol = [];
      }
      date++;
    }
    return dayRow;
  }

  return(
    <div id="calendar" className="calendar shadow-5">
      <div className="month-title">{months[month - 1]}<br/>{setDate.getFullYear()}<br/></div>
      {
        daysHandeler().map(( value, index ) => {
          return (
            <div  key={index} className="weekdays">
              {
                value.map(( value, index ) => {
                  return <Days  key={value} date={value} month={month} year={year} index={index}/>
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
