import React from 'react';
import './iconBar.css';

const IconBar = ({onCalendarShowChange, calendar}) => {
  const onCalendarIconClick = (e) => {
    if (calendar==='show') {
      onCalendarShowChange('none');
      e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
      onCalendarShowChange('show');
      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  }

  return(
    <div className="icon-bar grow-large" onClick={onCalendarIconClick}>
      <i className="far fa-calendar-alt calendarIcon ba"></i>
    </div>
  );
}

export default IconBar;
