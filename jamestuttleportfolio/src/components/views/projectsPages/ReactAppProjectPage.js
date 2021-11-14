import React from 'react'
import PageLayout from '../PageLayout';
import website_version_one from '../../../assets/images/website_version_one.png';
import website_version_two from '../../../assets/images/website_version_two.png';
import website_version_three from '../../../assets/images/website_version_three.png';
import { Link } from 'react-router-dom';

class ReactAppProjectPage extends React.Component {
  render() {
    return (
      <div>
        <PageLayout page="this-react-app">
        <section>
                <h1>THIS REACT APP</h1>
                <p>This site was originally built using pure CSS and HTML5 with a little bit of JavaScript for the hamburger navigation which was previously used.</p>
                <p>Since then, I've rebuilt this website in ReactJS using JavaScript, HTML5 and SCSS compiled into CSS for the styling. This allowed me to get back into using React after previously using it whilst working as a Frontend Developer at Caspian.</p>
                
            </section>
        </PageLayout>
      </div>
    );
  }
};

export default ReactAppProjectPage
