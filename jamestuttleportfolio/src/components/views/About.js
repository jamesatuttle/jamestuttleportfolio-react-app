import React from 'react';
import Graduate from '../svgs/Graduate';
import Computer from '../svgs/Computer';
import Swimming from '../svgs/Swimming';
import Star from '../svgs/Star';

class About extends React.Component {

  render() {
    return (
      <section id='about'>
        <h2>About me</h2>

        <Graduate/><h3 id='education'>Education</h3>
        <h4>Northumbria University, Newcastle</h4>
        <p>BSc. Computer Science 2013 - 2017</p>


        <Computer/><h3 id='work'>Where I've Worked</h3>
        <h4>HM Revenue &amp; Customs</h4>
        <p>Assistant Software Developer 2015 - 2016</p>

        <h4>Caspian</h4>
        <p>Junior Frontend Developer 2018 - 2019</p>

        <h4>Partnerize</h4>
        <p>Application Support Engineer 2017 - 2018<br/>
        Platform Support Engineer 2019 - Present</p>


        <Swimming/><h3 id='hobbies'>Hobbies</h3>
        <p>I love keeping fit with swimming, the gym, and rock climbing. I also love Console and PC gaming, playing Dungeons and Dragons, and travelling to experience the world and finding awesome street art.</p>

        <Star/><h3 id='ambition'>Ambition</h3>
        <p>My ambition is to focus primarily on Frontend Development with a bit of backend, maybe one day transitioning to a full stack developer.</p>

      </section>
    );
  }
};

export default About
