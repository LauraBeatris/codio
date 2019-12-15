import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../RepoInfoItem';
import { FlexContainer as RepoInfoContainer } from '../../styles/containers';

export default function RepoInfo({ info }) {
  return (
    <RepoInfoContainer
      full
      jc="space-between"
      ai="center"
      paddingDesk="2.5rem 2rem"
      paddingMob="1rem 0rem"
    >
      {Object.keys(info).map((item, key) => (
        <RepoItem title={item} value={info[item]} key={String(key)} />
      ))}
    </RepoInfoContainer>
  );
}

RepoInfo.propTypes = {
  info: PropTypes.shape({
    branches: PropTypes.number.isRequired,
    commits: PropTypes.number.isRequired,
    releases: PropTypes.number.isRequired,
    contributors: PropTypes.number.isRequired,
  }).isRequired,
};
