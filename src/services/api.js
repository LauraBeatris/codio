import axios from 'axios';

class GithubApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
    });
  }

  // Getting the informations about the user, like avatar, repo numbers, etc
  getUser(login) {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/users/${login}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
}

export default new GithubApi();
