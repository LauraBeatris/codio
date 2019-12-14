import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Auth';

import Repositories from './pages/Dashboard';
import RepositoryCode from './pages/RepositoryCode';
import RepositoryPullRequests from './pages/PullRequests';

import NotFound from './pages/NotFound';

import InitProvider from './context';

export default () => (
  <BrowserRouter>
    <Switch>
      <InitProvider>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard/repositories" exact component={Repositories} />
        <Route
          exact
          path="/dashboard/repositories/:repo"
          component={RepositoryCode}
        />
        <Route
          path="/dashboard/repositories/:repo/pullrequests"
          component={RepositoryPullRequests}
        />
        <Route component={NotFound} />
      </InitProvider>
    </Switch>
  </BrowserRouter>
);
