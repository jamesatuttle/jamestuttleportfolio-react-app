import React from 'react'
import About from '../About';
import PageLayout from './PageLayout';

class AboutPage extends React.Component {
  render() {
    return (
      <PageLayout pageContents={<About />} page="about" />
    );
  }
};

export default AboutPage;
