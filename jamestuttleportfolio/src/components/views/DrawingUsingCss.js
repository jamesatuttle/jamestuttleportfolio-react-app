import React from 'react'
import DrawingsContainer from '../DrawingsContainer';
import PageLayout from './PageLayout';

class DrawingUsingCss extends React.Component {
  render() {
    return (
      <PageLayout pageContents={<DrawingsContainer />} page="drawings-using-css"/>
    );
  }
};

export default DrawingUsingCss
