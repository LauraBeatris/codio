import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import { Container, Commit } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: null,
      repository: props.match.params.repo,
      language: null,
    };
  }

  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getRepository(title)
      .then(res =>
        this.setState({ commits: res[2].data, language: res[0].data.language })
      )
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false }));
  }

  render() {
    const { session, match } = this.props;
    const { repository, commits, language } = this.state;
    const { loading } = session;

    if (loading) return <Loading text="Loading Issues" />;
    return (
      <Layout
        items={[{ name: 'Back to Repository', repository, active: false }]}
      >
        <Helmet>
          <title> Codio | Commits </title>
        </Helmet>
        <Container>
          <MainHeader
            title={`${match.params.repo} | Commits`}
            language={language}
            user={session.user}
          />

          {commits && commits.length > 0 ? (
            commits.map(p => (
              <Commit>
                <p>
                  <strong> Author: </strong>
                  {p.commit.author.name
                    ? p.commit.author.name
                    : 'Author not found'}
                </p>
                <p>
                  {' '}
                  <strong>Message:</strong> {p.commit.message}{' '}
                </p>
                <p>
                  {' '}
                  <strong>{moment(p.commit.committer.date).fromNow()}</strong>
                </p>

                <p>
                  {' '}
                  <strong>Sha:</strong> {p.sha.slice(0, 9)}
                </p>
              </Commit>
            ))
          ) : (
            <p className="no-commit"> There's no commit available </p>
          )}
        </Container>
      </Layout>
    );
  }
}

const ContextCommits = props => (
  <InitConsumer>
    {session => <Commits {...props} session={session} />}
  </InitConsumer>
);

export { ContextCommits as default, Commits };
