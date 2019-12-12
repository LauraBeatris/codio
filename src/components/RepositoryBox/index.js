import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FaStar,
  FaJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import { MdCallSplit } from 'react-icons/md';
import { RepositoryBox, RepositoryDetails } from './styles';

export default function Repository({
  stars,
  forks,
  language,
  name,
  description,
}) {
  let icon = null;
  const languages = {
    HTML: <FaHtml5 color="red" />,
    JavaScript: <FaJs color="yellow" />,
    CSS: <FaCss3Alt color="blue" />,
    Java: <FaJava />,
    Python: <FaPython color="#346B9C" />,
  };
  icon = languages[language];

  return (
    <RepositoryBox>
      <div className="repository-info">
        <Link
          to={`/dashboard/repositories/${name}`}
          className="repository-name"
        >
          {name}
        </Link>
        <p className="repository-description">{description}</p>
      </div>

      <RepositoryDetails>
        <div className="stars-and-forks">
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
        </div>

        <div className="languages-container">
          <p>
            {icon} {language}
          </p>
        </div>
      </RepositoryDetails>
    </RepositoryBox>
  );
}

Repository.propTypes = {
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
