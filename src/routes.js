import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Auth Pages */
import Login from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Repository from './pages/Repository';

import InitProvider from './context';

export default () => (
  <BrowserRouter>
    <Switch>
      <InitProvider>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard/repositories" exact component={Dashboard} />
        <Route path="/dashboard/repositories/:repo" component={Repository} />
      </InitProvider>
    </Switch>
  </BrowserRouter>
);
