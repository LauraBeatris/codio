import styled from 'styled-components';

export const RepoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export const HeaderContainer = styled.div`
  flex: display;
  flex-direction: column;
`;

export const HeaderInfo = styled.div`
  color: #a5a5a5;
  font-size: 0.9rem;
  padding: 0.8rem;
  font-weight: 500;
  margin-left: 1.3rem;

  @media (min-width: 300px) and (max-width: 767px) {
    margin-left: 0rem;
  }
`;

export const InteractiveHeader = styled.div`
  padding: 0.8rem;

  div {
  }
`;

export const FilesContainer = styled.div``;
