import React from 'react';

const Toggler = () => {
  return (
    <div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Demo</a>
          </li>
          {
            (() => {
              console.log(window.visualViewport.width);
              if(window.visualViewport.width < 992 ) return (
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign In</a>
                </li>
              )
            })()
          }
        </ul>
      </div>
    </div>
  )
}

export default Toggler
