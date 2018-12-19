import React, { Component } from 'react';
import './Projects.scss';
import ProjectsMenu from '../menues/ProjectsMenu';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        Projects
        <ProjectsMenu />
      </div>
    );
  }
}

export default Projects;