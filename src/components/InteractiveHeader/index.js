import React from 'react';
import { FaEye, FaHistory } from 'react-icons/fa';

import { Container } from './styles';
import RepoSelect from '../RepoSelect';
import RepoButton from '../RepoButton';

export default function InteractiveHeader() {
  return (
    <Container>
      <RepoButton isWatch number="5" icon={<FaEye size="20" />} />
      <RepoButton icon={<FaHistory />} />
    </Container>
  );
}
