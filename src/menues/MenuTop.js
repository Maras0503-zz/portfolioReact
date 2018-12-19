import React, { Component } from 'react';
import './MenuTop.scss';
import MenuTopBtt from './MenuTopBtt';

class MenuTop extends Component {
  render() {
    return (
      <div className='menuTop'>
        <MenuTopBtt name='AboutMe' nameDisp='About Me' icon='person'></MenuTopBtt>
        <MenuTopBtt name='Projects' nameDisp='My projects' icon='project'></MenuTopBtt>
        <MenuTopBtt name='Contact' nameDisp='Contact me' icon='contact'></MenuTopBtt>
      </div>
    );
  }
}

export default MenuTop;