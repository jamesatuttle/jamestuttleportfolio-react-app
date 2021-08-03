import React from 'react'
import meImage from '../assets/images/me.JPG';
import newcastleImage from '../assets/images/newcastle.JPG';
import boulderingImage from '../assets/images/bouldering.jpeg';

class About extends React.Component {
  render() {
    return (
      <section id='about_container' className=''>
        <div id='about_container_text'>
          <h1>ABOUT ME</h1>
          <p>I grew up in the North East of England and completed my Computer Science degree at Northumbria University.</p>
          <p>When I jumped into the world of work, I experimented in a few different roles within Computing until I found myself working as a Frontend Developer for a few companies. After a few varied experiences I am currently working at an Affiliate Marketing Company as a Platform Support Engineer helping to keep the Platform running, supporting Clients with customisation requests, building them custom signup tunnels to onboard affiliate partners and identifying and managing bugs/incidents.</p>
          <p>Outside of work, I love coding, watching films and shows (especially Marvel ones), playing Dungeons and Dragons, and keeping healthy with the gym, body weight exercises and rock climbing.</p>
          <p>My ambition is to get involved in more Frontend Development with a focus on Accessibility, User Research and eventually transition into UX/UI Design.</p>
        </div>
        <div id='about_container_images'>
          <img id='image_me' className='circle_image' src={meImage} alt="logo" />
          <img id='image_newcastle' className='circle_image'  src={newcastleImage} alt="logo" />
          <img id='image_bouldering' className='circle_image' src={boulderingImage} alt="logo" />
        </div>
      </section>
    );
  }
};

export default About
