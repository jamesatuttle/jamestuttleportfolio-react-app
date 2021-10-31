import React from 'react'
import PageLayout from '../PageLayout';
import monitor from '../../../assets/images/monitor.png';
import coffee from '../../../assets/images/coffee.png';
import bear from '../../../assets/images/bear.png';
import { Link } from 'react-router-dom';

class DrawingUsingCss extends React.Component {
  render() {
    return (
      <PageLayout page="drawings-using-css">
        <section>
          <h1>DRAWINGS USING CSS</h1>
          <p>A collection of drawings I've made using pure CSS to practice my skills using pseudo selectors, z-index layering, shadow, shading, etc.</p>
          <div className='drawing_and_info_container'>
            <h2>Monitor</h2>
            <div className='image_with_text'>
              <div className='container'>
                <img id='monitor_image' alt="monitor created using css" src={monitor}/>
              </div>
              <div className='text'>
                <p>Find the code on codepen <a className='text' href='https://codepen.io/jamestuttle/pen/LYyebyN'>here</a>.</p>
                <p>My first go at drawing using CSS. A simple monitor with a stand utilising the ::before and ::after pseudo selectors.</p>
              </div>
            </div>
          </div>
          <div className='drawing_and_info_container'>
            <h2>Coffee</h2>
            <div className='image_with_text'>
              <div className='container'>
                <img id='coffee_cup_image' alt="coffee cup with coffee beans created using css" src={coffee}/>
              </div>
              <div className='text'>
                <p>Find the code on codepen <a className='text' href='https://codepen.io/jamestuttle/pen/QWvaGdV'>here</a>.</p>
                <p>Using more ::before and ::after pseudo selectors, I've managed to make a coffee cup with some little coffee beans next to them. The beans are identical apart from being rotated to make them seem different.</p>
              </div>
            </div>
          </div>
          <div className='drawing_and_info_container'>
            <h2>Bear</h2>
            <div className='image_with_text'>
              <div className='container'>
                <img id='bear_image' alt="bear created using css" src={bear}/>
              </div>
              <div className='text'>
                <p>Find the code on codepen <a className='text' href='https://codepen.io/jamestuttle/pen/VwbymjK'>here</a>.</p>
                <p>This one gave me the chance to experiment with the z-index and layering of the bear components. The ears and muzzle especially needed to be layered correctly to get the desired effect.</p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }
};

export default DrawingUsingCss
