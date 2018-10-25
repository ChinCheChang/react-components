import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';

library.add(faGhost)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
