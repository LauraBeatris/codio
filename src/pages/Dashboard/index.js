import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/shared/Header';
import Repository from '../../components/RepositoryBox';
import Layout from '../../components/shared/Layout';

import { ProjectsContainer, Repositories } from './styles';
import { InitConsumer } from '../../context';

import Loading from '../../components/Loading';

import GithubApi from '../../services/api';

class Dashboard extends Component {
  state = {
    repositories: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const { session } = this.props;
    this.setState({ loading: true });

    // Getting the user repositories and after the promise being rejected/resolved it will set the loading to false
    if (!session.repositories) {
      GithubApi.getRepositories()
        .then(repositories => {
          this.setState({ repositories });
          return session.updateValues({ repositories });
        })
        .catch(err => {
          console.log('error', err);
          return this.setState({
            error: 'Was not possible to load the repositories',
          });
        })
        .then(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { repositories, loading } = this.state;
    const { session } = this.props;
    const { user } = session;
    if (loading) return <Loading />;

    return (
      <Layout>
        <ProjectsContainer>
          <Header title="Select a Repository" user={user} />
          {!!repositories && repositories.length > 0 ? (
            <Repositories>
              {repositories.map((r, key) => (
                <Repository
                  key={String(key)}
                  name={r.name}
                  description={r.description}
                  stars={r.starsgazers_count}
                  forks={r.forks_count}
                  language={r.language}
                />
              ))}
            </Repositories>
          ) : (
            <p className="no-repos-message">
              {' '}
              Your account doesn't have any repository in the moment.{' '}
            </p>
          )}
        </ProjectsContainer>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  session: PropTypes.shape({
    repositories: PropTypes.array.isRequired,
    updateValues: PropTypes.func.isRequired,
  }).isRequired,
};

const ContextDashboard = props => (
  <InitConsumer>
    {session => <Dashboard {...props} session={session} />}
  </InitConsumer>
);

export { Dashboard, ContextDashboard as default };
