import React from 'react';
import emailjs from 'emailjs-com';
import SmileyFace from '../svgs/SmileyFace';

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
      <section id='contact'>
        <h2>GET IN TOUCH</h2>
        <form onSubmit={this.handleSubmit}>
          <legend>Email me using the form below or at contact@jamestuttleportfolio.co.uk</legend>
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
    </section>
    );
  }
};

export default Contact
