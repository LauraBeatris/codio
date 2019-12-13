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

  display: ${props => (props.active ? 'flex' : 'none')};
  position: absolute;
  top: 115%;
  right: 0%;
  width: 20rem;
  height: 10rem;
  border: 1px solid #000;
  background: #fff;

  padding: 0.5rem;
`;
