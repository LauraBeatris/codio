import styled from 'styled-components';

export const Aside = styled.aside`
  background: #252429;
  width: 100%;

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const ProjectsContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #252429;
`;
