import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.displayHomeNavigationLinks = this.displayHomeNavigationLinks.bind(this);
    this.displayHomeLink = this.displayHomeLink.bind(this);
  }

  displayHomeNavigationLinks() {
    return (
      <ul>
        <li>
          <a href="#about"><span>About</span></a>
        </li>
        <li>
          <a href="#projects"><span>Projects</span></a>
        </li>
        <li>
          <a href="#contact"><span>Contact</span></a>
        </li>
      </ul>
    );
  }

  displayHomeLink() {
    return (
      <ul>
        <li>
          <a href="/home"><span>Back to home</span></a>
        </li>
      </ul>
    );
  }

  render() {
    const {page} = this.props

    return (
      <nav role="navigation">
        {page === 'home' ? this.displayHomeNavigationLinks() : this.displayHomeLink()}
        
      </nav>
    );
  }
};

export default Navigation
