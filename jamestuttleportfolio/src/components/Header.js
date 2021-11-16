import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    const {page} = this.props

    return (
      <header>
        <nav>
          <div className='logo_container'>
            James Tuttle
          </div>
          <Navigation page={page}/>
        </nav>
      </header>
    );
  }
};

export default Header
