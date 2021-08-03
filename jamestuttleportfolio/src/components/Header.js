import React from 'react'
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    const {lightTheme} = this.props;

    return (
      <header>
          <Logo lightTheme={lightTheme}/>
          <Navigation lightTheme={lightTheme}/>
      </header>
    );
  }
};

export default Header
