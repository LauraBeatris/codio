import styled, { css } from 'styled-components';

export const RepoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.isWatch ? '6rem' : '2.5rem')};

  border-radius: 0.3rem;
  border: 1px solid #3f3838;
  padding: 0.5rem;

  svg {
    color: #3f3838;
    ${props =>
      props.isWatch &&
      css`
        margin-right: 0.5rem;
      `}
  }
`;

export const Watch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #333238;
    margin-right: 0.5rem;
  }
`;
