import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

import {
  AuthContainer,
  LoginBox,
  Input,
  Label,
  SubmitButton,
  LogoContainer,
  Error,
} from './styles';
import Logo from '../../assets/transparent-logo.png';

export default class Auth extends Component {
  state = {
    login: '',
    password: '',
    error: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { login, password } = this.state;
    const { history } = this.props;

    // Doing a simple validation
    if (!login)
      return this.setState({ error: 'Please, provide a valid login' });
    if (!password)
      return this.setState({ error: 'Please, provide a valid password' });

    // Redirecting to the dashboard
    return history.push('/dashboard/repositories');
  };

  render() {
    const { error, login, password } = this.state;
    return (
      <AuthContainer>
        <LoginBox>
          <LogoContainer>
            <img src={Logo} alt="Codio Git" />
          </LogoContainer>

          <div className="message">
            <h1> Welcome, </h1>
            <h2>Sign in to continue</h2>
          </div>

          <form onSubmit={ev => this.handleSubmit(ev)} autoComplete={false}>
            <div id="login-container">
              <Label id="login-label" fill={!!login} htmlFor="login">
                {' '}
                Enter your username
              </Label>
              <Input
                id="login"
                type="text"
                autoComplete={false}
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
              <Label id="password-label" fill={!!password} htmlFor="password">
                Enter your password
              </Label>

              <Input
                id="password"
                type="password"
                autoComplete={false}
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
            {error && <Error>{error}</Error>}
            <SubmitButton error={!!error}>
              Login
              <FaArrowRight />
            </SubmitButton>
          </form>
        </LoginBox>
      </AuthContainer>
    );
  }
}

Auth.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
