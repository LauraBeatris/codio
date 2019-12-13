import React from 'react';
import { Link } from 'react-router-dom';
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
  CodioHome,
  AuthItems,
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
      { name: 'Code', active: false },
      { name: 'Issues', number: issues, active: false },
      { name: 'Pull Requests', number: pullRequests, active: false },
      { name: 'Projects', number: projects, active: false },
      { name: 'Wiki', active: false },
      { name: 'Insights', active: false },
    ];
    const icons = [
      <FaCode size="24" />,
      <FaExclamationCircle size="24" />,
      <FaCodeBranch size="24" />,
      <FaFolder size="24" />,
      <FaBookOpen size="24" />,
      <FaSignal size="24" />,
    ];

    return items.map((i, key) => {
      return (
        <Item key={String(key)} active={i.active}>
          {icons[key]}
          <p className="name">{i.name}</p>
          {i.number !== undefined && <p className="number">{i.number}</p>}
        </Item>
      );
    });
  };

  const atHome = actualPage === '/dashboard/repositories';

  return (
    <GridContainer>
      <Aside>
        <LogoContainer>
          <Link
            to="/dashboard/repositories"
            title={!atHome ? 'Back to dashboard' : 'Codio'}
          >
            <img src={Logo} alt="Codio Git" />
            <p> Codio </p>
          </Link>
        </LogoContainer>

        <ProjectList>
          <li className="title"> Project </li>
          {renderItems()}
        </ProjectList>

        <CodioHome>
          <li className="title"> Codio Home </li>
          {['Feature', 'Business', 'Explore', 'Marketplace', 'Pricing'].map(
            (i, key) => (
              <Item key={String(key)}>
                <p id="name">{i}</p>
              </Item>
            )
          )}
          <div className="last" />
        </CodioHome>

        <AuthItems>
          {['Sign In', 'Register'].map((i, key) => (
            <Item key={String(key)}>
              <p id="name">{i}</p>
            </Item>
          ))}
        </AuthItems>
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
