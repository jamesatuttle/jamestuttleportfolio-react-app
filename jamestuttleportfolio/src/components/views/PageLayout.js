import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

class PageLayout extends React.Component {
  render() {
    const {pageContents, page} = this.props

    return (
      <main id={page} className='light_theme'>
        <Header />
        {pageContents}
        <Footer />
      </main>
    );
  }
};

export default PageLayout
