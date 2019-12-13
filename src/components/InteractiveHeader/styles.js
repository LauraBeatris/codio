import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0.8rem;
  margin-top: 1rem;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    padding: 0;
  }

  div#first-column {
    display: flex;
    justify-content: flex-start;

    @media (min-width: 320px) and (max-width: 767px) {
      justify-content: center;
    }
  }

  div#second-column {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:not(:last-child) {
      margin-right: 1rem;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 0.3rem;
      justify-content: center;
    }
  }
`;
