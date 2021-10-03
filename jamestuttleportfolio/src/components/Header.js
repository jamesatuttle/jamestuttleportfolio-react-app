import React from 'react';
import logo from '../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className='logo_container'>
            <img className='logo' src={logo} alt="James Tuttle Portfolio logo" />
          </div>
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
        </nav>
      </header>
    );
  }
};

export default Header
