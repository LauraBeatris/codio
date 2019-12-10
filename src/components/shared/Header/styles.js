import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.hasProjectInfo ? 'space-between' : 'flex-end'};
  align-items: center;
  padding: 0.8rem;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333238;

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Notification = styled.div`
  position: relative;
  margin-right: 1rem;

  .count {
    position: absolute;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.1rem 0.4rem;
    border-radius: 100%;
    background: #3bb249;

    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 55%;
    left: 58%;
  }
`;
