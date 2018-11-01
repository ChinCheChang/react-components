import React from 'react';
import './iconBar.css';

const IconBar = ({onCalendarChange, calendar}) => {
  const onCalendarIconClick = (e) => {
    if (calendar==='show') {
      onCalendarChange('none');
      e.target.style.color = "rgba(0, 0, 0, 1)";
    } else {
      onCalendarChange('show');
      e.target.style.color = "rgba(65, 82, 0, 1)";      
    }
  }

  return(
    <div id="icon-bar" className="icon-bar grow-large" onClick={onCalendarIconClick}>
      <i className="far fa-calendar-alt calendarIcon ba"></i>
    </div>
  );
}

export default IconBar;
