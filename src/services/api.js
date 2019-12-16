import axios from 'axios';

class GithubApi {
  constructor() {
    if (process.env.NODE_ENV !== 'development') {
      this.api = axios.create({
        baseURL: 'https://api.github.com',
      });
    } else {
      this.api = axios.create({
        baseURL: 'https://api.github.com',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3.raw',
          Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
        },
      });
    }

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
        .get('/user', {
          headers: {
            username: 'LauraBeatris',
            password: 'eamsc4544',
          },
        })
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
  getRepository(name, page) {
    const getRepo = this.api.get(`/repos/${this.login}/${name}?page=${page}`);
    const getBranches = this.api.get(
      `/repos/${this.login}/${name}/branches?page=${page}`
    );
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

  // Getting the commits of the repository, with pagination and state
  getCommits(name, page = 1) {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/repos/${this.login}/${name}/commits?page=${page}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the issues of the repository, with pagination and state
  getIssues(name, page = 1, state = 'all') {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/repos/${this.login}/${name}/issues?page=${page}&state=${state}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the pull requests of the repository, with pagination and state
  getPullRequests(name, page = 1, state = 'all') {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/repos/${this.login}/${name}/pulls?page=${page}&state=${state}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the files from the repo - Passing the reference - Master as default
  getFiles(name, ref = 'master') {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/repos/${this.login}/${name}/contents?ref=${ref}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // Getting the events related to the user
  getEvents() {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/users/${this.login}/events`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
}

export default new GithubApi();
