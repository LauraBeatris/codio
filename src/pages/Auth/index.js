import React, { Component } from 'react';

import {
  AuthContainer,
  LoginBox,
  Input,
  Label,
  SubmitButton,
  LogoContainer,
} from './styles';
import Logo from '../../assets/logo.png';

export default class Auth extends Component {
  state = {
    login: '',
    password: '',
    error: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { login, password } = this.state;
    console.log('hey');
    if (!login)
      return this.setState({ error: 'Please, provide a valid login' });
    if (!password)
      return this.setState({ error: 'Please, provide a valid password' });

    this.setState({ error: null });
    // TO DO -> Redirect to the dashboard and fetch the user data
    return true;
  };

  render() {
    const { error } = this.state;
    return (
      <AuthContainer>
        <LoginBox>
          <LogoContainer>
            <img src={Logo} alt="Codio Git" />
            <h1> Codio </h1>
          </LogoContainer>

          <form onSubmit={ev => this.handleSubmit(ev)}>
            <div id="login-container">
              <Label id="login-label" htmlFor="login">
                {' '}
                Enter your username:<span>*</span>
              </Label>
              <Input
                id="login"
                type="text"
                onFocus={() => {
                  const loginField = document.getElementById('login-container');
                  loginField.classList.add('active');
                }}
                onBlur={() => {
                  const loginField = document.getElementById('login-container');
                  loginField.classList.remove('active');
                }}
                onChange={ev => this.setState({ login: ev.target.value })}
              />
            </div>

            <div id="password-container">
              <Label id="password-label" htmlFor="password">
                {' '}
                Enter your password:<span>*</span>
              </Label>
              <Input
                id="password"
                type="password"
                onFocus={() => {
                  const passwordField = document.getElementById(
                    'password-container'
                  );
                  passwordField.classList.add('active');
                }}
                onBlur={() => {
                  const passwordField = document.getElementById(
                    'password-container'
                  );
                  passwordField.classList.remove('active');
                }}
                onChange={ev => this.setState({ password: ev.target.value })}
              />
            </div>

            <SubmitButton disabled={!!error}> Login </SubmitButton>
          </form>
        </LoginBox>
      </AuthContainer>
    );
  }
}
