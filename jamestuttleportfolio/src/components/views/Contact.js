import React from 'react';
import emailjs from 'emailjs-com';
import SmileyFace from '../svgs/SmileyFace';
import PageLayout from './PageLayout';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      from_email: '', 
      from_name: '',
      message: '',
      emailSentSuccessful: false,
      emailError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    value = value.toString(); // ensure value is a string

    this.setState({[name]: value}, () => {
      this.handleValidation();
    });
  }

  handleValidation() {
    
  }

  handleSubmit(event) {
    console.log(event.target);
    event.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm('service_1co1muc', process.env.REACT_APP_EMAILJS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        this.setState({emailSentSuccessful: true, emailError: false})
      },
      (error) => {
        this.setState({emailSentSuccessful: false, emailError: true})
    });
  }


  render() {
    return (
      <PageLayout page="home">
        <section id='contact'>
          <h1>Contact me</h1>
          <div className='twoColumn'>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='name'>Name</label>
              <input type='text' id='from_name' name='from_name' placeholder="E.g. Joanne Smith" value={this.state.from_name} onChange={this.handleInputChange} required/>

              <label htmlFor='email'>Email</label>
              <input type='email' id='from_email' name='from_email' placeholder="E.g. hi@your-email.com" value={this.state.from_email} onChange={this.handleInputChange} required />

              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' value={this.state.message} onChange={this.handleInputChange} required></textarea>

              <input type='submit' value="Send Email" className='primary'/>
              {this.state.emailSentSuccessful ? <span><p>Email sent successfully</p><SmileyFace /></span> : ''}
              {this.state.emailError ? <p>Woops, there seems to be a problem. Try again but if it continues, email me at <a href="mailto:contact@jamestuttleportfolio.co.uk">contact@jamestuttleportfolio.co.uk</a></p> : ''}
            </form>
            <div className='buttons'>
              <span>Email me using the form or at:</span><br/>
              <span className='highlight bigger emailLink'><a href='mailto:contact@jamestuttleportfolio.co.uk'>contact@jamestuttleportfolio.co.uk</a></span><br/>
              <small>(Click to open in your email client)</small>
              <div>
                <a href='https://www.jamestuttleportfolio.co.uk/James_Tuttle_CV.pdf' className='button_style primary'>Download CV</a>
                <a href='https://github.com/jamesatuttle' className='button_style secondary'>Github</a>
                <a href='https://www.linkedin.com/in/jamesatuttle/' className='button_style secondary'>LinkedIn</a>
                <a href='https://codepen.io/jamestuttle/pens/' className='button_style secondary'>Codepen</a>
              </div>
            </div>
          </div>
      </section>
    </PageLayout>
    );
  }
};

export default Contact
