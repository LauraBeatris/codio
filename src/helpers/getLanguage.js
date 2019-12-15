export default (repositories, repoName) => {
  const repository = repositories.find(r => r.name === repoName);
  return repository.language;
};
