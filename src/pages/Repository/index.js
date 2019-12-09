import React from 'react';
import Layout from '../../components/shared/Layout';
import { InitConsumer } from '../../context';
import MainHeader from '../../components/shared/Header';

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
          <HeaderInfo />
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
