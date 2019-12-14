import React, { Component } from 'react';
import Helmet from 'react-helmet';
import queryString from 'query-string';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';
// import { Container } from './styles';
import Layout from '../../components/shared/Layout';

class PullRequests extends Component {
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
          <title> Codio | Pull Requests </title>
        </Helmet>
        <p> Pull Requests </p>
      </Layout>
    );
  }
}

const ContextPullRequests = props => (
  <InitConsumer>
    {session => <PullRequests {...props} session={session} />}
  </InitConsumer>
);

export { ContextPullRequests as default, PullRequests };
