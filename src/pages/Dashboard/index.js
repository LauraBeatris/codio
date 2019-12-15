import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Helmet from 'react-helmet';
import { Beforeunload } from 'react-beforeunload';
import GithubApi from '../../services/api';

import Header from '../../components/shared/Header';
import Repository from '../../components/RepositoryBox';
import Layout from '../../components/shared/Layout';

import { ProjectsContainer, Repositories, MoreButton } from './styles';

import { InitConsumer } from '../../context';

import Loading from '../../components/Loading';

class Dashboard extends Component {
  static propTypes = {
    session: PropTypes.shape({
      updateValues: PropTypes.func.isRequired,
      user: PropTypes.shape.isRequired,
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      pagedRepositories: null,
      total: 0,
      currentPage: 0,
      currentLimit: 9,
    };
  }

  // Responsible for the pagination
  handlePageChange = count => {
    const { currentPage, currentLimit } = this.state;
    const { session } = this.props;
    const { repositories } = session;

    const pagedRepositories = repositories.slice(
      currentPage + count,
      currentLimit + count
    );

    // Verifing if the pagination already achieved the limit
    const isLimited = pagedRepositories.length === 0;

    // If achieved the limit, will reset the values
    this.setState({
      pagedRepositories: isLimited ? null : pagedRepositories,
      currentPage: isLimited ? 0 : currentPage + count,
      currentLimit: isLimited ? 9 : currentLimit + count,
    });
  };

  render() {
    const { pagedRepositories } = this.state;
    const { session, location } = this.props;
    const { user, repositories, loading } = session;

    if (loading) return <Loading text="Loading Repositories" />;

    return (
      <Layout
        actualPage={location.pathname}
        items={[{ name: 'Dashboard', active: '/dashboard/repositories' }]}
      >
        <Beforeunload onBeforeunload={() => "You'll lose your data!"} />
        <Helmet>
          <title> Codio | Repositories </title>
        </Helmet>
        <ProjectsContainer>
          {user && <Header title="Select a Repository" dash user={user} />}
          {!!repositories && repositories.length > 0 ? (
            <Repositories>
              {!pagedRepositories
                ? repositories
                    .slice(0, 9)
                    .map((r, key) => (
                      <Repository
                        key={String(key)}
                        name={r.name}
                        description={r.description}
                        stars={r.starsgazers_count}
                        forks={r.forks_count}
                        language={r.language}
                      />
                    ))
                : pagedRepositories.map((r, key) => (
                    <Repository
                      key={String(key)}
                      name={r.name}
                      description={r.description}
                      stars={r.stargazers_count}
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

          <MoreButton onClick={() => this.handlePageChange(9)}>
            Next Page
            <FaAngleDoubleRight />
          </MoreButton>
        </ProjectsContainer>
      </Layout>
    );
  }
}

const ContextDashboard = props => (
  <InitConsumer>
    {session => <Dashboard {...props} session={session} />}
  </InitConsumer>
);

export { Dashboard, ContextDashboard as default };
