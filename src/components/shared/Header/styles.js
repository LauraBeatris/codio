import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;

  img {
    height: 2.3rem;
    border-radius: 50%;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333238;

  p.project-title {
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 0.5rem;
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
  margin-top: 0.5rem;

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
