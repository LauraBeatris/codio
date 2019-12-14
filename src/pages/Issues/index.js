import React, { Component } from 'react';
import queryString from 'query-string';
import Helmet from 'react-helmet';

import { InitConsumer } from '../../context';
import { mainItems as items } from '../../fixtures/navItems';

// import { Container } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = { issues: null, repository: props.match.params.repo };
  }

  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getRepository(title)
      .then(res => {
        this.setState({ issues: res[6].data });
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
