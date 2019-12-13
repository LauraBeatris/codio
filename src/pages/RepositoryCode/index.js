import React, { useEffect, useState } from 'react';

import { InitConsumer } from '../../context';
import Layout from '../../components/shared/Layout';
import MainHeader from '../../components/shared/Header';
import RepoInfo from '../../components/RepoInfo';
import InteractiveHeader from '../../components/InteractiveHeader';
import LastCommit from '../../components/LastCommit';
import Files from '../../components/Files';

import GithubApi from '../../services/api';

import orderFiles from '../../helpers/orderFiles';

import {
  HeaderInfo,
  HeaderContainer,
  RepoContainer,
  CommitsContainer,
} from './styles';

function Repository({ session, match }) {
  const { user } = session;
  const { repo: title } = match.params;

  const [repository, setRepository] = useState([]);
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);
  const [releases, setReleases] = useState([]);
  const [contributors, setContributors] = useState([]);

  const [files, setFiles] = useState([]);
  const orderedFiles = orderFiles(files);

  useEffect(() => {
    // Getting the data related to the repository
    const getRepo = async () => {
      await GithubApi.getRepository(title).then(res => {
        setRepository(res[0].data);
        setBranches(res[1].data);
        setCommits(res[2].data);
        setReleases(res[3].data);
        setContributors(res[4].data);
      });
    };

    // Getting the files of the repository
    const getFiles = async () => {
      await GithubApi.getFiles(title).then(res => {
        setFiles(res);
      });
    };

    getRepo();
    getFiles();
  }, []);

  return (
    <Layout>
      <RepoContainer>
        <HeaderContainer>
          <MainHeader projectTitle={title} user={user} />

          <HeaderInfo>
            <p> {repository.description} </p>
            <RepoInfo
              info={{
                branches: branches.length,
                commits: commits.length,
                releases: releases.length,
                contributors: contributors.length,
              }}
            />
            <InteractiveHeader
              options={{
                branches,
                keys: {
                  ssh: repository.ssh_url,
                  https: repository.clone_url,
                  download: `${repository.html_url}/archive/master.zip`,
                },
                watchers: repository.watchers,
              }}
            />
          </HeaderInfo>
        </HeaderContainer>

        <CommitsContainer>
          <div>
            {commits && commits[0] && <LastCommit commit={commits[0]} />}
          </div>
          {files && <Files files={orderedFiles} />}
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
