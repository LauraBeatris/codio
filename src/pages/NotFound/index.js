import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaFrown } from 'react-icons/fa';

import { mainItems as items } from '../../fixtures/navItems';
import { FlexContainer } from '../../styles/containers';
import { Message } from './styles';
import Layout from '../../components/shared/Layout';

export default function NotFound({ text }) {
  return (
    <Layout items={items}>
      <Helmet>
        <title> Codio | Not Found </title>
      </Helmet>
      <FlexContainer column jc="center" ai="center">
        <FaFrown size="100" color="#aaaaac" />
        <Message>
          <h1>{text || 'Page Not Found'}</h1>
          <p>
            {' '}
            But don't worry, you can go{' '}
            <Link to="/dashboard/repositories">back to the Dashboard</Link>
          </p>
        </Message>
      </FlexContainer>
    </Layout>
  );
}
