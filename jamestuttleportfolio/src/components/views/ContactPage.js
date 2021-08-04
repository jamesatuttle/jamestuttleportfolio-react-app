import React from 'react'
import Contact from '../sub_views/Contact';
import PageLayout from './PageLayout';

class ContactPage extends React.Component {
  render() {
    return (
      <PageLayout page="contact"><Contact /></PageLayout>
    );
  }
};

export default ContactPage
