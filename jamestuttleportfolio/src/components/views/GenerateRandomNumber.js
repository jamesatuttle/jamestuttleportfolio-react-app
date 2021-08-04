import React from 'react'
import RandomNumberGenerator from '../sub_views/RandomNumberGenerator';
import PageLayout from './PageLayout';

class GenerateRandomNumber extends React.Component {
  render() {
    return (
      <div>
        <PageLayout page="random-number-generator"><RandomNumberGenerator /></PageLayout>
      </div>
    );
  }
};

export default GenerateRandomNumber
