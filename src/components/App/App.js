import React, {Component} from 'react';
import './App.css';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
