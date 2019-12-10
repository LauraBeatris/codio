import styled from 'styled-components';

export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8rem;
  color: #a5a5a5;
  text-transform: capitalize;

  svg {
    margin-right: 1rem;

    @media (min-width: 300px) and (max-width: 767px) {
      &:not(:first-child) {
        margin: 0rem 0.3rem 0rem 1rem;
      }

      &:first-child {
        margin: 0rem 0.3rem 0rem 0rem;
      }
    }
  }

  div {
    display: inherit;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-size: 1rem;
      color: #4a494f;
    }
  }
`;
