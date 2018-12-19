import React, { Component } from 'react';
import './App.scss';
import MainContainer from './MainContainer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainContainer></MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
