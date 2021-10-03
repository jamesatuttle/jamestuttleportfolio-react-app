import React from 'react'
import PageLayout from './PageLayout';
import Intro from './Intro';
import About from '../sub_views/About';
import Projects from '../sub_views/Projects';
import Contact from '../sub_views/Contact';

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
