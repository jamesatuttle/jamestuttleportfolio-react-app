import React from 'react'
import logo from '../assets/images/logo_white.png';
import linkedInIcon from '../assets/images/linkedin-brands.svg';
import githubIcon from '../assets/images/github-brands.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
        <img src={logo} alt="James Tuttle Portfolio logo" />
        </div>
        <div className='links'>
          <a href='assets/files/James_Tuttle_CV.pdf'>VIEW CV</a>
          <a href='https://codepen.io/jamestuttle/pens/'>CODEPEN</a>
          <a href="https://www.linkedin.com/in/jamesatuttle/"><img src={linkedInIcon} alt="linkedin logo"/></a>
          <a href="https://github.com/jamesatuttle"><img src={githubIcon} alt="github logo"/></a>
        </div>
        <div className='copyright'>
          COPYRIGHT © 2021 JAMES TUTTLE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    );
  }
};

export default Footer
