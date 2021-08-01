import React from 'react'
import MainHeader from '../MainHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../About';
import Projects from '../Projects';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {

    const link = <Link to='/Home' className='primary'>Back to Home</Link>

    return (
      <div>
        <MainHeader title="404" headerText="Woops! It seems this page was removed or doesn't exist. Please head back to home." displayHeaderImage={false} link={link} hideScrollDown={true}/>
        <Footer />
      </div>
    );
  }
};

export default NotFound
