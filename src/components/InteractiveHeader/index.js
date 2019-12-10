import React from 'react';
import { FaEye, FaHistory } from 'react-icons/fa';

import { Container } from './styles';
import RepoSelect from '../RepoSelect';
import RepoButton from '../RepoButton';

export default function InteractiveHeader() {
  return (
    <Container>
      <div id="first-column">
        <RepoSelect
          backgroundColor="#fff"
          textColor="#3f3838"
          text="Master"
          borderColor="#adadad"
        />
      </div>
      <div id="second-column">
        <RepoButton icon={<FaHistory size="20" />} />
        <RepoButton isWatch number="5" icon={<FaEye size="20" />} />
        <RepoSelect
          backgroundColor="#3BB249"
          textColor="#fff"
          text="Clone or Download"
        />
      </div>
    </Container>
  );
}
