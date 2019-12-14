import React, { Component } from 'react';
import queryString from 'query-string';
import Helmet from 'react-helmet';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';
// import { Container } from './styles';
import Layout from '../../components/shared/Layout';

class Commits extends Component {
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
          <title> Codio | Commits </title>
        </Helmet>
        <p> Pull Requests </p>
      </Layout>
    );
  }
}

const ContextCommits = props => (
  <InitConsumer>
    {session => <Commits {...props} session={session} />}
  </InitConsumer>
);

export { ContextCommits as default, Commits };
