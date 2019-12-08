// Projects
import React, { Component } from 'react';
import Header from '../../components/shared/Header';
import { ProjectsContainer, Repositories, Repository } from './styles';

export default class Dashboard extends Component {
  state = {
    repositories: [],
  };

  render() {
    return (
      <>
        <ProjectsContainer>
          <Header title="Repositories"/>
          <Repositories>
            {this.state.repositories.map((r, key) => (
              <Repository />
            ))}
          </Repositories>
        </ProjectsContainer>
      </>
    );
  }
}
