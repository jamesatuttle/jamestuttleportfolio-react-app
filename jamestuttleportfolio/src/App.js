import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './stylesheets/main.css';
import Home from './components/views/Home';
import DrawingUsingCss from './components/views/DrawingUsingCss';

const App = () => {
    return (
      <div className="App">
        <Home />
      </div>
    );
}

export default App;
