import React, { Component } from 'react';
import './Calendar.scss';
import ProjectsMenu from '../menues/ProjectsMenu';

class Calendar extends Component {
  render() {
    return (
      <div>
        Calendar
        <ProjectsMenu />
      </div>
    );
  }
}

export default Calendar;