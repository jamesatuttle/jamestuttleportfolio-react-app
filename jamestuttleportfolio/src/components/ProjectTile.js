import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
  render() {
    const {title, description, tag, link} = this.props;

    let classes = 'project_box';

    if (tag === 'coming soon') {
      classes += ' coming_soon';
    } else if (tag === 'new') {
      classes += ' new';
    }

    return (
      <div className={classes}>
        <h3><Link to={link}>{title}</Link></h3>
        <p>{description}</p>
      </div>
    );
  }
};

export default ProjectTile
