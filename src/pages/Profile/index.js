import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import { FaPushed, FaStar, FaPlusCircle } from 'react-icons/fa';

import { InitConsumer } from '../../context';
import GithubApi from '../../services/api';

import {
  ProfileGrid,
  ProfileInformations,
  Tag,
  Events,
  EventsGrid,
  EventItem,
} from './styles';
import Layout from '../../components/shared/Layout';

import Loading from '../../components/Loading';

class Profile extends Component {
  state = {
    events: [],
  };

  async componentDidMount() {
    const { session } = this.props;

    session.updateValues({ loading: true, error: false });
    await GithubApi.getEvents()
      .then(events => this.setState({ events }))
      .catch(err => session.updateValues({ error: true }))
      .then(() => session.updateValues({ loading: false }));
  }

  render() {
    const { session } = this.props;
    const { loading, user } = session;
    const { events } = this.state;

    const { avatar_url, login } = user;

    if (loading) return <Loading text="Loading User Events" />;

    /* Getting the amount of forks and stars received by the user and the languages
       user by the user\
    */
    let starsReceived = 0;
    let forksByUser = 0;
    const languages = [];
    session.repositories &&
      session.repositories.forEach(repo => {
        starsReceived += repo.stargazers_count;
        forksByUser += repo.forks;

        if (!languages.includes(repo.language) && repo.language !== null) {
          languages.push(repo.language);
        }
      });

    const userInfo = {
      Followers: user.followers,
      Following: user.following,
      'Stars received': starsReceived,
      'Forks by user': forksByUser,
    };

    return (
      <Layout atProfile items={[{ name: 'Dashboard', active: false }]}>
        <Helmet>
          <title> Codio | Profile </title>
        </Helmet>
        <ProfileGrid>
          <Events>
            <h1>Latest Activies</h1>

            <EventsGrid>
              {events && events.length > 0 ? (
                events.map(active => {
                  // Push Event -> action - started , Watch Event, PullRequestEvent

                  let eventIcon = null;
                  let eventText = null;

                  if (
                    active.type === 'WatchEvent' &&
                    active.payload.action &&
                    active.payload.action === 'started'
                  ) {
                    eventText = (
                      <p>
                        Starred a repo{' '}
                        <a className="repo-ref" href={active.repo.url}>
                          {active.repo.name}
                        </a>
                      </p>
                    );

                    eventIcon = <FaStar size="30" color="#F9A72E" />;
                  } else if (active.type === 'PushEvent') {
                    eventText = (
                      <p>
                        {' '}
                        Pushed {active.payload.commits.length} to{' '}
                        <a className="repo-ref" href={active.repo.url}>
                          {active.repo.name}
                        </a>{' '}
                      </p>
                    );

                    eventIcon = <FaPlusCircle size="30" color="#4EC163" />;
                  } else if (active.type === 'PullRequestEvent') {
                    eventText = (
                      <p>
                        {' '}
                        Created a{' '}
                        <a href={active.payload.pull_request.url}>
                          pull request
                        </a>{' '}
                        on {active.repo.name}
                      </p>
                    );
                    eventIcon = <FaPushed size="30" color="#a5a5a5" />;
                  }

                  return (
                    <EventItem>
                      <div>
                        {eventIcon}
                        {eventText}
                      </div>

                      <p className="created-at">
                        {' '}
                        {moment(active.created_at).fromNow()}{' '}
                      </p>
                    </EventItem>
                  );
                })
              ) : (
                <p> There's no active available </p>
              )}
            </EventsGrid>
          </Events>
          <ProfileInformations>
            <header className="user-header">
              <img src={avatar_url} alt="User" />
              <p> {login} </p>
            </header>

            <ul className="user-info">
              {Object.entries(userInfo).map(info => (
                <li>
                  <strong>{info[0]}</strong>
                  {info[1]}
                </li>
              ))}
            </ul>

            <div className="tags">
              {languages.map(language => (
                <Tag>{language}</Tag>
              ))}
            </div>

            <p className="location">
              {' '}
              Location <span>{user.location}</span>
            </p>

            <p className="last-update">
              Last update on {moment(user.updated_at).format('MMM M, YYYY')}
            </p>
          </ProfileInformations>
        </ProfileGrid>
      </Layout>
    );
  }
}

const ContextProfile = props => (
  <InitConsumer>
    {session => <Profile {...props} session={session} />}
  </InitConsumer>
);

export { ContextProfile as default, Profile };
