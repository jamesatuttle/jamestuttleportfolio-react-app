import React from 'react'
import Projects from '../Projects';
import PageLayout from './PageLayout';

class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <PageLayout pageContents={<Projects />} page="projects" />
      </div>
    );
  }
};

export default ProjectsPage
