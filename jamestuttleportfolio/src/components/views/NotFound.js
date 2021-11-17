import React from 'react'
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

class NotFound extends React.Component {
  render() {
    return (
      <PageLayout page="notfound">
        <section>
            <h1>Page Not Found</h1>
            <p>It seems the page you're looking for doesn't exist or has been removed.<br/>Head home using the link below.</p>
            <Link className='link' to='/home'>Back to home</Link>
        </section>
      </PageLayout>
    );
  }
};

export default NotFound
