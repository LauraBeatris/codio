import React from 'react';

import { Container } from './styles';
import RepoSelect from '../RepoSelect';

export default function InteractiveHeader() {
  return (
    <Container>
      <RepoSelect
        backgroundColor="#3BB249"
        textColor="#fff"
        text="Clone or Download"
      />
      <RepoSelect
        backgroundColor="#fff"
        textColor="#3f3838"
        text="Master"
        borderColor="#adadad"
      />
    </Container>
  );
}
