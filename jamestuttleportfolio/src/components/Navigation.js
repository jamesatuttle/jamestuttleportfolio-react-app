import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
};

export default Navigation
