import React from 'react';

import PropTypes from 'prop-types';
import { GridContainer } from './styles';

export default function Layout({ children }) {
  return <GridContainer>{children}</GridContainer>;
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
