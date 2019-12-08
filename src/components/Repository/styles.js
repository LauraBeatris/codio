import styled from 'styled-components';

export const RepositoryBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.2rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
  margin: 0.5rem 0.6rem;

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 1rem 1rem;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 1rem;
    width: 90%;
  }

  .repository-name {
    &:hover {
      text-decoration: underline;
    }
    cursor: pointer;
    color: #f66247;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  .repository-description {
    font-weight: 400;
    color: #666666;
    font-size: 0.9rem;
  }
`;

export const RepositoryDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;

  .stars-container,
  .forks-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s all ease;

    p {
      margin: 0rem 0.8rem 0 0.2rem;
    }

    cursor: pointer;

    &:hover {
      transform: translatey(-0.1rem);

      svg {
        color: red;
      }
    }
  }
`;
