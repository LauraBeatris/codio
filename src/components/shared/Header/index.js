import React from 'react';
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';

import { InitConsumer } from '../../../context';
import {
  HeaderContainer,
  ProjectHeader,
  Profile,
  Notification,
} from './styles';

import ProjectImage from '../../../assets/project.png';

function Header({ hasProjectInfo, title, user, session }) {
  const { avatar_url } = session.user;
  return (
    <HeaderContainer hasProjectInfo={hasProjectInfo || title}>
      {hasProjectInfo && (
        <ProjectHeader>
          <img src={avatar_url} alt="profile user" />
          <p> Project Name </p>
        </ProjectHeader>
      )}
      {!!title && <p> {title} </p>}
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
  hasProjectInfo: false,
  title: '',
};

Header.propTypes = {
  hasProjectInfo: PropTypes.bool,
  title: PropTypes.string,
};

const HeaderConsumer = props => (
  <InitConsumer>
    {session => <Header {...props} session={session} />}
  </InitConsumer>
);

export { HeaderConsumer as default, Header };
