import React from 'react'
import MainHeader from '../MainHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../About';
import Projects from '../Projects';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainHeader title="Hi! I'm James" headerText="Platform Support Engineer jumping back into Frontend Web Development on the side. Welcome to my Portfolio." displayHeaderImage={true} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
};

export default Home
