import React from 'react';
import ChevronRight from '../svgs/ChevronRight';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import Pencil from '../svgs/Pencil';

class Projects extends React.Component {
  render() {
    return (
      <section id='projects'>
        <h2>Projects</h2>

        <div className='projects_container'>
          {/* <div className='project_tile'> */}
              {/* <h3>Queery website design</h3> */}
              {/* <Pencil /> */}
          {/* </div> */}
          <div className='project_tile'>
              <Javascipt /><h3><a href='#'>Random number generator</a></h3>
              <p>A mini project which takes in a minimum number and a maximum number and returns a random number between. Built using JavaScript.</p>
          </div>
          {/* <div className='project_tile'> */}
              {/* <h3>Queery logo design</h3> */}
              {/* <Pencil /> */}
          {/* </div> */}
          <div className='project_tile'>
              <Css3 /><h3><a href='#'>Drawings using css</a></h3>
              <p>Some small drawings created using CSS to practice layering, ::before and ::after pseudo selectors. I’ve included the codepen links so you can see the code</p>
          </div>
        </div>
        <a className='button_style primary' href='/projects'>see all projects</a>
      </section>
    );
  }
};

export default Projects
