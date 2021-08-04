import React from 'react';
import ProjectTile from '../ProjectTile';

class Projects extends React.Component {
  render() {
    return (
        <div id='projects_tiles_container'>
          <h1>PROJECTS</h1>
          <p>Come see what I’ve been working on. Working on more and more projects and will add to this as and when they’re ready!</p>
          <div id='projects-container'>
            <ProjectTile title="Random Number Generator" description="A simple tool built in Javascript which takes in a minimum and maximum number and produces a random number between. Makes use of the React state. Take a look and have a play around." link="random-number-generator" />
            <ProjectTile title="Drawings Using CSS" description="A collection of drawings I've made using pure CSS to practice my skills using pseudo selectors, z-index layering, shadow, shading, etc." link="drawing-using-css" />
            <ProjectTile title="This React App" description="This page was built using React with HTML5, and SCSS. Take a look around" link="home" />
          </div>
        </div>
    );
  }
};

export default Projects
