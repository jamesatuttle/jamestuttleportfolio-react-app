import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className='page_width'>
        <div id='copyright_container'>Copyright &copy; 2021 James Tuttle. All rights reserved. | <Link to='/References'>references</Link></div>
      </footer>
    );
  }
};

export default Footer
