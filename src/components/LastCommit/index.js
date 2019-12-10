import React from 'react';
import PropTypes from 'prop-types';
import { LastCommitContainer } from './styles';

export default function Last({ data }) {
  const { avatar, comment, version, time, name } = data;
  return (
    <LastCommitContainer className="last-commit">
      <div>
        <img className="avatar" src={avatar} alt="Github Avatar" />
        <p className="author-name">{name}</p>
        <p className="commit-comment">{comment}</p>
      </div>

      <p>
        <span> {version} </span>
        <span> {time} </span>
      </p>
    </LastCommitContainer>
  );
}

Last.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
