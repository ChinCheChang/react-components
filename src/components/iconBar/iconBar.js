import React from 'react';
import './iconBar.css';

const IconBar = ({onCalendarChange, calendar}) => {
  const onCalendarIconClick = (e) => {
    if (calendar==='show') {
      onCalendarChange('none');
      e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";      
    } else {
      onCalendarChange('show');
      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  }

  return(
    <div id="icon-bar" className="icon-bar grow-large" onClick={onCalendarIconClick}>
      <i className="far fa-calendar-alt calendarIcon ba"></i>
    </div>
  );
}

export default IconBar;
