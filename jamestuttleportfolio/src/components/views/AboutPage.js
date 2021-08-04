import React from 'react'
import About from '../sub_views/About';
import PageLayout from './PageLayout';

class AboutPage extends React.Component {
  render() {
    return (
      <PageLayout page="about"><About /></PageLayout>
    );
  }
};

export default AboutPage;
