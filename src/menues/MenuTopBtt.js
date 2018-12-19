import React, { Component } from 'react';
import './MenuTopBtt.scss';
import { Link } from 'react-router-dom';
import * as fa from 'react-icons/lib/fa';

class MenuTopBtt extends Component {
  render() {
    return (
    <Link to={"/"+this.props.name} className="menuTopBtt">
      {this.props.nameDisp+'   '}
      { (this.props.icon==='person') ? <fa.FaChild className='flRight'/> : false }
      { (this.props.icon==='project') ? <fa.FaCode className='flRight'/> : false }
      { (this.props.icon==='contact') ? <fa.FaPhone className='flRight'/> : false }
    </Link>
    );
  }
}
export default MenuTopBtt;