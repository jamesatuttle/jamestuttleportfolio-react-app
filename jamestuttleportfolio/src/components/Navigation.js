import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul>
          <li>
            <Link to='/'><span>Home</span></Link>
          </li>
          <li>
            <Link to='/about'><span>About</span></Link>
          </li>
          <li>
            <a href="/projects"><span>Projects</span></a>
          </li>
          <li>
            <a href="/contact"><span>Contact</span></a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation
