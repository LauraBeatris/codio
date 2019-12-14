import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #252429;

  p.no-repos-message {
    font-weight: bold;
    color: #dc5945;
    padding: 0rem 0.8rem;
  }
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 10.5rem);

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 12rem);
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

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: #252429;

  svg {
    margin-left: 0.2rem;
  }

  margin: 1rem 0.8rem;

  transition: 0.35s all ease-in-out;

  &:hover {
    transform: translateX(0.35rem);
  }

  &:active {
    transform: translateX(0rem);
  }
`;

export const Repository = styled.div``;
