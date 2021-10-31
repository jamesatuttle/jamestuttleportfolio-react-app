import React from 'react'
import introImage from '../../assets/images/introImage.jpg';


class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className='heading-text'>
          <h1>Hi, I’m <span className='highlight'>James</span>.<br/>Welcome to my <span className='highlight'>Portfolio</span>.</h1>
          <a className='button_style primary' href='#projects'>See my projects</a>
        </div>
        <div class='imageContainer'>
          <img src={introImage} />
        </div>
    </section>
    );
  }
};

export default Intro
