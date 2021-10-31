import React from 'react'
import PageLayout from './PageLayout';
import ChevronRight from '../svgs/ChevronRight';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import Pencil from '../svgs/Pencil';
import { Link } from 'react-router-dom';

class ProjectsFull extends React.Component {
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
              <Javascipt/><h3>JavaScript</h3>
              <div className='projects_container'>
                <div className='project_tile'>
                    <h3>Random number generator</h3><Javascipt/>
                    <p>September 2021</p>
                    <Link to='/projects/random-number-generator'>Take a look</Link>
                </div>
              </div>
            </div>

            <div className='projectSection'>
              <Css3/><h3>CSS</h3>
              <div className='projects_container'>
                <div className='project_tile'>
                    <h3>Drawings using css</h3><Css3/>
                    <p>September 2021</p>
                    <Link to='/projects/drawing-using-css'>Take a look</Link>
                </div>
              </div>
            </div>
          </section>
        </PageLayout>
    );
  }
};

export default ProjectsFull
