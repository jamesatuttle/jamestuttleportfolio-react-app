import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
  render() {
    const {title, description, link} = this.props;

    const projectLink = 'projects/' + this.props.link;

    return (
      <div className='project_box'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className='text' to={projectLink}>Find out more</Link>
      </div>
    );
  }
};

export default ProjectTile
