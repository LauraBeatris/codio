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
import { InitConsumer } from '../../context';
import GithubApi from '../../services/api';

class Auth extends Component {
  state = {
    login: '',
    error: '',
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const { login } = this.state;
    const { history, session } = this.props;

    // Doing a simple validation
    if (!login)
      return this.setState({ error: 'Please, provide a valid login' });

    // Doing the request to get user data
    let user = null;
    await GithubApi.getUser(login)
      .then(res => {
        user = res;
        return res;
      })
      .catch(() => this.setState({ error: 'User not found' }));
    // Storing - Context
    await session.updateValues({ user });
    // Redirecting to the dashboard
    return user && history.push('/dashboard/repositories');
  };

  render() {
    const { error, login } = this.state;
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
                Enter your git username
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

const ContextAuth = props => (
  <InitConsumer>
    {session => <Auth {...props} session={session} />}
  </InitConsumer>
);

Auth.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  session: PropTypes.shape({ updateValues: PropTypes.func.isRequired })
    .isRequired,
};

export { ContextAuth as default, Auth };
