import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaHistory } from 'react-icons/fa';

import { Container } from './styles';
import RepoSelect from '../RepoSelect';
import RepoButton from '../RepoButton';

export default function InteractiveHeader({ options }) {
  const { watchers, keys, branches } = options;

  let formattedBranches = null;
  if (branches) {
    formattedBranches = branches.sort((a, b) => {
      if (a.name === 'master') {
        return -1;
      }
    });
  }

  console.log(formattedBranches);

  return (
    <Container>
      <div id="first-column">
        <RepoSelect
          backgroundColor="#fff"
          textColor="#3f3838"
          text="Master"
          borderColor="#3f3838"
          options={formattedBranches}
        />
      </div>
      <div id="second-column">
        <RepoButton icon={<FaHistory size="20" />} />
        <RepoButton isWatch number={watchers} icon={<FaEye size="20" />} />
        <RepoSelect
          backgroundColor="#3BB249"
          textColor="#fff"
          text="Clone or Download"
        />
      </div>
    </Container>
  );
}

InteractiveHeader.propTypes = {
  branches: PropTypes.shape.isRequired,
};
