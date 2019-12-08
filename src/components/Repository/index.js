import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaJs } from 'react-icons/fa';
import { MdCallSplit } from 'react-icons/md';
import { RepositoryBox, RepositoryDetails } from './styles';

export default function Repository({
  stars,
  forks,
  languages,
  name,
  description,
}) {
  return (
    <RepositoryBox>
      <div className="repository-info">
        <p className="repository-name">{name}</p>
        <p className="repository-description">{description}</p>
      </div>

      <RepositoryDetails>
        {stars > 0 && (
          <div className="stars-container">
            <FaStar id="start" />
            <p className="stars-count">{stars}</p>
          </div>
        )}

        {forks > 0 && (
          <div className="forks-container">
            <MdCallSplit />
            <p className="forks-count">{forks}</p>
          </div>
        )}

        {Object.keys(languages).length === 0 && (
          <div className="languages-container">
            {Object.keys(languages).map(language => (
              <p>{language}</p>
            ))}
          </div>
        )}
      </RepositoryDetails>
    </RepositoryBox>
  );
}

Repository.propTypes = {
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  languages: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
