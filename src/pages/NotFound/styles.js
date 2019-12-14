import styled from 'styled-components';

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #d95844;
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;

    a {
      font-weight: bold;
      color: #d95844;
    }
  }
`;
