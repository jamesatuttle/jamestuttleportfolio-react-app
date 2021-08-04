import React from 'react'
import DrawingsContainer from '../sub_views/DrawingsContainer';
import PageLayout from './PageLayout';

class DrawingUsingCss extends React.Component {
  render() {
    return (
      <PageLayout page="drawings-using-css"><DrawingsContainer /></PageLayout>
    );
  }
};

export default DrawingUsingCss
