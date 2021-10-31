import React from 'react';
import ChevronRight from '../svgs/ChevronRight';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import Pencil from '../svgs/Pencil';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <section id='projects'>
        <h2>Projects</h2>
        <div className='projectsIntro'>
          <p>Take a look at the Projects I’ve been working on, from building simple to complex pictures using CSS, to seeing what I can make in JavaScript.</p>
          <p>I’m always adding to this to keep coming back to check on what’s new!</p>
        </div>

        <div className='projects_container'>
          <div className='project_tile'>
              <h3>Random number generator</h3><Javascipt/>
              <p>September 2021</p>
              <Link to='/projects/random-number-generator'>Take a look</Link>
          </div>
          <div className='project_tile'>
              <h3>Drawings using css</h3><Css3/>
              <p>September 2021</p>
              <Link to='/projects/drawing-using-css'>Take a look</Link>
          </div>
        </div>
        <div className='buttonContainer'>
          <a className='button_style primary' href='/projects'>see all projects</a>
        </div>
      </section>
    );
  }
};

export default Projects
