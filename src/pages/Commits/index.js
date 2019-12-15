import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import { Container, Commit } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';
import MoreButton from '../../components/MoreButton';

import getLanguage from '../../helpers/getLanguage';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: null,
      repository: props.match.params.repo,
      language: null,
      page: 1,
    };
  }

  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;
    const { page } = this.state;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getCommits(title, page)
      .then(commits => this.setState({ commits }))
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false, error: false }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const { session, match } = this.props;
    const { repo: title } = match.params;
    const { page } = this.state;

    if (prevState.page !== page) {
      session.updateValues({ loading: true, error: false });

      await GithubApi.getCommits(title, page)
        .then(commits => this.setState({ commits }))
        .catch(() => session.updateValues({ error: true }))
        .then(() => session.updateValues({ loading: false, error: false }));
    }
  }

  handlePageChange = action => {
    const { page } = this.state;
    if (!action && page > 1) {
      this.setState({ page: page - 1 });
    } else if (action) {
      this.setState({ page: page + 1 });
    }
  };

  render() {
    const { session, match } = this.props;
    const { repository, commits, page } = this.state;
    const { loading } = session;

    let language = null;
    if (session.repositories)
      language = getLanguage(session.repositories, repository);

    if (loading) return <Loading text="Loading Commits" />;
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
          <MoreButton
            currentPage={page}
            handlePageChange={this.handlePageChange}
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
            <p className="no-commits"> There's no commit available </p>
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
