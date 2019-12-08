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
      profile: null,
    };
  }

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
