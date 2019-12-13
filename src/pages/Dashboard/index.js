import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Header from '../../components/shared/Header';
import Repository from '../../components/RepositoryBox';
import Layout from '../../components/shared/Layout';

import { ProjectsContainer, Repositories, MoreButton } from './styles';
import { InitConsumer } from '../../context';

import Loading from '../../components/Loading';

import GithubApi from '../../services/api';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: null,
      pagedRepositories: null,
      loading: true,
      error: null,
      total: 0,
      currentPage: 0,
      currentLimit: 9,
    };
  }

  static propTypes = {
    session: PropTypes.shape({
      repositories: PropTypes.array.isRequired,
      updateValues: PropTypes.func.isRequired,
      user: PropTypes.shape.isRequired,
    }).isRequired,
  };

  async componentDidMount() {
    const { session } = this.props;
    this.setState({ loading: true });

    // Getting the user repositories and after the promise being rejected/resolved it will set the loading to false
    if (!session.repositories) {
      GithubApi.getRepositories()
        .then(repositories => {
          this.setState({
            repositories,
            total: repositories.length,
          });
          return session.updateValues({ repositories });
        })
        .catch(err => {
          return this.setState({
            error: 'Was not possible to load the repositories',
          });
        })
        .then(() => this.setState({ loading: false }));
    }
  }

  // Responsible for the pagination
  handlePageChange = count => {
    const { repositories, currentPage, currentLimit } = this.state;

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
    const { repositories, pagedRepositories, loading } = this.state;
    const { session } = this.props;
    const { user } = session;
    if (loading) return <Loading />;

    return (
      <Layout>
        <ProjectsContainer>
          <Header title="Select a Repository" user={user} />
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

          <MoreButton onClick={ev => this.handlePageChange(9)}>
            View More
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
