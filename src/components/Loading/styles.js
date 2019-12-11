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
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 9rem;

    transform: translate(-50%, -50%);
  }

  animation: ${jumping} 1.1s infinite alternate;
`;
