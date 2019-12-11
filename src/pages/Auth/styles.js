import styled, { css } from 'styled-components';

export const AuthContainer = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  margin-bottom: 1rem;

  img {
    height: 5rem;
    position: absolute;
    margin-left: 1rem;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.1rem;
    color: #403b33;

    position: absolute;
    top: 85%;
  }
`;
export const LoginBox = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  width: 30rem;
  margin: auto 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .message {
    margin-top: 1rem;
    font-size: 1.3rem;

    h1 {
      font-weight: bold;
    }

    h2 {
      text-transform: lowercase;
      font-weight: 500;
      color: #6a6b6f;
    }
  }

  form {
    width: 100%;
    margin: 1rem 0;

    div {
      position: relative;
    }

    div.active label {
      opacity: 0;
    }

    div:last-of-type {
      margin-top: 1rem;
    }
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  display: block;
  transition: all 0.2s ease-in-out;
  color: #6a6b6f;

  ${props =>
    props.fill &&
    css`
      display: none;
    `}

  position: absolute;
  bottom: 10%;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
  font-weight: bold;

  border-width: 0px 0px 2.5px 0px;
  border-color: #a5a5a5;
  background-repeat: no-repeat;
  color: #403b33;

  transition: 0.5s all ease;

  &:last-of-type {
    margin-top: 1.5rem;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:focus {
    border-color: #403b33;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.8rem;
  background: #fff;

  color: #403b33;
  font-size: 1.5rem;
  font-weight: 500;
  font-weight: 600;

  margin-top: 2rem;

  svg {
    margin-left: 0.5rem;
  }

  transition: 0.35s all ease-in-out;

  &:hover {
    transform: translateX(0.35rem);
  }

  &:active {
    transform: translateX(0rem);
  }
`;

export const Error = styled.div`
  background: tomato;
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  transition: 0.5 all ease-in-out;
`;
