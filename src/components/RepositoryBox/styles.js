import styled from 'styled-components';

export const RepositoryBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.2rem;
  min-height: 9rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
  margin: 0.5rem 0.8rem;

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 1rem 0rem;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 0rem;
    width: 90%;
  }

  .repository-name {
    text-decoration: none;
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
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;

  font-weight: 400;
  color: #666666;
  font-size: 0.9rem;

  .stars-and-forks {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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

  .languages-container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 767px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    p {
      margin-right: 0.3rem;
      font-weight: 400;
      color: #666666;
      font-size: 0.9rem;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin: 0rem 0.2rem 0rem 0.4rem;
      }
    }
  }
`;
