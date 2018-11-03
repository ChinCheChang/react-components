import React from 'react';
import './sideFixPanel.css'

const SideFixPanel = ({children}) => {
  return(
    <div id="SideFixPanel" className="SideFixPanel">
      {children}
    </div>
  );
}

export default SideFixPanel;
