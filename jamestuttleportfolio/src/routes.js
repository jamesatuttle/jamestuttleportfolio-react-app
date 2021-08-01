import React from 'react';
import Home from './components/views/Home';
import DrawingUsingCss from './components/views/DrawingUsingCss';
import References from './components/views/References';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Drawing-using-css" component={DrawingUsingCss} />
        <Route exact path="/References" component={References} />
      </Switch>
    </div>
  );
};
