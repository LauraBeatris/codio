import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import GithubApi from '../services/api';

export const InitContext = React.createContext({});

class InitProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedRepository: null,
      repositories: null,
      user: JSON.parse(localStorage.getItem('codio_user')) || null,
      issues: null,
      pullRequests: null,
      commits: null,
      loading: false,
      error: null,
      updateValues: data => this.updateValues(data),
      loadRepositories: login => this.loadRepositories(login),
    };
  }

  async componentDidMount() {
    // Verifing if the session has the user data, if not, it will redirect to the login page
    // Blocking problems with requests that doesn't have the user data
    await this.withoutDataRedirect();

    const { user } = this.state;

    // Loading repositories in the first mount
    if (user) {
      await this.loadRepositories(
        user || JSON.parse(localStorage.getItem('codio_user'))
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { user, repositories } = this.state;

    // Updating the user and repositories data on the localStorage
    if (JSON.stringify(user) !== JSON.stringify(prevState.user)) {
      localStorage.setItem('codio_user', JSON.stringify(user));
      this.updateValues({ user });
      this.loadRepositories(user);
    }

    // Loading the repositories on user change
    if (
      JSON.stringify(repositories) !== JSON.stringify(prevState.repositories)
    ) {
      this.updateValues({ repositories });
    }
  }

  // Updating the values of context state
  updateValues = data => {
    return this.setState({ ...this.state, ...data });
  };

  // Bootstrap function to load the repositories
  loadRepositories = async login => {
    this.setState({ loading: true });
    await GithubApi.getRepositories(login)
      .then(repositories => this.setState({ repositories }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ loading: false }));
  };

  // Redirecting the user to the auth page if there's no data related to him storage
  withoutDataRedirect = () => {
    const { history } = this.props;
    const { user } = this.state;
    if (!JSON.parse(localStorage.getItem('codio_user')) || !user.login) {
      const message = decodeURIComponent('Please, login to see the dashboard');
      history.push(`/?message=${message}`);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <InitContext.Provider value={this.state}>{children}</InitContext.Provider>
    );
  }
}

export const InitConsumer = InitContext.Consumer;

InitProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(InitProvider);
