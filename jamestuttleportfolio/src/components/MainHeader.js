import React from 'react'
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

class MainHeader extends React.Component {
  render() {
    const {title, headerText, displayHeaderImage, link, hideScrollDown} = this.props;

    let headerImage;
    if (displayHeaderImage === true) {
      headerImage = <div className='image_container'></div>;
    }

    let pageLink = <a href='#contact_container' className='primary'>Contact Me</a>;

    if (link) {
      pageLink = link;
    }

    let scrollDown =
      <div id='scroll_container'>
        <span>Scroll down</span>
        <div className='down_arrow'></div>
      </div>;

    if (hideScrollDown) {
      scrollDown = <div></div>;
    }

    return (
      <main id='page_top' className='full_page_section page_width section_container'>
        <header>
          <div id='logo_container'>
            <img src={logo} alt="logo" />
          </div>
          <div id='hamburger' className='open'>
            <button id='hamburger_button'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </button>
          </div>
          <nav role="navigation">
            <ul>
              <li className='small_device'><a href='#page_top'>Back to top</a></li>
              <li><Link to="/Home">Home</Link></li>
              <li><a href="#about_container">About Me</a></li>
              <li><a href="#project_container">Projects</a></li>
              <li className='small_device sub_list'><a href='random-number-generator.html'>Random Number Generator</a></li>
              <li className='small_device sub_list'><a href='drawings-using-css.html'>Drawings Using CSS</a></li>
              <li><a href="#contact_container">Contact Me</a></li>
            </ul>
          </nav>
        </header>
        <div id="introduction_container">
          <div className='text_container'>
            <h1>{title}</h1>
            <p>{headerText}</p>
            {pageLink}
          </div>
          {headerImage}
        </div>
        {scrollDown}
     </main>
    );
  }
};

export default MainHeader
