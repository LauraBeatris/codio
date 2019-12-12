import React, { Component } from 'react';

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
      const repos = await GithubApi.getRepositories()
        .then(res => res.data)
        .catch(() =>
          this.setState({ error: 'Was not possible to load the repositories' })
        )
        .then(() => this.setState({ loading: false }));
      console.log(repos);
    }
  }

  savingRepositories = async repos => {
    const { error } = this.state;
    const { session } = this.props;

    // // Verifing if the repositories is not null and if there's no error
    // // if (repos && repos.length > 0 && !error) {
    // //   // Getting the languages used in this repo
    // //   const repositories = repos.map(async r => {
    // //     const languages = await GithubApi.getLanguages(r.languages_url)
    // //       .then(res => res)
    // //       .catch(err => {
    // //         throw new Error('Was not possible to load the languages');
    // //       });

    // //     const repoWithLanguages = {
    // //       ...r,
    // //       languages,
    // //     };
    // //     console.log(repoWithLanguages);

    // //     return repoWithLanguages;
    // //   });

    //   // this.setState({ repositories });

    //   session.updateValues({ repositories });
    // }
  };

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
                  // languages={r.languages}
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

const ContextDashboard = props => (
  <InitConsumer>
    {session => <Dashboard {...props} session={session} />}
  </InitConsumer>
);

export { Dashboard, ContextDashboard as default };
