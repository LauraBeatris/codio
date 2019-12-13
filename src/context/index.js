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
      repositories:
        JSON.parse(localStorage.getItem('codio_repositories')) || null,
      user: JSON.parse(localStorage.getItem('codio_user')) || null,
      loading: false,
      error: null,
      updateValues: data => this.updateValues(data),
    };
  }

  async componentDidMount() {
    // Verifing if the session has the user data, if not, it will redirect to the login page
    // Blocking problems with requests that doesn't have the user data
    await this.withoutUserRedirect();

    // Loading repositories
    await this.loadRepositories();
  }

  componentDidUpdate(prevProps, prevState) {
    // Updating the user and repositories data on the localStorage
    const { user, repositories } = this.state;
    if (user !== prevState.user) {
      localStorage.setItem('codio_user', JSON.stringify(user));
    }

    if (
      JSON.stringify(repositories) !== JSON.stringify(prevState.repositories)
    ) {
      localStorage.setItem('codio_repositories', JSON.stringify(repositories));
    }
  }

  // Updating the values of context state
  updateValues = data => {
    return this.setState({ ...this.state, ...data });
  };

  // Bootstrap function to load the repositories
  loadRepositories = async () => {
    return GithubApi.getRepositories()
      .then(repositories => this.setState({ repositories }))
      .catch(error => this.setState({ error }));
  };

  // Redirecting the user to the auth page if there's no data related to him storage
  withoutUserRedirect = () => {
    if (!JSON.parse(localStorage.getItem('codio_user'))) {
      const message = decodeURIComponent('Please, login to see the dashboard');
      this.props.history.push(`/?message=${message}`);
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
  children: PropTypes.array.isRequired,
};

export default withRouter(InitProvider);
