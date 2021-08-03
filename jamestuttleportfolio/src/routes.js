import React from 'react';
import Home from './components/views/Home';
import AboutPage from './components/views/AboutPage';
import ProjectsPage from './components/views/ProjectsPage';
import ContactPage from './components/views/ContactPage';
import DrawingUsingCss from './components/views/DrawingUsingCss';
import GenerateRandomNumber from './components/views/GenerateRandomNumber';
import NotFound from './components/views/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/drawing-using-css" component={DrawingUsingCss} />
        <Route exact path="/random-number-generator" component={GenerateRandomNumber} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
