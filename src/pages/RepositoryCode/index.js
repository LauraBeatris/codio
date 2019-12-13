import React from 'react';

import { InitConsumer } from '../../context';
import Layout from '../../components/shared/Layout';
import MainHeader from '../../components/shared/Header';
import RepoInfo from '../../components/RepoInfo';
import InteractiveHeader from '../../components/InteractiveHeader';
import LastCommit from '../../components/LastCommit';
import Files from '../../components/Files';

import info from './fixtures';
import commitFixture from '../../components/LastCommit/fixtures';
import filesFixture from '../../components/Files/fixtures';

import {
  HeaderInfo,
  HeaderContainer,
  RepoContainer,
  CommitsContainer,
} from './styles';

function Repository({ session }) {
  const { user } = session;
  return (
    <Layout>
      <RepoContainer>
        <HeaderContainer>
          <MainHeader hasProjectInfo user={user} />

          <HeaderInfo>
            <p> Pacman Artifical Inteligence Python Project by Laura </p>
            <RepoInfo info={info} />
            <InteractiveHeader />
          </HeaderInfo>
        </HeaderContainer>

        <CommitsContainer>
          <div>
            <LastCommit data={commitFixture} />
          </div>
          <Files files={filesFixture} />
        </CommitsContainer>
      </RepoContainer>
    </Layout>
  );
}

const RepositoryConsumer = props => (
  <InitConsumer>
    {session => <Repository {...props} session={session} />}
  </InitConsumer>
);

export { RepositoryConsumer as default, Repository };
