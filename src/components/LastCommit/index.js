import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import isMobile from '../../helpers/isMobile';

import { LastCommitContainer } from './styles';

export default function Last({ commit }) {
  const { author, commit: nestedInfo, sha } = commit;
  let login;
  let avatar_url = 'Not Found';
  if (author) {
    login = author.login;
    avatar_url = author.avatar_url;
  }

  const { committer } = nestedInfo;
  let { message } = nestedInfo;
  const { date } = committer;

  if (message.length > 80 && isMobile()) {
    message = message.slice(0, 50);
  }

  const formattedDate = moment(date).fromNow();
  const formattedSha = sha.slice(0, 9);

  return (
    <LastCommitContainer className="last-commit">
      <div>
        <img className="avatar" src={avatar_url} alt="Github Avatar" />
        <p className="author-name">{login}</p>
        <p className="commit-comment">
          {message} {isMobile() && '...'}
        </p>
      </div>

      <p className="sha-and-date">
        <span> {formattedSha} </span>
        <span> {formattedDate} </span>
      </p>
    </LastCommitContainer>
  );
}

Last.propTypes = {
  commit: PropTypes.shape().isRequired,
};
