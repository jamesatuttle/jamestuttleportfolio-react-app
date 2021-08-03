import React from 'react'
import Contact from '../Contact';
import PageLayout from './PageLayout';

class ContactPage extends React.Component {
  render() {
    return (
      <PageLayout pageContents={<Contact />} page="contact"/>
    );
  }
};

export default ContactPage
