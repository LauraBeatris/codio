import styled from 'styled-components';

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: auto 18rem;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileInformations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-left: 1px solid #68676b;

  header.user-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    p {
      font-weight: 500;
      font-size: 1.3rem;
      color: #333238;
    }
  }

  ul.user-info {
    list-style: none;
    margin-top: 2rem;

    font-size: 0.9rem;
    color: #333238;

    strong {
      color: #68676b;
    }

    li {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      margin-bottom: 0.6rem;
    }
  }

  div.tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0rem;
  }

  .location,
  .last-update {
    color: #68676b;
    font-size: 0.9rem;
  }

  .location {
    span {
      display: block;
      color: #1366d6;
      font-weight: 500;
    }
    margin-bottom: 0.6rem;
    @media (max-width: 1000px) {
      padding-bottom: 1rem;
    }
  }
`;

export const Tag = styled.p`
  color: #1366d6;
  font-size: 0.9rem;

  font-weight: 500;
  padding: 0.5rem 0.5rem 0.5rem 0rem;
`;

export const Events = styled.div`
  h1 {
    margin: 1rem;
    color: #333238;
  }
`;

export const EventsGrid = styled.div`
  margin: 1rem;
`;

export const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.3rem 1rem;
  font-size: 0.9rem;
  border-top: 1px solid #333238;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #1366d6;
      font-weight: bold;
      text-decoration: none;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  p.created_at {
    align-self: flex-end;
  }
`;
