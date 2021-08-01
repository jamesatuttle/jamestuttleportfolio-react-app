import React from 'react'
import MainHeader from '../MainHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../About';
import Projects from '../Projects';
import DrawingsContainer from '../DrawingsContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainHeader title="Drawings Using CSS" headerText="A collection of drawings I've made using pure CSS to practice my skills. Take a look!" displayHeaderImage={false} />
        <DrawingsContainer />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
};

export default Home
