import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

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
  AuthItems,
  CodioHome,
  MenuMobile,
} from './styles';
import Logo from '../../../assets/transparent-logo.png';

export default function Layout({ children, items, actualPage }) {
  const authItems = [
    { name: 'Sign In', active: '/' },
    { name: 'Register', active: false },
  ];

  // Static Items - Just for layout
  const codioHomeItems = [
    'Feature',
    'Business',
    'Explore',
    'Marketplace',
    'Pricing',
  ];

  // Rendering the items that are passed for each page
  const renderItems = () => {
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
        <Item key={String(key)} active={i.active === actualPage}>
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
      <MenuMobile className="mobile-header">
        <Link
          to="/dashboard/repositories"
          title={!atHome ? 'Back to dashboard' : 'Codio'}
        >
          <img id="logo-mobile" src={Logo} alt="Codio Git" />
          <p> Codio </p>
        </Link>
        <Menu right>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
        {/* <MobileNav>
          <li />
        </MobileNav> */}
      </MenuMobile>
      <Aside>
        <LogoContainer>
          <Link
            to="/dashboard/repositories"
            title={!atHome ? 'Back to dashboard' : 'Codio'}
          >
            <img id="logo-desktop" src={Logo} alt="Codio Git" />
            <p> Codio </p>
          </Link>
        </LogoContainer>

        <ProjectList>
          <li className="title">
            {' '}
            {!atHome ? 'Project' : 'Select a repository'}{' '}
          </li>
          {renderItems()}
        </ProjectList>

        <CodioHome>
          <li className="title"> Codio Home </li>
          {codioHomeItems.map((i, key) => (
            <Item key={String(key)}>
              <p id="name">{i}</p>
            </Item>
          ))}
          <div className="last" />
        </CodioHome>

        <AuthItems>
          {authItems.map((i, key) =>
            i.name === 'Sign In' ? (
              <Item
                key={String(key)}
                onClick={() => window.location.replace('/')}
                active={i.active === actualPage}
              >
                <p id="name">{i.name}</p>
              </Item>
            ) : (
              <Item key={String(key)} active={i.active === actualPage}>
                <p id="name">{i.name}</p>
              </Item>
            )
          )}
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
