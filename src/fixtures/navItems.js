export const mainItems = [
  { name: 'Dashboard', active: '/dashboard/repositories' },
];

export const repositoryItems = (
  path,
  issues,
  pullRequests,
  commits,
  repository
) => {
  return [
    { name: 'Code', repository, active: path },
    { name: 'Issues', number: issues, active: `${path}/issues` },
    {
      name: 'Pull Requests',
      number: pullRequests,
      active: `${path}/pullrequests`,
    },
    { name: 'Wiki', active: false },
    { name: 'Insights', active: false },
    { name: 'Commits', number: commits, active: `${path}/commits` },
  ];
};
