import React from 'react';
import PropTypes from 'prop-types';
import { RepoButtonContainer, Watch } from './styles';

export default function RepoButton({ icon: Icon, number, isWatch }) {
  return (
    <RepoButtonContainer isWatch={isWatch}>
      {Icon}
      {isWatch && (
        <Watch>
          <p> Watch </p>
          {number}
        </Watch>
      )}
    </RepoButtonContainer>
  );
}

RepoButton.defaultProps = {
  number: 0,
  isWatch: false,
};

RepoButton.propTypes = {
  icon: PropTypes.element.isRequired,
  number: PropTypes.number,
  isWatch: PropTypes.bool,
};
