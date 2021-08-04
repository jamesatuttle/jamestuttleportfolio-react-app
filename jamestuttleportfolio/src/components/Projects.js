import React from 'react';
import ProjectTile from './ProjectTile';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
        <div id='projects_tiles_container'>
          <h1>PROJECTS</h1>
          <p>Come see what I’ve been working on. Working on more and more projects and will add to this as and when they’re ready!</p>
          <div id='projects-container'>
            <ProjectTile title="Random Number Generator" description="A simple tool built in Javascript which takes in a minimum and maximum number and produces a random number between. Makes use of the React state. Take a look and have a play around." tag="new" link="/random-number-generator" />
            <ProjectTile title="Drawings Using CSS" description="A collection of drawings I've made using pure CSS to practice my skills using pseudo selectors, z-index layering, shadow, shading, etc." tag="new" link="/drawing-using-css" />
            <ProjectTile title="This React App" description="This page was built using React with HTML5, and SCSS." tag="coming soon" link="/Home" />
            <ProjectTile title="Affiliate Marketing Custom Signup Tunnels" description="Custom Tunnels created to onboard Affiliate Partners for clients of a global Affiliate Marketing company based in Newcastle. For legal reasons I can't show the entire pages but I've taken some screenshots to showcase my work." tag="coming soon" link='/Home' />
          </div>
        </div>
    );
  }
};

export default Projects
