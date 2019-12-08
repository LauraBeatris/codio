import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Auth Pages */
import Login from './pages/Auth';
import Dashboard from './pages/Dashboard';

import Layout from './components/shared/Layout';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Layout>
        <Route path="/dashboard/projects" component={Dashboard} />
      </Layout>
    </Switch>
  </BrowserRouter>
);
