import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
  render() {
    const {title, description, tag, link} = this.props;

    let classes = 'project_box';
    let pageLink;

    if (tag === 'coming soon') {
      classes += ' coming_soon';
    } else if (tag === 'new') {
      classes += ' new';
      pageLink = <Link className='text' to={link}>Find out more</Link>;
    }

    return (
      <div className={classes}>
        <h2>{title}</h2>
        <p>{description}</p>
        {pageLink}
      </div>
    );
  }
};

export default ProjectTile
