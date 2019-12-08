import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #252429;
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 10.5rem);

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-rows: repeat(3, 12rem);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Repository = styled.div``;
