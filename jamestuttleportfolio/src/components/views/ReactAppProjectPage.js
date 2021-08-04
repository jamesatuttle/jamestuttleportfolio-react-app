import React from 'react'
import ReactAppProject from '../sub_views/ReactAppProject';
import PageLayout from './PageLayout';

class ReactAppProjectPage extends React.Component {
  render() {
    return (
      <div>
        <PageLayout page="random-number-generator"><ReactAppProject /></PageLayout>
      </div>
    );
  }
};

export default ReactAppProjectPage
