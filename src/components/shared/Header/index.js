import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

import {
  HeaderContainer,
  ProjectHeader,
  Profile,
  Notification,
} from './styles';

import Php from '../../../assets/php.svg';
import Java from '../../../assets/java.svg';
import JavaScript from '../../../assets/javascript.svg';
import CSharp from '../../../assets/hashtag.svg';
import TypeScript from '../../../assets/typescript.svg';
import Python from '../../../assets/python.svg';
import Html from '../../../assets/html-5.svg';
import CSS from '../../../assets/css-3.svg';

function Header({ title, language, user, dash, ...rest }) {
  console.log(rest);
  const { avatar_url } = user;

  const images = {
    HTML: Html,
    JavaScript,
    Java,
    Python,
    PHP: Php,
    'C#': CSharp,
    TypeScript,
    CSS,
  };

  return (
    <HeaderContainer hasProjectInfo={!!title}>
      {title ? (
        <ProjectHeader>
          {language && (
            <img
              src={dash ? avatar_url : images[language]}
              alt="profile icon"
              className="profile-icon"
            />
          )}
          <p className="project-title"> {title} </p>
        </ProjectHeader>
      ) : (
        'Repositories'
      )}
      <Profile>
        <Notification>
          <FaBell size="30" color="#333238" />
          <div className="count">5</div>
        </Notification>
        <Link to="/profile">
          <img src={avatar_url} alt="profile" />
        </Link>
      </Profile>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
