import React from 'react'
import MainHeader from '../MainHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

class References extends React.Component {
  render() {

    const link = <Link to='/Home' className='primary'>Back to Home</Link>

    return (
      <div>
        <MainHeader title="References" headerText="Images used throughout this website which aren't mine are referenced to their original authors and websites here." displayHeaderImage={false} link={link}/>
        <section className='page_width section_container'>
          <h3>Images</h3>
          Rock Climbing Image - <a className='secondary' href='https://www.climbnewcastle.com/'>Climb Newcastle</a><br/><br/>
          Man sat at computer at desk - <a className='secondary' href='https://depositphotos.com/325211594/stock-illustration-businessman-sitting-at-workplace-smiling.html'>DepositPhotos</a> <small>(Image paid for)</small>
          <br/><br/>
          <h3>Fonts</h3>
          Main font: <a className='secondary' href='https://fonts.google.com/specimen/Spartan'>Spartan - Google Fonts</a>
        </section>
        <Footer />
      </div>
    );
  }
};

export default References
