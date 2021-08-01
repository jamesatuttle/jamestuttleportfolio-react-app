import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id='contact_container' className='page_width section_container full_page_section only_small_devices'>
        <h2>Contact Me</h2>
        <p>Get in contact if you want to chat!</p>
        <p>Email me at <a className='secondary' href='mailto:contact@jamestuttleportfolio.co.uk'>contact@jamestuttleportfolio.co.uk</a><br/><small>(Click to open in your email client)</small></p>
        <p>Download my CV <a className='secondary' href='../assets/James Tuttle CV.pdf'>here</a> or find it on LinkedIn below.</p>
        <br/>
        <a className='primary' href='https://github.com/jamesatuttle'>GitHub</a>
        <a className='primary' href='https://www.linkedin.com/in/jamesatuttle/'>LinkedIn</a>
        <a className='primary' href='https://codepen.io/jamestuttle/pens/'>Codepen</a>
      </section>
    );
  }
};

export default Contact
