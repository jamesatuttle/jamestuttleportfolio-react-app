import React from 'react'
import Projects from '../sub_views/Projects';
import PageLayout from './PageLayout';

class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <PageLayout page="projects" ><Projects /></PageLayout>
      </div>
    );
  }
};

export default ProjectsPage
