import React from 'react';
import ChevronRight from '../svgs/ChevronRight';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import Pencil from '../svgs/Pencil';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import ProjectTile from '../ProjectTile';

class Projects extends React.Component {
  render() {
    return (
      <PageLayout page="projects">
          <section id='projects'>
            <h1>Projects</h1>
            <div className='projectsIntro'>
              <p>Take a look at the Projects I’ve been working on, from building simple to complex pictures using CSS, to seeing what I can make in JavaScript.</p>
              <p>I’m always adding to this to keep coming back to check on what’s new!</p>
            </div>

            <div className='projectSection'>
              <Javascipt/><h2>JavaScript</h2>
              <div className='projects_container'>
                <ProjectTile title='Random number generator' icon={<Javascipt/>} date='September 2021' link='random-number-generator'/>
                <ProjectTile title='This react app' icon={<Javascipt/>} date='September 2021' link='this-react-app'/>
              </div>
            </div>

            <div className='projectSection'>
              <Css3/><h2>CSS</h2>
              <div className='projects_container'>
                <ProjectTile title='Drawings using CSS' icon={<Css3/>} date='September 2021' link='drawing-using-css'/>
              </div>
            </div>
          </section>
        </PageLayout>
    );
  }
};

export default Projects
