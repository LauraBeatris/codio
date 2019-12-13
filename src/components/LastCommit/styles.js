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

      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 0.7rem;
      }
    }
  }

  p.sha-and-date {
    font-weight: 500;
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-left: 0.2rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
