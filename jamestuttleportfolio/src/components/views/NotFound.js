import React from 'react'
import { Link } from 'react-router-dom';
import monitor from '../../assets/images/404-monitor.png';
import PageLayout from './PageLayout';

class NotFound extends React.Component {
  render() {
    return (
      <PageLayout page="notfound">
        <div id='text-with-image'>
          <div class='illustration'>
            <img id='monitor_image' alt="monitor created using css" src={monitor}/>
          </div>
          <div id='text-container'>
            <h1>Page Not Found</h1>
            <p>It seems the page you're looking for doesn't exist or has been removed.<br/>Head home using the link below.</p>
            <Link className='primary' to='/home'>Back to home</Link>
          </div>
        </div>
      </PageLayout>
    );
  }
};

export default NotFound
