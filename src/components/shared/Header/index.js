import React from 'react';
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';

import {
  HeaderContainer,
  ProjectHeader,
  Profile,
  Notification,
} from './styles';

function Header({ projectTitle, user }) {
  const { avatar_url } = user;
  return (
    <HeaderContainer hasProjectInfo={!!projectTitle}>
      {projectTitle ? (
        <ProjectHeader>
          <img src={avatar_url} alt="profile user" />
          <p className="project-title"> {projectTitle} </p>
        </ProjectHeader>
      ) : (
        'Repositories'
      )}
      <Profile>
        <Notification>
          <FaBell size="30" color="#333238" />
          <div className="count">5</div>
        </Notification>
        <img src={avatar_url} alt="profile" />
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
