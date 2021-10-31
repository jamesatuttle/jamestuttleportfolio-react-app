import React from 'react';
import logo from '../assets/images/logo.png';
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    const {page} = this.props

    return (
      <header>
        <nav>
          <div className='logo_container'>
            <img className='logo' src={logo} alt="James Tuttle Portfolio logo" />
          </div>
          <Navigation page={page}/>
        </nav>
      </header>
    );
  }
};

export default Header
