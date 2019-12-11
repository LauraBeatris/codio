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

  updateValues(data) {
    return this.setState({ ...this.state, ...data });
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
  children: PropTypes.element.isRequired,
};

export default withRouter(InitProvider);
