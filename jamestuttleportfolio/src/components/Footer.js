import React from 'react'
import LinkedIn from './svgs/LinkedIn';
import GitHub from './svgs/GitHub';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='copyright'>
          COPYRIGHT © 2021 JAMES TUTTLE. ALL RIGHTS RESERVED.
        </div>
        <div className='links'>
          <a href='assets/files/James_Tuttle_CV.pdf'>VIEW CV</a>
          <a href='https://codepen.io/jamestuttle/pens/'>CODEPEN</a>
          <a href="https://www.linkedin.com/in/jamesatuttle/"><LinkedIn/></a>
          <a href="https://github.com/jamesatuttle"><GitHub/></a>
        </div>
      </footer>
    );
  }
};

export default Footer
