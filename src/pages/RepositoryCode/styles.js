import styled from 'styled-components';

export const RepoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 20rem 2fr;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderInfo = styled.div`
  color: #a5a5a5;
  font-size: 0.9rem;
  padding: 0.8rem;
  font-weight: 500;
  margin-left: 1.3rem;

  @media (min-width: 300px) and (max-width: 767px) {
    margin-left: 0rem;
  }
`;

export const CommitsContainer = styled.div`
  color: #a5a5a5;
  font-size: 0.9rem;
  padding: 0.8rem;
  font-weight: 500;
  margin-left: 1.9rem;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: 0rem;
  }

  display: grid;
  grid-template-rows: 2.5rem auto;
`;
