import React, { Component } from 'react';
import Layout from '../../components/shared/Layout';
import Context, { InitConsumer } from '../../context';

// import { Container } from './styles';

class Repository extends Component {
  render() {
    return (
      <Layout>
        <div />
      </Layout>
    );
  }
}

const RepositoryConsumer = props => (
  <InitConsumer>
    {session => <Repository {...props} session={session} />}
  </InitConsumer>
);

export default RepositoryConsumer;
