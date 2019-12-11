import styled from 'styled-components';

export const FileItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin-right: 0.5rem;
  }

  .file-name {
    text-transform: lowercase;
    color: #3f3838;
  }

  .commit-comment {
    font-weight: 400;
    margin-left: 4.3rem;
  }

  p {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
