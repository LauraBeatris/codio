import styled, { keyframes } from 'styled-components';

const jumping = keyframes`
   from {
    transform: translate3d(0);
  }
  to {
    transform: translate3d(0, -1rem, 0);
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 9rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  animation: ${jumping} 1.1s infinite alternate;
`;
