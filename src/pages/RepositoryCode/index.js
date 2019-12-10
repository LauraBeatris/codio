import React from 'react';

import { InitConsumer } from '../../context';
import Layout from '../../components/shared/Layout';
import MainHeader from '../../components/shared/Header';
import RepoInfo from '../../components/RepoInfo';
import info from './fixtures';

import {
  HeaderInfo,
  InteractiveHeader,
  FilesContainer,
  HeaderContainer,
  RepoContainer,
} from './styles';

function Repository() {
  return (
    <Layout>
      <RepoContainer>
        <HeaderContainer>
          <MainHeader hasProjectInfo />
          <HeaderInfo>
            <p> Pacman Artifical Inteligence Python Project by Laura </p>
            <RepoInfo info={info} />
          </HeaderInfo>
          <InteractiveHeader />
        </HeaderContainer>
      </RepoContainer>
    </Layout>
  );
}

const RepositoryConsumer = props => (
  <InitConsumer>
    {session => <Repository {...props} session={session} />}
  </InitConsumer>
);

export default RepositoryConsumer;
