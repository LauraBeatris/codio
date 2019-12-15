import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import { Container, Issue, FiltersContainer, IssuesState } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';
import MoreButton from '../../components/MoreButton';

import getLanguage from '../../helpers/getLanguage';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: null,
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

    await GithubApi.getIssues(title, page)
      .then(issues => this.setState({ issues }))
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false, error: false }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const { session, match } = this.props;
    const { repo: title } = match.params;
    const { page, state } = this.state;

    if (prevState.page !== page || prevState.state !== state) {
      session.updateValues({ loading: true, error: false });

      await GithubApi.getIssues(title, page, state)
        .then(issues => this.setState({ issues }))
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
    const { repository, issues, page } = this.state;
    const { loading } = session;

    let language = null;
    if (session.repositories)
      language = getLanguage(session.repositories, repository);

    if (loading) return <Loading text="Loading Issues" />;
    return (
      <Layout
        items={[{ name: 'Back to Repository', repository, active: false }]}
      >
        <Helmet>
          <title> Codio | Issues </title>
        </Helmet>
        <Container>
          <MainHeader
            title={`${match.params.repo} | Issues`}
            language={language}
            user={session.user}
          />
          <FiltersContainer>
            <MoreButton
              currentPage={page}
              handlePageChange={this.handlePageChange}
            />
            <IssuesState
              onChange={ev => this.setState({ state: ev.target.value })}
            >
              <option> Select a State </option>
              <option value="all">All</option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </IssuesState>
          </FiltersContainer>

          {issues && issues.length > 0 ? (
            issues.map(p => (
              <Issue>
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
              </Issue>
            ))
          ) : (
            <p className="no-issues"> There's no issue available </p>
          )}
        </Container>
      </Layout>
    );
  }
}

const ContextIssues = props => (
  <InitConsumer>
    {session => <Issues {...props} session={session} />}
  </InitConsumer>
);

export { ContextIssues as default, Issues };
