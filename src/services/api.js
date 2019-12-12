import axios from 'axios';

class GithubApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
    });
    this.login = JSON.parse(localStorage.getItem('codio_user')).login || null;
  }

  // Getting the informations about the user, like avatar, repo numbers, etc
  getUser(login) {
    // Saving the login at a instance, only if it's not coming from localStorage yet
    if (!this.login) this.login = login;

    return new Promise((resolve, reject) => {
      this.api
        .get(`/users/${login}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the repositories of the user
  getRepositories() {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/users/${this.login}/repos`)
        .then(async res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
}

export default new GithubApi();
