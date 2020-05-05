import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import Menu from '../Menu/Menu';

import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
