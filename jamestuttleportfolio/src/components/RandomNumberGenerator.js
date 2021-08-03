import React from 'react';
import { Link } from 'react-router-dom';

class RandomNumberGenerator extends React.Component {

  render() {
    return (
      <section>
        <div className='breadcrumb-navigation'><Link to='/projects'>Projects</Link><span>Random Number Generator</span></div>
        <h1>RANDOM NUMBER GENERATOR</h1>
        <p>A simple tool built in Javascript which takes in a minimum and maximum number and produces a random number between, making use of React state.</p>
        <p>There is also a JSON collection in the background with random number facts/trivia, if you hit the right number you'll get a fact! Take a look and have a play around.</p>
        <p>Javascript code can be found on GitHub <a href='https://github.com/jamesatuttle/jamestuttleportfolio/blob/main/scripts/random-number-generator.js' className="text">here</a>.</p>
        <div id='form-container'>
          <form action="#" onSubmit="generateRandomNumber();return false">
            <fieldset>
              <div className='input_container'>
                <label htmlFor='min'>Minimum Number</label>
                <input type='number' id='min' required />
                <p className='validation'></p>
              </div>
              <div className='input_container'>
                <label htmlFor='max'>Maximum Number</label>
                <input type='number' id='max' required />
                <p className='validation'></p>
              </div>
              <div className='input_container'>
                <input type='submit' value='Generate random number'/>
              </div>
            </fieldset>
          </form>
          <div className='output_container'>
            <p>Your randomly generated number is:</p>
            <p id='output'>Fill in the form to see something happen</p>
            <p id='facts'></p>
          </div>
        </div>
      </section>
    );
  }
};

const facts = `[
  {"number": "4", "fact": "The only number spelled with the same number of letters as itself"},
  {"number": "7", "fact": "The opposite sides of a six sided die always adds up to 7"},
  {"number": "9", "fact": "It's said that cats have 9 lives"},
  {"number": "13", "fact": "13 is considered to be unlucky"},
  {"number": "18", "fact": "Koalas sleep around 18 hours a day"},
  {"number": "21", "fact": "Blackjack. House wins"},
  {"number": "23", "fact": "In a room of 23 people, there's a 50 percent chance of two people having the same birthday"},
  {"number": "42", "fact": "The answer to the 'Ultimate Question of Life, the Universe, and Everything'"},
  {"number": "336", "fact": "The average golf ball has 336 dimples"},
  {"number": "1665", "fact": "The Eiffel Tower has 1665 steps"},
  {"number": "1913", "fact": "The Olympic flag was designed in 1913"},
  {"number": "1995", "fact": "The year I was born"},
  {"number": "3475", "fact": "The diameter of the moon - rounded up to an integer, the exact number is 3,474.8 km"},
  {"number": "86400", "fact": "The number of seconds in a day"},
  {"number": "300000", "fact": "The chances of being struck by lightning are 300,000 to one"},
  {"number": "31536000", "fact": "There are 31,536,000 seconds in a year"}
]`;


function generateRandomNumber() {
  // get max and min values from input boxes
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  // parse min and max values into integers
  min = parseInt(min);
  max = parseInt(max);

  // generate random number between min and max int values
  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  // display generated number on page
  document.getElementById("output").innerHTML = number;

  // check if fact for number exists
  checkForFunFact(number);
}

function checkForFunFact(number) {
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

export default RandomNumberGenerator
