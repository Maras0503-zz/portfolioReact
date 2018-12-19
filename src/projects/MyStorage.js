import React, { Component } from 'react';
import './MyStorage.scss';
import ProjectsMenu from '../menues/ProjectsMenu';

class MyStorage extends Component {
  render() {
    return (
      <div>
        MyStorage
        <ProjectsMenu />
      </div>
    );
  }
}

export default MyStorage;