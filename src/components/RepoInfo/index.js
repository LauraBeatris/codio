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
      {info.map((item, key) => (
        <RepoItem item={item} key={String(key)} />
      ))}
    </RepoInfoContainer>
  );
}

RepoInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
