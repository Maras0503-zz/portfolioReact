import React, { Component } from 'react';
import './MainContainer.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Contact from './Conctact.js';
import MenuTop from './MenuTop';

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <div className='mainContainer'>
          <MenuTop/>
          <div className='dispContent'>
              <Switch>
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/Projects" component={Projects} />
                <Route path='/Contact' component={Contact} />
                <Redirect path='/' to='AboutMe'/>
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default MainContainer;