import React from 'react'
import PageLayout from './PageLayout';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import introImage from '../../assets/images/introImage.jpg';

class Home extends React.Component {
  render() {
    return (
        <PageLayout page="home">
          <section id="intro">
              <div className='heading-text'>
                <h1>Hi, I’m <span className='highlight'>James</span>.<br/>Welcome to my <span className='highlight'>Portfolio</span>.</h1>
                <a className='button_style primary' href='/projects'>See my projects</a>
                <a className='button_style secondary' href='/contact'>Contact me</a>
              </div>
              <div class='imageContainer'>
                <img src={introImage} />
              </div>
          </section>
        </PageLayout>
    );
  }
};

export default Home
