import styled from 'styled-components';

export const LastCommitContainer = styled.div`
  font-weight: 400;

  img {
    border-radius: 50%;
    height: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 0.5rem;
      font-weight: 400;

      &.author-name {
        color: #3f3838;
      }
    }
  }

  p.sha-and-date span {
    font-weight: 500;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
