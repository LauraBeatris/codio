import React, { Component } from 'react';
import queryString from 'query-string';
import Helmet from 'react-helmet';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';
// import { Container } from './styles';
import Layout from '../../components/shared/Layout';

class Issues extends Component {
  state = { repository: null };

  // Getting the repo name from route param and finding in the context
  componentDidMount() {
    const { session, location } = this.props;
    const { repositories } = session;
    console.log(repositories, session);
    // const repoName = queryString.parse(location.search);
    // const repository = Object.values(repositories).find(
    //   r => r.name === repoName
    // );

    // return this.setState({ repository });
  }

  render() {
    return (
      <Layout items={items}>
        <Helmet>
          <title> Codio | Issues </title>
        </Helmet>
        <p> Issues </p>
      </Layout>
    );
  }
}

const ContextIssues = props => (
  <InitConsumer>
    {session => <Issues {...props} session={session} />}
  </InitConsumer>
);

export { ContextIssues as default, Issues };
