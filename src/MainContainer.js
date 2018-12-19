import React, { Component } from 'react';
import './MainContainer.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutMe from './main_comp/AboutMe';
import Projects from './main_comp/Projects';
import Contact from './main_comp/Conctact';
import MenuTop from './menues/MenuTop';
import MyStorage from './projects/MyStorage';
import CleanThisMess from './projects/CleanThisMess';
import Calendar from './projects/Calendar';
import CutFiles from './projects/CutFiles';

class MainContainer extends Component {
  render() {
    return (
        <div className='mainContainer'>
          <MenuTop/>
          <div className='dispContent'>
              <Switch>
                <Route path="/AboutMe" exact component={AboutMe} />
                <Route path="/Projects" exact component={Projects} />
                <Route path='/Contact' exact component={Contact} />
                <Route path="/Projects/ms" exact component={MyStorage} />
                <Route path="/Projects/ctm" exact component={CleanThisMess} />
                <Route path='/Projects/cl' exact component={Calendar} />
                <Route path="/Projects/cf" exact component={CutFiles} />
                <Redirect path='/' to='AboutMe' />
              </Switch>
          </div>
        </div>
    );
  }
}
export default MainContainer;