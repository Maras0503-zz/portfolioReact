import React, { Component } from 'react';
import './MenuTopBtt.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MenuTopBtt extends Component {
  render() {
    return (
      <Link to={"/"+this.props.name}><div className="menuTopBtt">{this.props.nameDisp}</div></Link>
    );
  }
}
export default MenuTopBtt;