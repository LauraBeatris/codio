import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 20rem auto;

  font-size: 0.8rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    grid-template-columns: auto;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  background: #252429;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    position: relative;
    margin: 1rem;
    padding-bottom: 1rem;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    img {
      height: 3rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 500;
      color: #fff;
    }
  }
`;

export const ProjectList = styled.ul`
  list-style: none;
  color: #fff;

  .title {
    color: #747475;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }
`;

export const Item = styled.li`
  background: ${props => (props.active ? '#302F32' : 'inherit')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 1rem;

  position: relative;

  font-size: 0.9rem;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #302f32;
    border-left: 0.25rem solid #fff;
  }

  ${props =>
    props.active &&
    css`
      border-left: 0.25rem solid #fff;
    `}

  svg {
    margin-right: 0.8rem;
  }

  .number {
    position: absolute;
    left: 90%;
    color: #747475;
    font-weight: bold;
  }
`;

export const CodioHome = styled(ProjectList)`
  margin-top: 1.3rem;

  .last {
    margin: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const AuthItems = styled(CodioHome)``;

export const MenuMobile = styled.header`
  @media (min-width: 1025px) {
    display: none;
  }

  position: fixed;
  bottom: 0;
  z-index: 100;

  background: #252429;
  width: 100%;
  padding: 0.5rem;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img#logo-mobile {
      height: 2rem;
    }

    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  div.menu-wrapper {
    position: relative;
  }
`;
