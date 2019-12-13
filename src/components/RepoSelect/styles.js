import styled from 'styled-components';

export const DownloadOrCloneContainer = styled.div`
  position: relative;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 12rem;
  border-radius: 0.2rem;
  border: 0.04rem solid #3f3838;
  height: 2.29rem;

  background: ${props => props.backgroundColor};
  cursor: pointer;

  .download-icon {
    position: absolute;
    top: 50%;
    right: 85%;
    transform: translateY(-50%);
  }

  .select-icon {
    position: absolute;
    top: 50%;
    left: 86%;
    transform: translateY(-50%);
  }

  p {
    position: absolute;
    color: ${props => props.textColor};
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
    font-weight: 500;
    width: 100%;
  }

  select:hover .select-wrapper {
    background: #000;
  }
  padding: 0.5rem 1.4rem;

  select {
    opacity: 0;
    width: 100%;
    padding: 0.5rem 1.4rem;
    cursor: pointer;
  }
`;

export const CloneOrDownload = styled.div`
  position: relative;
  transition: all 1s ease;
  width: 100%;

  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  top: 115%;
  right: 0%;
  width: 20rem;
  border: 1px solid #000;
  background: #fff;

  padding: 0.5rem;
  color: #333238;
  font-size: 0.85rem;

  strong.method {
    font-size: 1rem;
  }

  p {
    margin: 0.5rem 0rem;
  }

  a {
    background: #fff;
    border: none;
    align-self: center;
    font-weight: 500;
    text-decoration: none;
    color: #1366d6;

    &:hover {
      text-decoration: underline;
    }
  }

  button.change-method {
    position: absolute;
    color: #1366d6;
    font-size: 0.8rem;
    border: none;
    background: #fff;
    font-weight: 500;
    right: 2%;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    width: 100%;
  }

  div.input-group {
    display: flex;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      svg {
        padding: 0;
      }
    }

    input {
      flex: 1;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    input,
    button {
      height: inherit;
      padding: 0.3rem;
    }
  }
`;
