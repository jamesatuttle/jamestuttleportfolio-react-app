import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {

    const {lightTheme: boolean} = this.props;

    let classes = "";

    if (this.props.lightTheme) {
      classes = 'light_theme'
    } else if (!this.props.lightTheme) {
      classes = 'dark_theme'
    }

    return (
      <nav role="navigation" className={classes}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
};

export default Navigation
