import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import MainHeader from '../../components/shared/Header';
import { InitConsumer } from '../../context';

import { Container, PullRequest } from './styles';
import Layout from '../../components/shared/Layout';
import GithubApi from '../../services/api';

import Loading from '../../components/Loading';

class PullRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pullRequests: null,
      repository: props.match.params.repo,
      language: null,
    };
  }

  // Getting the repo name from route param and finding in the context
  async componentDidMount() {
    const { session, match } = this.props;
    const { repo: title } = match.params;

    session.updateValues({ loading: true, error: false });

    await GithubApi.getRepository(title)
      .then(res => {
        this.setState({
          pullRequests: res[5].data,
          language: res[0].data.language,
        });
      })
      .catch(() => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false }));
  }

  render() {
    const { session, match } = this.props;
    const { repository, pullRequests, language } = this.state;
    const { loading } = session;

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

          {pullRequests &&
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
            ))}
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
