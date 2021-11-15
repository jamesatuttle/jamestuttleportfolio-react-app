import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
  render() {
    const {title, icon, date, link} = this.props;

    const projectLink = '/projects/' + link;

    return (
      <div className='project_tile'>
          <h3>{title}</h3>{icon}
          <p>{date}</p>
          <Link to={projectLink}>Take a look</Link>
      </div>
    );
  }
};

export default ProjectTile
