import React, { Component } from 'react';
import './MenuTop.scss';
import ProjectsMenuBtt from './ProjectsMenuBtt';

class MenuTop extends Component {
  render() {
    return (
      <div className='projectsMenu'>
        <ProjectsMenuBtt name='ms' nameDisp='MyStorage' icon='ms'></ProjectsMenuBtt>
        <ProjectsMenuBtt name='ctm' nameDisp='CleanMess' icon='ctm'></ProjectsMenuBtt>
        <ProjectsMenuBtt name='cl' nameDisp='Calendar' icon='cl'></ProjectsMenuBtt>
        <ProjectsMenuBtt name='cf' nameDisp='CutFiles' icon='cf'></ProjectsMenuBtt>
      </div>
    );
  }
}

export default MenuTop;