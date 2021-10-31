import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

class PageLayout extends React.Component {
  render() {
    const {page} = this.props

    return (
      <main id={page}>
        <Header page={page}/>
        {this.props.children}
        <Footer />
      </main>
    );
  }
};

export default PageLayout
