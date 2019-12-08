import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Auth Pages */
import Login from './pages/Auth';
import Signup from './pages/Auth/Signup';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  </BrowserRouter>
);
