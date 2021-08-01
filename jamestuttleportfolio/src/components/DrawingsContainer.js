import React from 'react'
import monitor from '../assets/images/monitor.png';
import coffee from '../assets/images/coffee.png';
import bear from '../assets/images/bear.png';

class DrawingsContainer extends React.Component {
  render() {
    return (
      <section className='full_page_section page_width section_container'>
        <div className='drawing_and_info_container'>
          <h3>Monitor</h3>
          <div className='container'>
            <img id='monitor_image' src={monitor}/>
          </div>
          <p>Find the code on codepen <a className='secondary' href='https://codepen.io/jamestuttle/pen/LYyebyN'>here</a>.</p>
          <p>My first go at drawing using CSS. A simple monitor with a stand utilising the ::before and ::after pseudo selectors.</p>
        </div>
        <div className='drawing_and_info_container'>
          <h3>Coffee</h3>
          <div className='container'>
            <img id='coffee_cup_image' src={coffee}/>
          </div>
          <p>Find the code on codepen <a className='secondary' href='https://codepen.io/jamestuttle/pen/QWvaGdV'>here</a>.</p>
          <p>Using more ::before and ::after pseudo selectors, I've managed to make a coffee cup with some little coffee beans next to them. The beans are identical apart from being rotated to make them seem different.</p>
        </div>
        <div className='drawing_and_info_container'>
          <h3>Bear</h3>
          <div className='container'>
            <img id='bear_image' src={bear}/>
          </div>
          <p>Find the code on codepen <a className='secondary' href='https://codepen.io/jamestuttle/pen/VwbymjK'>here</a>.</p>
          <p>This one gave me the chance to experiment with the z-index and layering of the bear components. The ears and muzzle especially needed to be layered correctly to get the desired effect.</p>
        </div>
      </section>
    );
  }
};

export default DrawingsContainer;
