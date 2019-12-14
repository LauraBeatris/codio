import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import { InitConsumer } from '../../context';
import Layout from '../../components/shared/Layout';
import MainHeader from '../../components/shared/Header';
import RepoInfo from '../../components/RepoInfo';
import InteractiveHeader from '../../components/InteractiveHeader';
import LastCommit from '../../components/LastCommit';
import Files from '../../components/Files';

import Loading from '../../components/Loading';
import NotFound from "../NotFound";

import GithubApi from '../../services/api';

import { sortFiles } from '../../helpers/sort';

import {
  HeaderInfo,
  HeaderContainer,
  RepoContainer,
  CommitsContainer,
} from './styles';

function Repository({ session, match, location }) {
  const { user } = session;
  const { repo: title } = match.params;

  const [repository, setRepository] = useState([]);
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);
  const [releases, setReleases] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [pullRequests, setPullRequests] = useState([]);
  const [issues, setIssues] = useState([]);

  const [files, setFiles] = useState([]);
  const orderedFiles = sortFiles(files);

  useEffect(() => {
    // Getting the data related to the repository
    const getRepo = async () => {
      session.updateValues({ loading: true, error: false });

      await GithubApi.getRepository(title)
        .then(res => {
          setRepository(res[0].data);
          setBranches(res[1].data);
          setCommits(res[2].data);
          setReleases(res[3].data);
          setContributors(res[4].data);
          setPullRequests(res[5].data);
          setIssues(res[6].data);
        })
        .catch(() => session.updateValues({ error: true }))
        .then(() => session.updateValues({ loading: false }));
    };

    // Getting the files of the repository
    const getFiles = async () => {
      await GithubApi.getFiles(title).then(res => {
        setFiles(res);
      });
    };

    getRepo();
    getFiles();
  }, [title]);

  const items = [
    { name: 'Code', active: location.pathname },
    { name: 'Issues', number: issues.length, active: false },
    { name: 'Pull Requests', number: pullRequests.length, active: false },
    { name: 'Wiki', active: false },
    { name: 'Insights', active: false },
  ];

  if (session.loading) return <Loading text="Loading Repository..." />;
  if (session.error) return <NotFound text="Repository Not Found" />;

  return (
    <Layout items={items} atHome actualPage={location.pathname}>
      <Helmet>
        <title> Codio | {title} </title>
      </Helmet>
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
