import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Auth';

import Repositories from './pages/Dashboard';
import RepositoryCode from './pages/RepositoryCode';
import RepositoryPullRequests from './pages/PullRequests';
import RepositoryCommits from './pages/Commits';
import RepositoryIssues from './pages/Issues';

import NotFound from './pages/NotFound';

import InitProvider from './context';

export default () => (
  <BrowserRouter>
    <InitProvider>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard/repositories" exact component={Repositories} />
        <Route
          path="/dashboard/repositories/:repo"
          exact
          component={RepositoryCode}
        />
        <Route
          path="/dashboard/repositories/:repo/pullrequests"
          component={RepositoryPullRequests}
        />
        <Route
          path="/dashboard/repositories/:repo/commits"
          component={RepositoryCommits}
        />
        <Route
          path="/dashboard/repositories/:repo/issues"
          component={RepositoryIssues}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </InitProvider>
  </BrowserRouter>
);
