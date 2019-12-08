// Projects
import React, { Component } from 'react';
import Header from '../../components/shared/Header';
import { ProjectsContainer } from './styles';

export default class Dashboard extends Component {
  state = {
    projects: [],
  };

  render() {
    return (
      <>
        <ProjectsContainer>
          <Header hasProjectInfo />
        </ProjectsContainer>
      </>
    );
  }
}
