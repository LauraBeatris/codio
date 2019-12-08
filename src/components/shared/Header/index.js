import React from 'react';
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';

import {
  HeaderContainer,
  ProjectHeader,
  Profile,
  Notification,
} from './styles';

import ProjectImage from '../../../assets/project.png';
import ProfileImage from '../../../assets/profile.png';

export default function Header({ hasProjectInfo }) {
  return (
    <HeaderContainer hasProjectInfo={hasProjectInfo}>
      {hasProjectInfo && (
        <ProjectHeader>
          <img src={ProjectImage} alt="project name" />
          <p> Project Name </p>
        </ProjectHeader>
      )}
      <Profile>
        <Notification>
          <FaBell size="30" color="#333238" />
          <div className="count">5</div>
        </Notification>
        <img src={ProfileImage} alt="profile" />
      </Profile>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  hasProjectInfo: false,
};

Header.propTypes = {
  hasProjectInfo: PropTypes.bool,
};
