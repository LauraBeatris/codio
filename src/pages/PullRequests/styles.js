import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.8rem;
`;

export const PullRequest = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0.8rem;
  border: 1px solid #bebebe;
  border-radius: 0.3rem;
  width: 100%;

  p {
    font-size: 0.9rem;
    text-align: center;
  }
`;
