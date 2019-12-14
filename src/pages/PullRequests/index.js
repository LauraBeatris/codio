import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { mainItems as items } from '../../fixtures/navItems';
// import { Container } from './styles';
import Layout from '../../components/shared/Layout';

export default class PullRequests extends Component {
  render() {
    return (
      <Layout items={items}>
        <Helmet>
          <title> Codio | Repository </title>
        </Helmet>
        <p> Pull Requests </p>
      </Layout>
    );
  }
}
