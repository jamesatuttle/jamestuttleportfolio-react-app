import React from 'react';
import Home from './components/views/Home';
import ProjectsFull from './components/views/ProjectsFull';
import DrawingUsingCss from './components/views/projectsPages/DrawingUsingCss';
import GenerateRandomNumber from './components/views/projectsPages/GenerateRandomNumber';
import NotFound from './components/views/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReactAppProjectPage from './components/views/projectsPages/ReactAppProjectPage';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
          <Route exact path="/projects" component={ProjectsFull} />
          <Route exact path="/projects/drawing-using-css" component={DrawingUsingCss} />
          <Route exact path="/projects/random-number-generator" component={GenerateRandomNumber} />
          <Route exact path="/projects/this-react-app" component={ReactAppProjectPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
