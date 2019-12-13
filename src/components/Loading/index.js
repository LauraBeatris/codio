import React from 'react';

import { LoadingContainer } from './styles';
import Logo from '../../assets/transparent-logo.png';

export default function Loading({ text }) {
  return (
    <LoadingContainer>
      <div>
        <img src={Logo} alt="Codio - Loading" />
        {text && <p>{text}</p>}
      </div>
    </LoadingContainer>
  );
}
