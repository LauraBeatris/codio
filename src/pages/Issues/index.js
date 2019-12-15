import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import { Container, Issue } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: null,
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

    await GithubApi.getRepository(title)
      .then(res =>
        this.setState({ issues: res[6].data, language: res[0].data.language })
      )
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false, error: false }));
  }

  render() {
    const { session, match } = this.props;
    const { repository, issues, language } = this.state;
    const { loading } = session;

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
