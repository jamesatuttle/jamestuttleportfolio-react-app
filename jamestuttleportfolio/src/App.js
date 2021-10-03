import React from 'react'
import './stylesheets/main.css';
import Home from './components/views/Home';

require('dotenv').config()

const App = () => {
    return (
      <div className="App">
        <Home />
      </div>
    );
}

export default App;
