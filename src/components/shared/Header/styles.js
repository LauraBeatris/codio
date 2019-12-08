import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.hasProjectInfo ? 'space-between' : 'flex-end'};
  align-items: center;
  padding: 0.8rem;

  @media (min-width: 320px) and (max-width: 900px) {
    margin: 0rem 1rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333238;
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
    background: tomato;

    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 55%;
    left: 58%;
  }
`;
