import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import {
  Container,
  PullRequest,
  FiltersContainer,
  PullRequestState,
} from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';
import MoreButton from '../../components/MoreButton';

import getLanguage from '../../helpers/getLanguage';

class PullRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pullRequests: null,
      repository: props.match.params.repo,
      language: null,
      page: 1,
      state: 'all',
    };
  }

  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;
    const { page } = this.state;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getPullRequests(title, page)
      .then(pullRequests => this.setState({ pullRequests }))
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false, error: false }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const { session, match } = this.props;
    const { repo: title } = match.params;
    const { page, state } = this.state;

    if (prevState.page !== page || prevState.state !== state) {
      session.updateValues({ loading: true, error: false });

      await GithubApi.getPullRequests(title, page, state)
        .then(pullRequests => this.setState({ pullRequests }))
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
    const { repository, pullRequests, page } = this.state;
    const { loading } = session;

    let language = null;
    if (session.repositories)
      language = getLanguage(session.repositories, repository);

    if (loading) return <Loading text="Loading Issues" />;

    if (loading) return <Loading text="Loading Pull Requests" />;

    return (
      <Layout
        items={[{ name: 'Back to Repository', repository, active: false }]}
      >
        <Helmet>
          <title> Codio | Pull Requests </title>
        </Helmet>
        <Container>
          <MainHeader
            title={`${match.params.repo} | Pull Requests`}
            language={language}
            user={session.user}
          />

          <FiltersContainer>
            <MoreButton
              currentPage={page}
              handlePageChange={this.handlePageChange}
            />
            <PullRequestState
              onChange={ev => this.setState({ state: ev.target.value })}
            >
              <option> Select a State </option>
              <option value="all">All</option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </PullRequestState>
          </FiltersContainer>

          {pullRequests && pullRequests.length > 0 ? (
            pullRequests.map(p => (
              <PullRequest>
                <p>
                  <strong> {p.title} </strong>
                </p>
                <p>
                  {' '}
                  <strong>Status:</strong> {p.state}{' '}
                </p>
                <p>
                  {' '}
                  <strong>Created at:</strong> {moment(p.created_at).fromNow()}
                </p>
                {p.state === 'closed' && (
                  <p>
                    {' '}
                    <strong>Closed at:</strong>{' '}
                    {moment(moment.closed_at).fromNow()}
                  </p>
                )}
                {p.updated_at && (
                  <p>
                    {' '}
                    <strong>Updated at:</strong>{' '}
                    {moment(moment.updated_at).fromNow()}
                  </p>
                )}
              </PullRequest>
            ))
          ) : (
            <p className="no-pulls"> There's no pull request available </p>
          )}
        </Container>
      </Layout>
    );
  }
}

const ContextPullRequests = props => (
  <InitConsumer>
    {session => <PullRequests {...props} session={session} />}
  </InitConsumer>
);

export { ContextPullRequests as default, PullRequests };
