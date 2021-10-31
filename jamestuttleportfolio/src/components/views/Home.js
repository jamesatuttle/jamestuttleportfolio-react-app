import React from 'react'
import PageLayout from './PageLayout';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Home extends React.Component {
  render() {
    return (
        <PageLayout page="home">
          <Intro />
          <About />
          <Projects />
          <Contact />
        </PageLayout>
    );
  }
};

export default Home
