import React from 'react';
import Home from './components/views/Home';
import DrawingUsingCss from './components/views/projectsPages/DrawingUsingCss';
import GenerateRandomNumber from './components/views/projectsPages/GenerateRandomNumber';
import NotFound from './components/views/NotFound';
import { Route, Switch } from 'react-router-dom';
import ReactAppProjectPage from './components/views/projectsPages/ReactAppProjectPage';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Projects from './components/views/Projects';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects/drawing-using-css" component={DrawingUsingCss} />
          <Route exact path="/projects/random-number-generator" component={GenerateRandomNumber} />
          <Route exact path="/projects/this-react-app" component={ReactAppProjectPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
