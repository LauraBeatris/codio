import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 28rem auto;

  font-size: 2.5rem;

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: auto;
  }
`;
