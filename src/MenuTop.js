import React, { Component } from 'react';
import './MenuTop.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuTopBtt from './MenuTopBtt';

class MenuTop extends Component {
  render() {
    return (
      <div className='menuTop'>
        <Router>
          <div>
            <Link to="/AboutMe"><MenuTopBtt name='AboutMe' nameDisp='About Me'></MenuTopBtt></Link>
            <Link to="/Projects"><MenuTopBtt name='Projects' nameDisp='My projects'></MenuTopBtt></Link>
            <Link to="/Contact"><MenuTopBtt name='Contact' nameDisp='Contact me'></MenuTopBtt></Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default MenuTop;