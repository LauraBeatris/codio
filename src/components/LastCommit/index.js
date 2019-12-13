import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { LastCommitContainer } from './styles';

export default function Last({ commit }) {
  const { author, commit: nestedInfo, sha } = commit;
  const { login, avatar_url } = author;
  const { committer, message } = nestedInfo;
  const { date } = committer;

  const formattedDate = moment(date).fromNow();
  const formattedSha = sha.slice(0, 9);
  return (
    <LastCommitContainer className="last-commit">
      <div>
        <img className="avatar" src={avatar_url} alt="Github Avatar" />
        <p className="author-name">{login}</p>
        <p className="commit-comment">{message}</p>
      </div>

      <p className="sha-and-date">
        <span> {formattedSha} </span>
        <span> {formattedDate} </span>
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
