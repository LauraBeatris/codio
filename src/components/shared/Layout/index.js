import React from 'react';

import PropTypes from 'prop-types';
import {
  FaCode,
  FaExclamationCircle,
  FaCodeBranch,
  FaFolder,
  FaBookOpen,
  FaSignal,
} from 'react-icons/fa';

import {
  GridContainer,
  Aside,
  LogoContainer,
  ProjectList,
  Item,
} from './styles';
import Logo from '../../../assets/transparent-logo.png';

export default function Layout({
  children,
  issues,
  pullRequests,
  projects,
  actualPage,
}) {
  const renderItems = () => {
    const items = [
      { name: 'Code', active: true },
      { name: 'Issues', number: issues },
      { name: 'Pull Requests', number: pullRequests },
      { name: 'Projects', number: projects },
      { name: 'Wiki' },
      { name: 'Insights' },
    ];
    const icons = [
      <FaCode size="25" />,
      <FaExclamationCircle size="25" />,
      <FaCodeBranch size="25" />,
      <FaFolder size="25" />,
      <FaBookOpen size="25" />,
      <FaSignal size="25" />,
    ];

    return items.map((i, key) => {
      return (
        <Item active={i.active}>
          {icons[key]}
          <p id="name">{i.name}</p>
          {i.number !== undefined && <p id="number">{i.number}</p>}
        </Item>
      );
    });
  };

  return (
    <GridContainer>
      <Aside>
        <LogoContainer>
          <img src={Logo} alt="Codio Git" />
          <p> Codio </p>
        </LogoContainer>

        <ProjectList>
          <li id="title"> Project </li>
          {renderItems()}
        </ProjectList>
      </Aside>
      {children}
    </GridContainer>
  );
}

Layout.defaultProps = {
  issues: 0,
  pullRequests: 0,
  projects: 0,
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  issues: PropTypes.number,
  pullRequests: PropTypes.number,
  projects: PropTypes.number,
};
