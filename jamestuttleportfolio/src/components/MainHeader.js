import React from 'react'
import logo from '../assets/images/logo.svg';

class MainHeader extends React.Component {
  render() {
    const {title, headerText} = this.props;

    return (
      <main id='page_top' class='full_page_section page_width section_container'>
        <header>
          <div id='logo_container'>
            <img src={logo} alt="logo" />
          </div>
          <div id='hamburger' class='open'>
            <button id='hamburger_button'>
              <div class='line'></div>
              <div class='line'></div>
              <div class='line'></div>
            </button>
          </div>
          <nav role="navigation">
            <ul>
              <li class='small_device'><a href='#page_top'>Back to top</a></li>
              <li><a href="#about_container">About Me</a></li>
              <li><a href="project_container">Projects</a></li>
              <li class='small_device sub_list'><a href='random-number-generator.html'>Random Number Generator</a></li>
              <li class='small_device sub_list'><a href='drawings-using-css.html'>Drawings Using CSS</a></li>
              <li><a href="#contact_container">Contact Me</a></li>
            </ul>
          </nav>
        </header>
        <div id="introduction_container">
          <div class='text_container'>
            <h1>{title}</h1>
            <p>{headerText}</p>
            <a href='#contact_container' class='primary'>Contact Me</a>
          </div>
          <div class='image_container'></div>
        </div>
        <div id='scroll_container'>
          <span>Scroll down</span>
          <div class='down_arrow'></div>
        </div>
     </main>
    );
  }
};

export default MainHeader
