import React from 'react';
import { Link } from 'react-router-dom';
import facts from '../scripts/funFacts';

class RandomNumberGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minNumber: 0, 
      maxNumber: 0,
      minValidation: '',
      maxValidation: '',
      isFormInvalid: true,
      output: 'Fill in the form to see something happen'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let minNumber = this.state.minNumber;
    let maxNumber = this.state.maxNumber;
    let minValidation = '';
    let maxValidation = '';
    let isFormInvalid = false;

    if (minNumber > maxNumber) {
      minValidation = 'Must be smaller than maximum number';
      maxValidation = 'Must be larger than minimum number';
      isFormInvalid = true;
    }

    this.setState({
      minValidation: minValidation,
      maxValidation: maxValidation,
      isFormInvalid: isFormInvalid
    });
  }

  generateRandomNumber() {
    let minNumber = this.state.minNumber;
    let maxNumber = this.state.maxNumber;
  
    // generate random number between min and max int values
    let number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    number = parseInt(number);
  
    this.setState({
      output: number
    });
  
    // check if fact for number exists
    this.checkForFunFact(number);
  }

  checkForFunFact(number) {
    // read JSON file and parse into array
    const factsArray = JSON.parse(facts);
  
    // filter facts and match generated number
    var searchResult = factsArray.filter(x => parseInt(x.number) === number);
  
    // if searchResult found then display on page
    if (searchResult.length) {
      document.getElementById("facts").innerHTML = `(Fun Fact: ${searchResult[0].fact})`;
    } else {
      document.getElementById("facts").innerHTML = '';
    }
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    value = parseInt(value);

    this.setState({
      [name]: value
    });

    this.handleValidation();
  }

  handleSubmit(event) {
    this.generateRandomNumber();
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <div className='breadcrumb-navigation'><Link to='/projects'>Projects</Link><span>Random Number Generator</span></div>
        <h1>RANDOM NUMBER GENERATOR</h1>
        <p>A simple tool built in Javascript which takes in a minimum and maximum number and produces a random number between, making use of React state.</p>
        <p>There is also a JSON collection in the background with random number facts/trivia, if you hit the right number you'll get a fact! Take a look and have a play around.</p>
        <p>Javascript code can be found on GitHub <a href='https://github.com/jamesatuttle/jamestuttleportfolio/blob/main/scripts/random-number-generator.js' className="text">here</a>.</p>
        <div id='form-container'>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <div className='input_container'>
                <label htmlFor='min'>Minimum Number</label>
                <input type='number' name='minNumber' value={this.state.minNumber} onChange={this.handleInputChange} required />
                <p className='validation'>{this.state.minValidation}</p>
              </div>
              <div className='input_container'>
                <label htmlFor='max'>Maximum Number</label>
                <input type='number' name='maxNumber' value={this.state.maxNumber} onChange={this.handleInputChange} required />
                <p className='validation'>{this.state.maxValidation}</p>
              </div>
              <div className='input_container'>
                <input type='submit' value='Generate random number' disabled={this.state.isFormInvalid}/>
              </div>
            </fieldset>
          </form>
          <div className='output_container'>
            <p>Your randomly generated number is:</p>
            <p id='output'>{this.state.output}</p>
            <p id='facts'></p>
          </div>
        </div>
      </section>
    );
  }
};

export default RandomNumberGenerator
