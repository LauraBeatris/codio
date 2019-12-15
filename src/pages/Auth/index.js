import React, { Component } from 'react';
import Helmet from 'react-helmet';

import PropTypes from 'prop-types';
import queryString from 'query-string';
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';

import {
  AuthContainer,
  LoginBox,
  Input,
  Label,
  SubmitButton,
  LogoContainer,
  Error,
} from './styles';
import Transition from '../../styles/transition';

import Logo from '../../assets/transparent-logo.png';
import { InitConsumer } from '../../context';
import GithubApi from '../../services/api';

class Auth extends Component {
  state = {
    login: '',
    error: '',
    appear: false,
  };

  componentDidMount() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    if (params && params.message) this.setState({ error: params.message });
    this.setState({ appear: true });
  }

  componentWillUnmount() {
    this.setState({ appear: false });
  }

  handleSubmit = async ev => {
    ev.preventDefault();
    const { login } = this.state;

    // Doing a simple validation
    if (!login)
      return this.setState({ error: 'Please, provide a valid login' });

    return this.handleLogin(login);
  };

  // Doing the request to get user data
  handleLogin = async login => {
    const { history, session } = this.props;

    let user = null;
    await GithubApi.getUser(login.trim())
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

  handleAuthentication = async () => {
    await GithubApi.postAuthentication();
  };

  render() {
    const { error, login, appear } = this.state;
    return (
      <Transition pose={appear ? 'visible' : 'hidden'}>
        <AuthContainer>
          <Helmet>
            <title> Codio | Welcome </title>
          </Helmet>

          <LoginBox>
            <LogoContainer>
              <img src={Logo} alt="Codio Git" />
            </LogoContainer>

            <div className="message">
              <h1> Welcome, </h1>
              <h2>Sign in to continue</h2>
            </div>

            <form onSubmit={ev => this.handleSubmit(ev)} autoComplete="false">
              <div id="login-container">
                <Label id="login-label" filled={Boolean(login)} htmlFor="login">
                  {' '}
                  Enter your git username
                </Label>
                <Input
                  id="login"
                  type="text"
                  onFocus={() => {
                    const loginField = document.getElementById(
                      'login-container'
                    );
                    loginField.classList.add('active');
                  }}
                  onBlur={() => {
                    const loginField = document.getElementById(
                      'login-container'
                    );
                    loginField.classList.remove('active');
                  }}
                  onChange={ev => this.setState({ login: ev.target.value })}
                />
              </div>
              {error && (
                <Error>
                  <FaExclamationTriangle color="#fff" /> {error}
                </Error>
              )}
              <SubmitButton error={!!error}>
                Sign in
                <FaArrowRight />
              </SubmitButton>
            </form>
          </LoginBox>
        </AuthContainer>
      </Transition>
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
