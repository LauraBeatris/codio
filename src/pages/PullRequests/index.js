import React, { Component } from 'react';
import Helmet from 'react-helmet';
import MainHeader from '../../components/shared/Header';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';

// import { Container } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class PullRequests extends Component {
  constructor(props) {
    super(props);
    this.state = { pullRequests: null, repository: props.match.params.repo };
  }

  // Getting the repo name from route param and finding in the context
  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getRepository(title)
      .then(res => {
        this.setState({ pullRequests: res[5].data });
      })
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false }));
  }

  render() {
    const { session } = this.props;
    const { repository } = this.state;
    const { loading } = session;

    if (loading) return <Loading text="Loading Pull Requests" />;

    return (
      <Layout
        items={[{ name: 'Back to Repository', repository, active: false }]}
      >
        <Helmet>
          <title> Codio | Pull Requests </title>
        </Helmet>
        <p> {repository} </p>
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
