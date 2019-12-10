import React, { Component } from 'react';

import Header from '../../components/shared/Header';
import Repository from '../../components/RepositoryBox';
import Layout from '../../components/shared/Layout';

import { ProjectsContainer, Repositories } from './styles';

import RepositoriesFixtures from './fixtures';
import { InitConsumer } from '../../context';

class Dashboard extends Component {
  state = {
    repositories: RepositoriesFixtures,
  };

  render() {
    const { repositories } = this.state;
    return (
      <Layout>
        <ProjectsContainer>
          <Header title="Select a Repository" />
          <Repositories>
            {repositories.map((r, key) => (
              <Repository
                key={String(key)}
                name={r.name}
                description={r.description}
                stars={r.stars}
                forks={r.forks}
                languages={r.languages}
              />
            ))}
          </Repositories>
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
