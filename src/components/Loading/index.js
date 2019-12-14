import React from 'react';
import Helmet from 'react-helmet';

import { LoadingContainer } from './styles';
import Logo from '../../assets/transparent-logo.png';

export default function Loading({ text }) {
  return (
    <LoadingContainer>
      <Helmet>
        <title> Codio | Loading... </title>
      </Helmet>
      <div>
        <img src={Logo} alt="Codio - Loading" />
        {text && <p>{text}</p>}
      </div>
    </LoadingContainer>
  );
}
