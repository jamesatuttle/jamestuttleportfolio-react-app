import React from 'react';
import ChevronRight from '../svgs/ChevronRight';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import Pencil from '../svgs/Pencil';

class Projects extends React.Component {
  render() {
    return (
      <section id='projects'>
        <div className='projects_container'>
          <div className='project_tile'>
              <h3>Queery website design</h3>
              <Pencil />
              <p>September 2021</p>
              <a href='#'>TAKE A LOOK <ChevronRight /></a>
          </div>
          <div className='project_tile'>
              <h3>Random number generator</h3>
              <Javascipt />
              <p>July 2021</p>
              <a href='#'>TAKE A LOOK <ChevronRight /></a>
          </div>
          <div className='project_tile'>
              <h3>Queery logo design</h3>
              <Pencil />
              <p>September 2021</p>
              <a href='#'>TAKE A LOOK <ChevronRight /></a>
          </div>
          <div className='project_tile'>
              <h3>Drawings using css</h3>
              <Css3 />
              <p>July 2021</p>
              <a href='#'>TAKE A LOOK <ChevronRight /></a>
          </div>
        </div>
        <div className='text'>
          <h2>Projects</h2>
          <p>Take a look at the Projects I’ve been working on, from building simple to complex pictures using CSS, to designing and building a website prototype of my friends future company, Queery.<br/><br/>I’m always adding to this to keep coming back to check on what’s new!</p>
          <a className='button_style secondary' href='#'>see more</a>
        </div>
      </section>
    );
  }
};

export default Projects
