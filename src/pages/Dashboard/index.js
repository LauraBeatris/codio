// Projects
import React, { Component } from 'react';
import Header from '../../components/shared/Header';
import { Aside, ProjectsContainer } from './styles';

export default class Dashboard extends Component {
  state = {
    projects: [],
  };

  render() {
    return (
      <>
        <Aside>
          <h1> Teste </h1>
        </Aside>
        <ProjectsContainer>
          <Header hasProjectInfo />
        </ProjectsContainer>
      </>
    );
  }
}
