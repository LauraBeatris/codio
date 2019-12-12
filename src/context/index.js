import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export const InitContext = React.createContext({});

class InitProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedRepository: null,
      repositories: null,
      user: null,
      updateValues: data => this.updateValues(data),
    };
  }

  async componentDidMount() {
    await this.bootstrap();
    this.withoutDataRedirect();
  }

  componentDidUpdate(prevProps, prevState) {
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

  updateValues = data => {
    return this.setState({ ...this.state, ...data });
  };

  // Verifing if the session has the user data, if not, it will redirect to the login page
  // Blocking problems with requests that doesn't have the user data
  withoutDataRedirect = () => {
    const { user } = this.state;
    if (!user) {
      window.location.href = '/';
    }
  };

  // Verifing if there's user or repositories data stored at localStorage and then saving in the state
  bootstrap = () => {
    const user = JSON.parse(localStorage.getItem('codio_user'));
    const repositories = JSON.parse(localStorage.getItem('codio_repositories'));
    if (user) this.setState({ user });
    if (repositories) this.setState({ repositories });
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
