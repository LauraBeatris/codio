import styled from 'styled-components';

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: #252429;

  svg {
    margin-left: 0.2rem;
  }

  margin: 1rem 0.8rem;

  transition: 0.35s all ease-in-out;

  &:hover {
    transform: translateX(0.35rem);
  }

  &:active {
    transform: translateX(0rem);
  }
`;

export const BackButton = styled(MoreButton)`
  margin-right: 0.7rem;

  &:hover {
    transform: translateX(-0.35rem);
  }

  &:active {
    transform: translateX(0rem);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
