import axios from 'axios';

class GithubApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
    });
    this.login = JSON.parse(localStorage.getItem('codio_user'))
      ? JSON.parse(localStorage.getItem('codio_user')).login
      : null;
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

  // Getting the auth token of the user
  postAuthentication(login, password) {
    return new Promise((resolve, reject) => {
      this.api
        .post('/user', { username: 'LauraBeatris', password: 'Eamsc4544' })
        .then(res => resolve(console.log(res.data)))
        .catch(err => reject(console.log(err)));
    });
  }

  // Getting the repositories of the user
  getRepositories(login) {
    this.login = login.login;
    return new Promise((resolve, reject) => {
      this.api
        .get(`/users/${login.login.trim()}/repos`)
        .then(async res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the data from a single repo
  getRepository(name) {
    const getRepo = this.api.get(`/repos/${this.login}/${name}`);
    const getBranches = this.api.get(`/repos/${this.login}/${name}/branches`);
    const getCommits = this.api.get(`/repos/${this.login}/${name}/commits`);
    const getReleases = this.api.get(`/repos/${this.login}/${name}/releases`);
    const getContributors = this.api.get(
      `/repos/${this.login}/${name}/contributors`
    );
    const getPullRequests = this.api.get(
      `/repos/${this.login}/${name}/pulls?state=all`
    );
    const getIssues = this.api.get(`/repos/${this.login}/${name}/issues`);

    return Promise.all([
      getRepo,
      getBranches,
      getCommits,
      getReleases,
      getContributors,
      getPullRequests,
      getIssues,
    ])
      .then(res => res)
      .catch(err => err);
  }

  getFiles(name, ref = 'master') {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/repos/${this.login}/${name}/contents?ref=${ref}`)
        .then(async res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
}

export default new GithubApi();
