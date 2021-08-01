import React from 'react';
import ProjectTile from './ProjectTile';

class Projects extends React.Component {
  render() {
    const {changePage} = this.props

    return (
      <section id='project_container' className='full_page_section page_width section_container'>
        <div id='section_header'>
          <h2>Projects</h2>
          <p>Come see what I've been working on. Working on more and more projects and will add to this as and when they're ready!</p>
        </div>
        <div id='projects_tiles_container'>
          <ProjectTile title="This site itself" description="This page was built using React with HTML5, SCSS and JavaScript for the Navigation toggle on mobiles." tag="coming soon" link="/Home" />
          <ProjectTile title="Random Number Generator" description="A simple tool built in Javascript which takes in a minimum and maximum number and produces a random number between. Take a look and have a play around." tag="new" link="/Home" />
          <ProjectTile title="Drawings Using CSS" description="A collection of drawings I've made using pure CSS to practice my skills. Take a look!" tag="new" link="/Drawing-using-css" />
          <ProjectTile title="Affiliate Marketing Custom Signup Tunnels" description="Custom Tunnels created to onboard Affiliate Partners for clients of a global Affiliate Marketing company based in Newcastle. For legal reasons I can't show the entire pages but I've taken some screenshots to showcase my work." tag="coming soon" link='/Home' />
        </div>
      </section>
    );
  }
};

export default Projects
