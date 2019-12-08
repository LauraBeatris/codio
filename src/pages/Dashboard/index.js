// Projects
import React, { Component } from 'react';

import Header from '../../components/shared/Header';
import Repository from '../../components/Repository';
import { ProjectsContainer, Repositories } from './styles';

import RepositoriesFixtures from './fixtures';

export default class Dashboard extends Component {
  state = {
    repositories: RepositoriesFixtures,
  };

  render() {
    const { repositories } = this.state;
    return (
      <>
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
      </>
    );
  }
}
