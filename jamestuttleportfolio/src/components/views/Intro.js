import React from 'react'
import introImage from '../../assets/images/introImage.jpg';


class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className='intro'>
          <div className="animated-title">
            <div className="text-top-container">
              <div>
                <span className='text'>Hi, I’m <span className='highlight'>James</span>. Welcome to my <span className='highlight'>Portfolio</span>.</span>
              </div>
            </div>
          </div>
          <div className='button_container'>
            <a className='button_style primary' href='#projects'>See my projects</a>
          </div>
        </div>
    </section>
    );
  }
};

export default Intro
