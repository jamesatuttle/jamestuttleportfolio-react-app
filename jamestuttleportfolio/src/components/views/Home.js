import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import meImage from '../../assets/images/me_2.jpeg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
        <main id='home'>
            <Header />
            <div id='text-with-image'>
              <img id='image_me' className='circle_image' src={meImage} alt="logo" />
              <div id='text-container'>
                <h1>Hi! I’m James. Website Developer.</h1>
                <p>Here I can showcase all my projects, mainly written in JavaScript with the web app itself written in ReactJS.</p>
                <Link className='primary' to='/projects'>See my projects</Link><Link className='secondary' to='/contact'>Contact Me</Link>
              </div>
            </div>
            <Footer />
        </main>
    );
  }
};

export default Home
