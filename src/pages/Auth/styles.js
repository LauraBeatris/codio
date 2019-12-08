import styled from 'styled-components';

export const AuthContainer = styled.div`
  min-height: 100vh;
  background: #252429;
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
    height: 12rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.1rem;
    color: #403b33;

    position: absolute;
    top: 85%;
  }
`;
export const LoginBox = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 30rem;
  margin: auto 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.4);

  form {
    width: 100%;
    margin: 1rem 0;

    div {
      position: relative;
    }

    div.active label {
      transform: translateX(-6px) scale(0.9);
      color: #38373d;
      font-weight: 500;
    }

    div:last-of-type {
      margin-top: 1rem;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  z-index: 11;
  margin-bottom: 1rem;
  font-weight: bold;
  display: block;
  top: 0.5rem;
  left: 0.8rem;
  transition: all 0.2s ease-in-out;
  position: absolute;

  span {
    color: red;
  }

  &:focus {
    color: red;
  }
`;

export const Input = styled.input`
  z-index: 10;
  display: block;
  padding: 3.2rem 1rem 2rem 1rem;
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
  font-weight: bold;

  border-width: 1px;
  border-radius: 0.8rem;
  border-color: #252429;
  background-repeat: no-repeat;
  color: #403b33;

  &:last-of-type {
    margin-top: 1.5rem;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  border: none;
  border-radius: 0.8rem;
  background: ${props => (props.error ? '#4b4a51' : '#403b33')};

  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  font-weight: 600;

  margin-top: 2rem;
  padding: 1rem;

  width: 100%;
  box-shadow: 0.1rem 0.1rem 2rem 0.5rem rgba(0, 0, 0, 0.3);

  transition: 0.35s all ease-in-out;

  &:hover {
    background: #161519;
    transform: translateY(-0.35rem);
  }

  &:active {
    transform: translateY(0rem);
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
