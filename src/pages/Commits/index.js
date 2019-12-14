import React, { Component } from 'react';
import queryString from 'query-string';
import Helmet from 'react-helmet';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';

// import { Container } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = { commits: null, repository: props.match.params.repo };
  }

  // Getting the repo name from route param and finding in the context
  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getRepository(title)
      .then(res => {
        this.setState({ commits: res[2].data });
      })
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false }));
  }

  render() {
    const { repository } = this.state;
    return (
      <Layout
        items={[{ name: 'Back to Repository', repository, active: false }]}
      >
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
