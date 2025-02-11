import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Beforeunload } from 'react-beforeunload';

import { InitConsumer } from '../../context';
import Layout from '../../components/shared/Layout';
import MainHeader from '../../components/shared/Header';
import RepoInfo from '../../components/RepoInfo';
import InteractiveHeader from '../../components/InteractiveHeader';
import LastCommit from '../../components/LastCommit';
import Files from '../../components/Files';

import Loading from '../../components/Loading';
import NotFound from '../NotFound';

import GithubApi from '../../services/api';

import { sortFiles } from '../../helpers/sort';
import { repositoryItems } from '../../fixtures/navItems';

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

  const [currentBranch, setCurrentBranch] = useState('master');

  useEffect(() => {
    const saveRepoInfo = (commits, pullRequests, issues) => {
      return session.updateValues({ commits, pullRequests, issues });
    };

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

          saveRepoInfo(res[0].data, res[5].data, res[6].data);
        })
        .catch(() => session.updateValues({ error: true }))
        .then(() => session.updateValues({ loading: false }));
    };

    // Getting the files of the repository
    const getFiles = async ref => {
      await GithubApi.getFiles(title, ref).then(res => {
        setFiles(res);
      });
    };

    getRepo();
    getFiles(currentBranch);
  }, [title]);

  // On change change -> Get the files from that reference
  useEffect(() => {
    const getFiles = async ref => {
      await GithubApi.getFiles(title, ref).then(res => {
        setFiles(res);
      });
    };

    getFiles(currentBranch);
  }, [currentBranch]);

  const items = repositoryItems(
    location.pathname,
    issues.length,
    pullRequests.length,
    commits.length,
    title
  );

  const handleBranchChange = ref => setCurrentBranch(ref);

  if (session.loading) return <Loading text="Loading Repository..." />;
  if (session.error) return <NotFound text="Repository Not Found" />;

  const { language } = repository;
  return (
    <Layout items={items} atHome actualPage={location.pathname}>
      <Beforeunload onBeforeunload={() => "You'll lose your data!"} />
      <Helmet>
        <title> Codio | {title} </title>
      </Helmet>
      <RepoContainer>
        <HeaderContainer>
          <MainHeader title={title} language={language} user={user} />

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
              onChange={ref => handleBranchChange(ref)}
              currentBranch={currentBranch}
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
