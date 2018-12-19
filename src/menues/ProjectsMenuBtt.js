import React, { Component } from 'react';
import './ProjectsMenuBtt.scss';
import { Link } from 'react-router-dom';
import * as fa from 'react-icons/lib/fa';

class ProjectsMenuBtt extends Component {
  render() {
    return (
        <Link to={'/Projects/'+this.props.name} className='projectMenuBtt'>
            {this.props.nameDisp+'   '}
            { (this.props.icon==='ms') ? <fa.FaCartArrowDown className='flRight'/> : false }
            { (this.props.icon==='ctm') ? <fa.FaTrash className='flRight'/> : false }
            { (this.props.icon==='cl') ? <fa.FaCalendar className='flRight'/> : false }
            { (this.props.icon==='cf') ? <fa.FaCut className='flRight'/> : false }
        </Link>
    );
  }
}
export default ProjectsMenuBtt;