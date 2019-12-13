import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaHistory } from 'react-icons/fa';

import { Container } from './styles';
import BranchSelect, { DownloadOrClone } from '../RepoSelect';
import RepoButton from '../RepoButton';

import { sortBranches } from '../../helpers/sort';

export default function InteractiveHeader({ options }) {
  const { watchers, keys, branches } = options;

  let sortedBranches = null;
  if (branches) {
    sortedBranches = sortBranches(branches);
  }

  return (
    <Container>
      <div id="first-column">
        <BranchSelect
          backgroundColor="#fff"
          textColor="#3f3838"
          text="Master"
          borderColor="#3f3838"
          options={sortedBranches}
        />
      </div>
      <div id="second-column">
        <RepoButton icon={<FaHistory size="20" />} />
        <RepoButton isWatch number={watchers} icon={<FaEye size="20" />} />
        <DownloadOrClone
          backgroundColor="#3BB249"
          textColor="#fff"
          text="Clone or Download"
          keys={keys}
        />
      </div>
    </Container>
  );
}

InteractiveHeader.propTypes = {
  branches: PropTypes.shape.isRequired,
};
