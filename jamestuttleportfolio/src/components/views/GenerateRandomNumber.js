import React from 'react'
import RandomNumberGenerator from '../RandomNumberGenerator';
import PageLayout from './PageLayout';

class GenerateRandomNumber extends React.Component {
  render() {
    return (
      <div>
        <PageLayout pageContents={<RandomNumberGenerator />} page="random-number-generator"/>
      </div>
    );
  }
};

export default GenerateRandomNumber
