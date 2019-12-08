import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, Project, Profile } from './styles';

import ProjectImage from '../../../assets/project.png';
import ProfileImage from '../../../assets/profile.png';

export default function Header({ hasProjectInfo }) {
  return (
    <HeaderContainer>
      {hasProjectInfo && (
        <Project>
          <img src={ProjectImage} alt="project name" />
          <p> Project Name </p>
        </Project>
      )}
      <Profile>
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
