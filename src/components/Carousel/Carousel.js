import React from 'react';
import './Carousel.css'

const Carousel = ({children}) => {
  var step = 0;
  var stepWidth = 105;

  const onClick = (step) => {
    var elements = document.getElementsByClassName('month');
    for (var i = 0; i < elements.length; i++ ) {
      elements[i].style.transform = `translateX(${step}%)`;
    }
  }

  const onRightClick = () => {
    step = step - stepWidth;
    onClick(step)
  }

  const onleftClick = () => {
    step = step + stepWidth;
    onClick(step)
  }

  return(
    <div id="carousel" className="carousel-container">
      <div id="angle" className="angle grow-large left-icon" onClick={onleftClick}>
        <i className="fas fa-angle-left angle-icon shadow-5" />
      </div>
      {children}
      <div id="angle" className="angle grow-large right-icon" onClick={onRightClick}>
        <i className="fas fa-angle-right angle-icon shadow-5" />
      </div>
    </div>
  );
}

export default Carousel;
